import "./globals.css";
import { Inter } from "next/font/google";
import React from "react"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
