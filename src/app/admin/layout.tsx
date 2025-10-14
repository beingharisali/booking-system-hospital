"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarOpenWidth = "w-64";
  const sidebarClosedWidth = "w-16";
  const headerHeight = "h-16";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        sidebarOpenWidth={sidebarOpenWidth}
        sidebarClosedWidth={sidebarClosedWidth}
      />

      {/* Main content + sidebar */}
      <div className="flex flex-1 mt-16">
        <Sidebar
          isOpen={isSidebarOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          sidebarOpenWidth={sidebarOpenWidth}
          sidebarClosedWidth={sidebarClosedWidth}
        />

        <main
          className={`
            flex-1 p-6 transition-all duration-300 ease-in-out
            ${isSidebarOpen ? "ml-64" : "ml-16"}
          `}
        >
          {children}
        </main>
      </div>

      {/* Footer stays at the bottom of the page */}
      <div
        className={`
          bg-gray-800 text-white shadow-inner flex items-center justify-center h-16
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-16 w-[calc(100%-4rem)]"}
        `}
      >
        <Footer />
      </div>
    </div>
  );
}
