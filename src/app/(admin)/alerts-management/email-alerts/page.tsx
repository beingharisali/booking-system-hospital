import React from 'react';
import EmailConfiguration from '@/components/EmailConfiguration';
import EmailConfigurationList from '@/components/EmailConfigurationList';

export default function EmailAlertsPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dash Board <span className="text-gray-400">/</span> EMail Configuration
        </h2>
        <EmailConfiguration />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Email Configuration List</h2>
        <EmailConfigurationList />
      </div>
    </>
  );
}