const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");
const generateOtp = require("../utils/generateOtp");
const jwt = require("jsonwebtoken");

// Create JWT
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Send token + cookie
const createSendToken = (user, statusCode, res, message) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax",
  };

  res.cookie("token", token, cookieOptions);

  user.password = undefined;
  user.passwordConfirm = undefined;
  user.otp = undefined;

  res.status(statusCode).json({
    status: "success",
    message,
    token,
    data: { user },
  });
};

// ---------------------- SIGNUP ----------------------
exports.signup = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfirm, username } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return next(new AppError("Email already registered", 400));

  const otp = generateOtp();
  const otpExpires = Date.now() + 24 * 60 * 60 * 1000;

  const newUser = await User.create({
    username,
    email,
    password,
    passwordConfirm,
    otp,
    otpExpires,
  });

  try {
    await sendEmail({
      email: newUser.email,
      subject: "OTP for Your Account Verification",
      html: `<h2>Your OTP is <strong>${otp}</strong></h2>`,
    });

    createSendToken(newUser, 200, res, "Registration successful. OTP sent to email.");
  } catch (error) {
    await User.findByIdAndDelete(newUser._id);
    return next(new AppError("Error sending email. Try again.", 500));
  }
});

// ---------------------- VERIFY ACCOUNT ----------------------
exports.verifyAccount = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;

  if (!email || !otp) return next(new AppError("Email and OTP required", 400));

  const user = await User.findOne({ email });
  if (!user) return next(new AppError("User not found", 404));
  if (user.isverified) return next(new AppError("User already verified", 400));
  if (user.otp !== otp) return next(new AppError("Invalid OTP", 400));
  if (user.otpExpires < Date.now()) return next(new AppError("OTP expired", 400));

  user.isverified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    message: "Account verified successfully",
  });
});

// ---------------------- RESEND OTP ----------------------
exports.resendOTP = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next(new AppError("Email required", 404));

  const user = await User.findOne({ email });
  if (!user) return next(new AppError("User not found", 404));
  if (user.isverified) return next(new AppError("Account already verified", 400));

  const newOtp = generateOtp();
  user.otp = newOtp;
  user.otpExpires = Date.now() + 24 * 60 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  try {
    await sendEmail({
      email: user.email,
      subject: "Resend OTP",
      html: `<h1>Your new OTP is: ${newOtp}</h1>`,
    });

    res.status(200).json({
      status: "success",
      message: "A new OTP has been sent",
    });
  } catch (error) {
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError("Error sending email. Please try again.", 500));
  }
});


// ---------------------- LOGIN ----------------------
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return next(new AppError("Provide valid details", 400));

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, res, "Login successful");
});

// ---------------------- LOGOUT ----------------------
exports.logout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "logout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
  });

  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
});


// ---------------------- FORGOT PASSWORD ----------------------
exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return next(new AppError("No user found with this email", 404));

  const otp = generateOtp();
  user.resetPasswordOTP = otp;
  user.resetPasswordOTPExpires = Date.now() + 5 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  try {
    await sendEmail({
      email: user.email,
      subject: "Password reset OTP",
      html: `<h1>Your OTP: ${otp}</h1><p>It is valid for 5 minutes</p>`,
    });

    res.status(200).json({
      status: "success",
      message: "OTP sent for password reset",
    });
  } catch (error) {
    user.resetPasswordOTP = undefined;
    user.resetPasswordOTPExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError("Error sending OTP. Try again.", 500));
  }
});

// ---------------------- RESET PASSWORD ----------------------
exports.resetPassword = catchAsync(async (req, res, next) => {
  const { email, otp, password, passwordConfirm } = req.body;

  const user = await User.findOne({
    email,
    resetPasswordOTP: otp,
    resetPasswordOTPExpires: { $gt: Date.now() },
  });

  if (!user) return next(new AppError("Invalid or expired OTP", 404));

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.resetPasswordOTP = undefined;
  user.resetPasswordOTPExpires = undefined;

  await user.save();
  createSendToken(user, 200, res, "Password reset successful");
});
