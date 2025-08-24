"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Signup = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) {
      setError("API URL not configured.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/users/signup`,
        formData,
        { withCredentials: true }
      );

      const user = response.data.data.user;

      // Store email in localStorage for verification step
      localStorage.setItem("emailToVerify", user.email);

      // Redirect to verify page (without auto-login)
      router.push("/auth/verify");

    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Signup error:", error.response?.data);
        setError(error.response?.data?.message || "Signup failed.");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
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
        <h1 className="text-center font-bold text-3xl mb-4 mt-4 logo">LOGO</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-200 rounded-md outline-none w-full mb-4"
            required
          />

          {error && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}

          <Button type="submit" className="mt-4 w-full" size="lg" disabled={loading}>
            {!loading ? "Submit" : <Loader className="animate-spin mr-2" />}
          </Button>
        </form>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
