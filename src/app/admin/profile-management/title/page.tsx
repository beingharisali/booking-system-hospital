import React from 'react';
import Title from '@/components/Title';
import TitleList from '@/components/TitleList';

export default function TitlePage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Title
        </h2>
        <Title />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Title List</h2>
        <TitleList />
      </div>
    </>
  );
}