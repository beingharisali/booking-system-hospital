import React from 'react';
import CollectionPoint from '@/components/CollectionPoint';
import CollectionPointList from '@/components/CollectionPointList';

export default function CollectionPointPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Party Collection
        </h2>
        <CollectionPoint />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Collection Point List</h2>
        <CollectionPointList />
      </div>
    </>
  );
}