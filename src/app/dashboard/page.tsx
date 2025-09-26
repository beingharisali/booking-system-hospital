// dashboard/page.tsx or CombinedDashboardPage.tsx
'use client';
import React, { useState } from 'react';

import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
import ProfileConfiguration from '@/components/ProfileConfiguration';
import ProfileList from '@/components/ProfileList';
import Country from '@/components/Country';
import CountryList from '@/components/CountryList';
import Province from '@/components/Province';
import ProvinceList from '@/components/ProvinceList';
import City from '@/components/City';
import CityList from '@/components/CityList';
import Currency from '@/components/Currency';
import CurrencyList from '@/components/CurrencyList';
import Title from '@/components/Title';
import TitleList from '@/components/TitleList';
import Theme from '@/components/Theme'; 
import ThemeList from '@/components/ThemeList'; 
import Industry from '@/components/Industry'; 
import IndustryList from '@/components/IndustryList'; 
import Footer from '@/components/Footer';

export default function CombinedDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Profile/LOV"); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6 overflow-y-auto pb-20">
          {activeItem === "Profile/LOV" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Profile Configuration
              </h2>
              <ProfileConfiguration />
            </div>
          )}

          {activeItem === "Profile/LOV" && ( 
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Profile List</h2>
              <ProfileList />
            </div>
          )}

          {activeItem === "Country" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Country
              </h2>
              <Country />
            </div>
          )}

          {activeItem === "Country" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Country List</h2>
              <CountryList />
            </div>
          )}

          {activeItem === "Province" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Province
              </h2>
              <Province />
            </div>
          )}

          {activeItem === "Province" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Province List</h2>
              <ProvinceList />
            </div>
          )}

          {activeItem === "City" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> City
              </h2>
              <City />
            </div>
          )}

          {activeItem === "City" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">City List</h2>
              <CityList />
            </div>
          )}

          {activeItem === "Currency" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Currency
              </h2>
              <Currency />
            </div>
          )}

          {activeItem === "Currency" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Currency List</h2>
              <CurrencyList />
            </div>
          )}

          {activeItem === "Title" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Title
              </h2>
              <Title />
            </div>
          )}

          {activeItem === "Title" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Title List</h2>
              <TitleList />
            </div>
          )}

          {activeItem === "Theme" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Theme Form
              </h2>
              <Theme />
            </div>
          )}

          {activeItem === "Theme" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Theme List</h2>
              <ThemeList />
            </div>
          )}

          {/* New Industry Section */}
          {activeItem === "Industry" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Industry Form
              </h2>
              <Industry />
            </div>
          )}

          {activeItem === "Industry" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Industry List</h2>
              <IndustryList />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}