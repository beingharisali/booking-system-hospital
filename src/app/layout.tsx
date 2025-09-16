// layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

// You can add metadata here if needed
export const metadata = {
  title: "HealthSol Dashboard",
  description: "Profile Management Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen bg-gray-100`}>
        {/* The 'children' prop will now render your CombinedDashboardPage */}
        {children}
      </body>
    </html>
  );
}