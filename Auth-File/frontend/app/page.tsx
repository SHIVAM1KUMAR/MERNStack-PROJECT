"use client";
import { Button } from '@/components/ui/button';
import { RootState } from '@/store/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from "@/components/LogoutButton";

 // ✅ import LogoutButton

const Homepage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log('Redux-user', user);

  return (
    <div className='h-[12vh] shadow-md'>
      <div className='w-[80%] mx-auto flex items-center justify-between h-full'>
        <h1 className='text-3xl font-bold uppercase'>Logo</h1>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="font-medium">Welcome, {user.username}</span>
            <LogoutButton />
          </div>
        ) : (
          <Link href="/auth/signup">
            <Button size="lg">Register</Button>
          </Link>
        )}
      </div>

      <h1 className='flex items-center justify-center h-[80vh] text-5xl font-bold'>
        HomePage
      </h1>
    </div>
  );
};

export default Homepage;
