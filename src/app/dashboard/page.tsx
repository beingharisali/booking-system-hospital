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
import DocumentMovement from '@/components/DocumentMovement';
import DocumentMovementList from '@/components/DocumentMovementList';
import EmailConfiguration from '@/components/EmailConfiguration';
import EmailConfigurationList from '@/components/EmailConfigurationList';
import SMSConfiguration from '@/components/SMSConfiguration'; 
import SMSConfigurationList from '@/components/SMSConfigurationList'; 
import CollectionPoint from '@/components/CollectionPoint'; 
import CollectionPointList from '@/components/CollectionPointList'; 
import CorporateRegistration from '@/components/CorporateRegistration'; 
import CorporateRegistrationList from '@/components/CorporateRegistrationList'; 
import ConsultantRegistration from '@/components/ConsultantRegistration';
import ConsultantRegistrationList from '@/components/ConsultantRegistrationList';
import PartyPricing from '@/components/PartyPricing'; 
import PartyPricingList from '@/components/PartyPricingList'; 
import PartyRegistration from '@/components/PartyRegistration'; 
import PartyRegistrationList from '@/components/PartyRegistrationList'; 
import PersonRegistration from '@/components/PersonRegistration';
import PersonRegistrationList from '@/components/PersonRegistrationList';

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

          {activeItem === "Document Movement" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Document Movement Configuration
              </h2>
              <DocumentMovement />
            </div>
          )}

          {activeItem === "Document Movement" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Document Movement List</h2>
              <DocumentMovementList />
            </div>
          )}

          {activeItem === "SMS Alerts" && ( 
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> SMS Configuration
              </h2>
              <SMSConfiguration />
            </div>
          )}

          {activeItem === "SMS Alerts" && ( 
            <div className="bg-white p-6 rounded-lg shadow">
              <SMSConfigurationList />
            </div>
          )}

          {activeItem === "Email Alerts" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> EMail Configuration
              </h2>
              <EmailConfiguration />
            </div>
          )}

          {activeItem === "Email Alerts" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <EmailConfigurationList />
            </div>
          )}

          {activeItem === "Collection Point" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Party Collection
              </h2>
              <CollectionPoint />
            </div>
          )}

          {activeItem === "Collection Point" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Collection Point List</h2>
              <CollectionPointList />
            </div>
          )}

          {activeItem === "Consultant Registration" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Consultant Registration
              </h2>
              <ConsultantRegistration />
            </div>
          )}

          {activeItem === "Consultant Registration" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <ConsultantRegistrationList />
            </div>
          )}

          {activeItem === "Corporate Registration" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Corporate Registration
              </h2>
              <CorporateRegistration />
            </div>
          )}

          {activeItem === "Corporate Registration" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Corporate Registration List</h2>
              <CorporateRegistrationList />
            </div>
          )}

          {activeItem === "Person Registration" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Person Registration
              </h2>
              <PersonRegistration />
            </div>
          )}

          {activeItem === "Person Registration" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Person List</h2>
              <PersonRegistrationList />
            </div>
          )}

          {activeItem === "Party Pricing" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Party Pricing
              </h2>
              <PartyPricing />
            </div>
          )}

          {activeItem === "Party Pricing" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Party Price List</h2>
              <PartyPricingList />
            </div>
          )}

          {activeItem === "Party Registration" && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Dash Board <span className="text-gray-400">/</span> Party Registration
              </h2>
              <PartyRegistration />
            </div>
          )}

          {activeItem === "Party Registration" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <PartyRegistrationList />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}