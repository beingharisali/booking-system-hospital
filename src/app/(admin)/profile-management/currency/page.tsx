import React from 'react';
import Currency from '@/components/Currency';
import CurrencyList from '@/components/CurrencyList';

export default function CurrencyPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Currency
        </h2>
        <Currency />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Currency List</h2>
        <CurrencyList />
      </div>
    </>
  );
}