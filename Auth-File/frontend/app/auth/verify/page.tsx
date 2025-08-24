"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Verify = () => {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const email = typeof window !== "undefined" ? localStorage.getItem("emailToVerify") : null;

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/verify`,
        { email, otp },
        { withCredentials: true }
      );

      if (response.data.status === "success") {
        alert(response.data.message || "Account verified successfully");
        localStorage.removeItem("emailToVerify");
        router.push("/auth/login");
      } else {
        setError("Verification failed.");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Verification failed.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (!email) return;

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/resend-otp`,
        { email },
        { withCredentials: true }
      );
      alert("OTP sent to your email again.");
    } catch (err) {
      console.error("Resend OTP error:", err);
      alert("Failed to resend OTP.");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="shadow-md rounded-lg w-[90%] max-w-[450px] p-8 bg-white">
        <h1 className="text-center font-bold text-2xl mb-4 mt-2">Verify Email</h1>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />

          {error && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}

          <Button type="submit" className="mt-2 w-full" disabled={loading}>
            {!loading ? "Verify" : <Loader className="animate-spin mr-2" />}
          </Button>
        </form>

        <p className="mt-4 text-center">
          Didn't get the OTP?{" "}
          <button
            onClick={resendOtp}
            className="text-blue-600 hover:underline"
            disabled={loading}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default Verify;
