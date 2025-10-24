import React from 'react';
import ProfileConfiguration from '@/components/ProfileConfiguration';
import ProfileList from '@/components/ProfileList';

export default function page() {
  return (
    <>
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
    </>
  );
}