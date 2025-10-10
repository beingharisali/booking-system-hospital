"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
          React.isValidElement<{ label: string; href?: string }>(child) &&
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
          React.isValidElement<{ label: string; href?: string }>(child) &&
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
  href: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
}> = ({ label, href, activeItem, setActiveItem }) => (
  <Link href={href} passHref>
    <div
      className={`cursor-pointer px-4 py-3 w-full block ${
        activeItem === label ? "bg-gray-600 text-white" : "hover:bg-gray-700"
      }`}
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
}) => {
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
            href="src/app/(admin)/profile-management/profile-lov" 
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
            <SubItem
              label="Country"
              href="src/app/(admin)/profile-management/country"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <SubItem
              label="Province"
              href="src/app/(admin)/profile-management/province"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          <SubItem
            label="City"
            href="src/app/(admin)/profile-management/city"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Currency"
            href="src/app/(admin)/profile-management/currency"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
            <SubItem
              label="Title"
              href="src/app/(admin)/profile-management/title"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <SubItem
              label="Theme"
              href="src/app/(admin)/profile-management/theme"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          <SubItem
            label="Document Movement"
            href="src/app/(admin)/profile-management/document-movement"
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
            href=""
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Departments"
            href=""
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Units"
            href=""
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
            href=""
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Warehouses"
            href=""
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </NavItem>

        <NavItem
          label="Contact Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <SubItem
            label="Collection Point"
            href="src/app/(admin)/contact-management/collection-point"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Consultant Registration"
            href="src/app/(admin)/contact-management/consultant-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Corporate Registration"
            href="src/app/(admin)/contact-management/corporate-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Party Pricing"
            href="src/app/(admin)/contact-management/party-pricing"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Party Registration"
            href="src/app/(admin)/contact-management/party-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Person Registration"
            href="src/app/(admin)/contact-management/person-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="Referral Registration"
            href="src/app/(admin)/contact-management/referral-registration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </NavItem>

        <NavItem
          label="Employee Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
        </NavItem>

        <NavItem
          label="Alerts Management"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          <SubItem
            label="Email Alerts"
            href="src/app/(admin)/alerts-management/email-alerts"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SubItem
            label="SMS Alerts"
            href="src/app/(admin)/alerts-management/sms-alerts"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </NavItem>

        <Link href="/admin/menu-configuration" passHref>
          <NavItem
            label="Menu Configuration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
        <Link href="/admin/report-configuration" passHref>
          <NavItem
            label="Report Configuration"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
        <Link href="/admin/user-management" passHref>
          <NavItem
            label="User Management"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
        <Link href="/admin/policy-management" passHref>
          <NavItem
            label="Policy Management"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
        <Link href="/admin/template-management" passHref>
          <NavItem
            label="Template Management"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
        <Link href="/admin/utility-management" passHref>
          <NavItem
            label="Utility Management"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
        <Link href="/admin/reports-management" passHref>
          <NavItem
            label="Reports Management"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;