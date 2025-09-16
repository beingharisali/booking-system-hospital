import React from 'react';
import { FaBars, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

interface HeaderProps {
  toggleSidebar: () => void;
}

// FC Function Component type
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-red-700 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 text-2xl focus:outline-none">
          <FaBars />
        </button>
        <h1 className="text-xl font-semibold">ADMINISTRATOR</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <span className="mr-2">Healthsol Hospital</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          <span>Head Office Location</span>
        </div>
        <div className="flex items-center">
          <FaUser className="mr-2" />
          <span>Administrator</span>
        </div>
      </div>
    </header>
  );
};

export default Header;