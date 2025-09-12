"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 min-h-screen">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        MAIN NAVIGATION
      </div>
      <ul className="space-y-1 text-sm">
        <li>
          <button
            onClick={() => toggleMenu("profile")}
            className="flex w-full justify-between px-4 py-2 hover:bg-gray-800"
          >
            Profile Management
            {openMenu === "profile" ? <ChevronDown /> : <ChevronRight />}
          </button>
          {openMenu === "profile" && (
            <ul className="ml-6 space-y-1">
              <li className="px-2 py-1 hover:bg-gray-800 cursor-pointer">
                Profile/LOV
              </li>
              <li className="px-2 py-1 hover:bg-gray-800 cursor-pointer">
                Country
              </li>
              <li className="px-2 py-1 hover:bg-gray-800 cursor-pointer">
                Province
              </li>
              {/* Add rest */}
            </ul>
          )}
        </li>
        {/* Add Organization, Location, Contact, etc. */}
      </ul>
    </aside>
  );
};

export default Sidebar;
