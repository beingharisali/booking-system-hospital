import React from 'react';
import Province from '@/components/Province';
import ProvinceList from '@/components/ProvinceList';

export default function ProvincePage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Province
        </h2>
        <Province />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Province List</h2>
        <ProvinceList />
      </div>
    </>
  );
}