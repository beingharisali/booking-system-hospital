import React from 'react';
import ReferralRegistration from '@/components/ReferralRegistration';
import ReferralRegistrationList from '@/components/ReferralRegistrationList';

export default function ReferralRegistrationPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> Referral Registration
        </h2>
        <ReferralRegistration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Referral List</h2>
        <ReferralRegistrationList />
      </div>
    </>
  );
}