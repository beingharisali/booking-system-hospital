import React from 'react';
import PartyPricing from '@/components/PartyPricing';
import PartyPricingList from '@/components/PartyPricingList';

export default function PartyPricingPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Party Pricing
        </h2>
        <PartyPricing />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Party Price List</h2>
        <PartyPricingList />
      </div>
    </>
  );
}