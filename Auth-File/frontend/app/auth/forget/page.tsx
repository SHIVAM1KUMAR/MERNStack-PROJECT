"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/forgot-pass`,
        { email },
        { withCredentials: true }
      );

      localStorage.setItem("emailToReset", email);
      router.push("/auth/reset");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-[90%] max-w-[450px] p-8">
        <h1 className="text-center font-bold text-2xl mb-6">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />

          {error && (
            <p className="text-red-600 text-sm text-center mb-2">{error}</p>
          )}

          <Button className="w-full" disabled={loading}>
            {!loading ? "Send OTP" : <Loader className="animate-spin mr-2" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
