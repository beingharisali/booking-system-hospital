"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  activeItem: string;
  setActiveItem: (item: string) => void;
  sidebarOpenWidth: string;
  sidebarClosedWidth: string;
}

interface NavItemProps {
  label: string;
  children?: React.ReactNode;
  activeItem: string;
  setActiveItem: (item: string) => void;
  href?: string;
  isSidebarOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  children,
  activeItem,
  setActiveItem,
  href,
  isSidebarOpen,
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

  const content = (
    <div
      className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700 ${
        isParentActive ? "bg-gray-700" : ""
      }`}
      onClick={() => {
        setActiveItem(label);
        if (children) {
          toggleOpen();
        }
      }}
    >
      <span className={isSidebarOpen ? "" : "hidden"}>{label}</span>
      {children && isSidebarOpen && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
    </div>
  );

  if (href && !children) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return (
    <div>
      {content}
      {isOpen && children && isSidebarOpen && (
        <div className="pl-2 bg-gray-800">{children}</div>
      )}
    </div>
  );
};

const SubItem: React.FC<{
  label: string;
  href: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
  isSidebarOpen: boolean;
}> = ({ label, href, activeItem, setActiveItem, isSidebarOpen }) => (
  <Link href={href}>
    <div
      className={`cursor-pointer px-4 py-3 w-full block ${
        activeItem === label ? "bg-gray-600 text-white" : "hover:bg-gray-700"
      } ${isSidebarOpen ? "" : "hidden"}`}
      onClick={() => setActiveItem(label)}
    >
      {label}
    </div>
  </Link>
);

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activeItem,
  setActiveItem,
  sidebarOpenWidth,
  sidebarClosedWidth,
}) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen bg-gray-800 text-white
        ${isOpen ? sidebarOpenWidth : sidebarClosedWidth}
        transform transition-all duration-300 ease-in-out
        z-30 flex flex-col
      `}
    >
      <div className="flex items-center justify-center p-4 bg-gray-900 flex-shrink-0 h-16 relative"> 
        <Image src="/logo.png" alt="Healthsol" width={100} height={40} />
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className={`p-4 text-sm uppercase text-gray-400 ${isOpen ? "" : "hidden"}`}>
          MAIN NAVIGATION
        </div>

        <NavItem
          label="Profile Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        >
          <SubItem
            label="Profile/LOV"
            href="/profile-management/profile-lov"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
            <SubItem
              label="Country"
              href="/profile-management/country"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isSidebarOpen={isOpen}
            />
            <SubItem
              label="Province"
              href="/profile-management/province"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isSidebarOpen={isOpen}
            />
          <SubItem
            label="City"
            href="/profile-management/city"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Currency"
            href="/profile-management/currency"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
            <SubItem
              label="Title"
              href="/profile-management/title"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isSidebarOpen={isOpen}
            />
            <SubItem
              label="Theme"
              href="/profile-management/theme"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isSidebarOpen={isOpen}
            />
          <SubItem
            label="Document Movement"
            href="/profile-management/document-movement"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
        </NavItem>

        <NavItem
          label="Organization Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        >
          <SubItem
            label="Organizations"
            href="/organization-management/organizations"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Departments"
            href="/organization-management/departments"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Units"
            href="/organization-management/units"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
        </NavItem>

        <NavItem
          label="Location Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        >
          <SubItem
            label="Locations"
            href="/location-management/locations"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Warehouses"
            href="/location-management/warehouses"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
        </NavItem>

        <NavItem
          label="Contact Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        >
          <SubItem
            label="Collection Point"
            href="/contact-management/collection-point"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Consultant Registration"
            href="/contact-management/consultant-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Corporate Registration"
            href="/contact-management/corporate-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Party Pricing"
            href="/contact-management/party-pricing"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Party Registration"
            href="/contact-management/party-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Person Registration"
            href="/contact-management/person-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="Referral Registration"
            href="/contact-management/referral-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
        </NavItem>

        <NavItem
          label="Employee Management"
          href="/employee-management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        >
        </NavItem>

        <NavItem
          label="Alerts Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        >
          <SubItem
            label="Email Alerts"
            href="/alerts-management/email-alerts"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
          <SubItem
            label="SMS Alerts"
            href="/alerts-management/sms-alerts"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isSidebarOpen={isOpen}
          />
        </NavItem>

        <NavItem
          label="Menu Configuration"
          href="/menu-configuration"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
        <NavItem
          label="Report Configuration"
          href="/report-configuration"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
        <NavItem
          label="User Management"
          href="/user-management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
        <NavItem
          label="Policy Management"
          href="/policy-management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
        <NavItem
          label="Template Management"
          href="/template-management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
        <NavItem
          label="Utility Management"
          href="/utility-management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
        <NavItem
          label="Reports Management"
          href="/reports-management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isOpen}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;