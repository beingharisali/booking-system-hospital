import React from 'react';
import DocumentMovement from '@/components/DocumentMovement';
import DocumentMovementList from '@/components/DocumentMovementList';

export default function DocumentMovementPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Document Movement Configuration
        </h2>
        <DocumentMovement />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Document Movement List</h2>
        <DocumentMovementList />
      </div>
    </>
  );
}