import React from 'react';
import SMSConfiguration from '@/components/SMSConfiguration';
import SMSConfigurationList from '@/components/SMSConfigurationList';

export default function SmsAlertsPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> SMS Configuration
        </h2>
        <SMSConfiguration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">SMS Configuration List</h2>
        <SMSConfigurationList />
      </div>
    </>
  );
}