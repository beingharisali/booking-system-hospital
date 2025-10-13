import React from 'react';
import Theme from '@/components/Theme';
import ThemeList from '@/components/ThemeList';

export default function ThemePage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Theme Form
        </h2>
        <Theme />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Theme List</h2>
        <ThemeList />
      </div>
    </>
  );
}