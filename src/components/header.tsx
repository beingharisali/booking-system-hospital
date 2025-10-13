import React from 'react';
import { FaBars, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean; 
  sidebarOpenWidth: string; 
  sidebarClosedWidth: string; 
}

const Header: React.FC<HeaderProps> = ({
  toggleSidebar,
  isSidebarOpen,
  sidebarOpenWidth,
  sidebarClosedWidth,
}) => {
  const headerContentMargin = isSidebarOpen ? `ml-${sidebarOpenWidth.slice(2)}` : `ml-${sidebarClosedWidth.slice(2)}`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-red-700 text-white p-4 flex justify-between items-center shadow-md h-16 z-40"> 
      <div className={`flex items-center transition-all duration-300 ease-in-out ${headerContentMargin}`}>
        <button
          onClick={toggleSidebar}
          className="text-2xl focus:ring-2 focus:ring-red-500 rounded p-1" 
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>
        <h1 className="text-xl font-semibold ml-4">ADMINISTRATOR</h1> 
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center text-sm sm:text-base">
          <span>Healthsol Hospital</span>
        </div>
        <div className="flex items-center text-sm sm:text-base">
          <FaMapMarkerAlt className="mr-2" />
          <span>Head Office Location</span>
        </div>
        <div className="flex items-center text-sm sm:text-base">
          <FaUser className="mr-2" />
          <span>Administrator</span>
        </div>
      </div>
    </header>
  );
};

export default Header;