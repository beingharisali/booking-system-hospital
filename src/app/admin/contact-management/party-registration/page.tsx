import React from 'react';
import PartyRegistration from '@/components/PartyRegistration';
import PartyRegistrationList from '@/components/PartyRegistrationList';

export default function PartyRegistrationPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Party Registration
        </h2>
        <PartyRegistration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Party Registration List</h2>
        <PartyRegistrationList />
      </div>
    </>
  );
}