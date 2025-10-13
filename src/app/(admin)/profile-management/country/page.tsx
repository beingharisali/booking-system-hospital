import React from 'react';
import Country from '@/components/Country';
import CountryList from '@/components/CountryList';

export default function CountryPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Country
        </h2>
        <Country />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Country List</h2>
        <CountryList />
      </div>
    </>
  );
}