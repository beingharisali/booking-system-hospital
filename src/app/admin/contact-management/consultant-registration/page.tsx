import React from 'react';
import ConsultantRegistration from '@/components/ConsultantRegistration';
import ConsultantRegistrationList from '@/components/ConsultantRegistrationList';

export default function ConsultantRegistrationPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Consultant Registration
        </h2>
        <ConsultantRegistration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Consultant Registration List</h2>
        <ConsultantRegistrationList />
      </div>
    </>
  );
}