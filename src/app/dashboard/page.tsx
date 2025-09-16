'use client';
import React, { useState } from 'react';

// Import all your components
import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
import ProfileConfiguration from '@/components/ProfileConfiguration';
import ProfileList from '@/components/ProfileList';
import Footer from '@/components/Footer';

export default function CombinedDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar remains the same */}
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Header remains the same */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main content area, now containing both ProfileConfiguration and ProfileList */}
        <main className="flex-1 p-6 overflow-y-auto pb-20">
          {/* Profile Configuration Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Dash Board <span className="text-gray-400">/</span> Profile Configuration
            </h2>
            <ProfileConfiguration />
          </div>

          {/* Profile List Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Profile List</h2>
            <ProfileList />
          </div>
        </main>

        {/* Footer remains the same */}
        <Footer />
      </div>
    </>
  );
}