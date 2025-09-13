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
      } z-30`}
    >
      <div className="flex items-center justify-center p-4 bg-gray-900">
        <Image src="/logo.png" alt="Healthsol" width={100} height={40} /> 
      </div>
      <nav className="mt-4">
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
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
          <SubItem label="" />
        </NavItem>
        <NavItem label="Location Management">
          {/* sub items */}
        </NavItem>
        <NavItem label="Contact Management">
          {/* sub items */}
        </NavItem>
        <NavItem label="Employee Management">
          {/* sub items */}
        </NavItem>
      </nav>
    </aside>
  );
};

export default Sidebar;