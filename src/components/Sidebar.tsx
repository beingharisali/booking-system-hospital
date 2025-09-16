// Sidebar.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItemProps {
  label: string;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
        onClick={toggleOpen}
      >
        <span>{label}</span>
        {children && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
      </div>
      {isOpen && children && (
        <div className="pl-6 bg-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

const SubItem: React.FC<{ label: string }> = ({ label }) => (
  <div className="p-3 cursor-pointer hover:bg-gray-600">
    {label}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-30 flex flex-col`} 
    >
      <div className="flex items-center justify-center p-4 bg-gray-900 flex-shrink-0"> {/* Added flex-shrink-0 */}
        <Image src="/logo.png" alt="Healthsol" width={100} height={40} /> 
      </div>
      <nav className="mt-4 flex-1 overflow-y-auto"> {/* Added flex-1 and overflow-y-auto here */}
        <div className="p-4 text-sm uppercase text-gray-400">Main Navigation</div>
        <NavItem label="Profile Management">
          <SubItem label="Profile/LOV" />
          <SubItem label="Country" />
          <SubItem label="Province" />
          <SubItem label="City" />
          <SubItem label="Currency" />
          <SubItem label="Title" />
          <SubItem label="Theme" />
          <SubItem label="Industry" />
          <SubItem label="Document Movement" />
        </NavItem>
        <NavItem label="Organization Management">
          {/* sub items likhni hain yaha sir*/}
          <SubItem label="Organizations" /> {/* Example sub-item */}
          <SubItem label="Departments" /> {/* Example sub-item */}
          <SubItem label="Units" /> {/* Example sub-item */}
        </NavItem>
        <NavItem label="Location Management">
          <SubItem label="Locations" /> {/* Example sub-item */}
          <SubItem label="Warehouses" /> {/* Example sub-item */}
        </NavItem>
        <NavItem label="Contact Management">
          <SubItem label="Contacts" /> {/* Example sub-item */}
        </NavItem>
        <NavItem label="Employee Management">
          <SubItem label="Employees" /> {/* Example sub-item */}
        </NavItem>
        {/* Adding more items to demonstrate scrolling */}
        <NavItem label="Reporting">
          <SubItem label="Sales Report" />
          <SubItem label="Inventory Report" />
        </NavItem>
        <NavItem label="Settings">
          <SubItem label="General Settings" />
          <SubItem label="User Management" />
        </NavItem>
        <NavItem label="Help">
          <SubItem label="Documentation" />
          <SubItem label="Support" />
        </NavItem>
        <NavItem label="About">
          <SubItem label="Version Info" />
        </NavItem>
      </nav>
    </aside>
  );
};

export default Sidebar;