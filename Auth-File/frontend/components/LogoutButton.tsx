"use client";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/logout`, {
        withCredentials: true,
      });
      dispatch(setAuthUser(null));
      router.push("/auth/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
