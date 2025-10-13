import React from 'react';
import CorporateRegistration from '@/components/CorporateRegistration';
import CorporateRegistrationList from '@/components/CorporateRegistrationList';

export default function CorporateRegistrationPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Corporate Registration
        </h2>
        <CorporateRegistration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Corporate Registration List</h2>
        <CorporateRegistrationList />
      </div>
    </>
  );
}