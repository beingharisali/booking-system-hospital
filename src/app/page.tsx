'use client';
import React from 'react';
import RootLayout from './(admin)/layout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function HomePage() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/admin/profile-management/profile-lov');
  // }, [router]);

  return (
    <div>
      <RootLayout />
    </div>
  );
  
}