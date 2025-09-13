'use client';
import React, { useState } from 'react';

import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import ProfileConfiguration from '../../components/ProfileConfiguration';
import ProfileList from '../../components/ProfileList';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Dash Board <span className="text-gray-400">/</span> Profile Configuration
            </h2>
            <ProfileConfiguration />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Profile List</h2>
            <ProfileList />
          </div>
        </main>
      </div>
    </>
  );
}
