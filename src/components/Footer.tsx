import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center text-sm flex justify-center items-center h-16 w-full mt-auto">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span>
          Copyright © 2014-2025{' '}
          <a href="#" className="text-blue-400 hover:underline">
            HealthSol Solutions.
          </a>{' '}
          All rights reserved.
        </span>
        <span>Version 1.1</span>
      </div>
    </footer>
  );
};

export default Footer;
