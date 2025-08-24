const express = require("express");
const router = express.Router();

const {
  signup,
  verifyAccount,
  resendOTP,
  login,
  logout,
  forgotPassword, // 🟢 Typo fixed here
  resetPassword,
} = require("../controller/authController");

const isAuthenticated = require("../middlewares/isAuthenticated");

// Signup route
router.post("/signup", signup);

// Verify route (user must be authenticated first)
router.post("/verify", isAuthenticated, verifyAccount);

// Resend OTP route
router.post("/resend-otp", isAuthenticated, resendOTP);

// User login route

router.post("/login", login);

// Logout route
router.post("/logout", logout);

// Forgot password route (🟢 Typo fixed: was '/forgrt-pass')
router.post("/forgot-pass", forgotPassword);

// Reset password route (🟢 Just improved spelling)
router.post("/reset-pass", resetPassword);

module.exports = router;
