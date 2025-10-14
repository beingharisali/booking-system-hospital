import React from 'react';
import PersonRegistration from '@/components/PersonRegistration';
import PersonRegistrationList from '@/components/PersonRegistrationList';

export default function PersonRegistrationPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Person Registration
        </h2>
        <PersonRegistration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Person List</h2>
        <PersonRegistrationList />
      </div>
    </>
  );
}