"use client";

import { Button } from "@/components/ui/button";
import { setAuthUser } from "@/store/authSlice";
import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        formData,
        { withCredentials: true }
      );

      dispatch(setAuthUser(response.data.data.user));
      router.push("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Login failed.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="shadow-md rounded-lg w-[90%] max-w-[450px] p-8 bg-white">
        <h1 className="text-center font-bold text-3xl mb-4 mt-4 logo">LOGO</h1>
        <form onSubmit={handleSubmit}>
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

          {error && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}

          <Button type="submit" className="mt-4 w-full" size="lg" disabled={loading}>
            {!loading ? "Login" : <Loader className="animate-spin mr-2" />}
          </Button>
        </form>

        <div className="text-center mt-6">
          <Link href="/auth/forget" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
