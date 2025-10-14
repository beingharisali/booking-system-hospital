'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const cards = [
    { title: 'Admin', route: '/admin', color: 'bg-blue-500' },
    { title: 'Patients', route: '/patients', color: 'bg-green-500' },
    { title: 'Operation Theatre', route: '/operation-theatre', color: 'bg-purple-500' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => router.push(card.route)}
            className={`cursor-pointer ${card.color} text-white text-center py-16 rounded-2xl shadow-lg transform transition duration-300 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
