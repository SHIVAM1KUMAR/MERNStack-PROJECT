"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {
  const router = useRouter();

  const email = typeof window !== "undefined" ? localStorage.getItem("emailToReset") : "";

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/reset-pass`,
        {
          email,
          otp,
          password: newPassword,
          passwordConfirm: confirmPassword,
        },
        { withCredentials: true }
      );

      localStorage.removeItem("emailToReset");
      router.push("/auth/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-[90%] max-w-[450px] p-8">
        <h1 className="text-center font-bold text-2xl mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />

          {error && (
            <p className="text-red-600 text-sm text-center mb-2">{error}</p>
          )}

          <Button className="w-full" disabled={loading}>
            {!loading ? "Reset Password" : <Loader className="animate-spin mr-2" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
