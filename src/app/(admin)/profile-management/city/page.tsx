import React from 'react';
import City from '@/components/City';
import CityList from '@/components/CityList';

export default function CityPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> City
        </h2>
        <City />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">City List</h2>
        <CityList />
      </div>
    </>
  );
}