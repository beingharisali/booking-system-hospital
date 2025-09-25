"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  activeItem: string; 
  setActiveItem: (item: string) => void; 
}

interface NavItemProps {
  label: string;
  children?: React.ReactNode;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  children,
  activeItem,
  setActiveItem,
}) => {
  const initialIsOpen =
    activeItem === label ||
    (children &&
      React.Children.toArray(children).some(
        (child) =>
          React.isValidElement<{ label: string }>(child) &&
          child.props.label === activeItem
      ));

  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isParentActive =
    activeItem === label ||
    (children &&
      React.Children.toArray(children).some(
        (child) =>
          React.isValidElement<{ label: string }>(child) &&
          child.props.label === activeItem
      ));

  return (
    <div>
      <div
        className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700 ${
          isParentActive ? "bg-gray-700" : ""
        }`}
        onClick={() => {
          if (children) {
            toggleOpen();
          } else {
            setActiveItem(label); 
          }
        }}
      >
        <span>{label}</span>
        {children && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
      </div>
      {isOpen && children && (
        <div className="pl-2 bg-gray-800">{children}</div>
      )}
    </div>
  );
};

const SubItem: React.FC<{
  label: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
}> = ({ label, activeItem, setActiveItem }) => (
  <div
    className={`cursor-pointer px-4 py-3 w-full block ${
      activeItem === label ? "bg-gray-600 text-white" : "hover:bg-gray-700"
    }`}
    onClick={() => setActiveItem(label)} 
  >
    {label}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeItem, setActiveItem }) => {

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-30 flex flex-col`}
    >
      <div className="flex items-center justify-center p-4 bg-gray-900 flex-shrink-0">
        <Image src="/logo.png" alt="Healthsol" width={100} height={40} />
      </div>

      <nav className="mt-4 flex-1 overflow-y-auto">
        <div className="p-4 text-sm uppercase text-gray-400">
          Main Navigation
        </div>

        <NavItem
          label="Profile Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <SubItem
            label="Profile/LOV"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Country"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Province"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="City"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Currency"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem // Added
            label="Title"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </NavItem>

        <NavItem
          label="Organization Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <SubItem
            label="Organizations"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Departments"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Units"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </NavItem>

        <NavItem
          label="Location Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <SubItem
            label="Locations"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Warehouses"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </NavItem>
      </nav>
    </aside>
  );
};

export default Sidebar;