import React from "react";
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";

const ThemeList: React.FC = () => {
  const themes = [
    {
      sr: 1,
      themeName: "Default Theme",
      backgroundColor: "#FFFFFF",
      menuColor: "#333333",
      hoverColor: "#555555",
      selectColor: "#007bff",
    },
    {
      sr: 2,
      themeName: "Dark Theme",
      backgroundColor: "#1a202c",
      menuColor: "#e2e8f0",
      hoverColor: "#a0aec0",
      selectColor: "#667eea",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 text-gray-700 font-semibold">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
              {[
                "Sr#",
                "Theme Name",
                "Background Color",
                "Menu Color",
                "Hover Color",
                "Select Color",
                "Edit",
                "Delete",
              ].map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left border border-gray-400 font-semibold"
                >
                  <div className="flex items-center">
                    {header}
                    {header !== "Edit" && header !== "Delete" && (
                      <div className="ml-1 flex flex-col">
                        <FaChevronUp className="h-2 w-2 cursor-pointer" />
                        <FaChevronDown className="h-2 w-2 cursor-pointer" />
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {themes.map((theme, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{theme.sr}</td>
                <td className="py-2 px-4">{theme.themeName}</td>
                <td className="py-2 px-4">{theme.backgroundColor}</td>
                <td className="py-2 px-4">{theme.menuColor}</td>
                <td className="py-2 px-4">{theme.hoverColor}</td>
                <td className="py-2 px-4">{theme.selectColor}</td>
                <td className="py-2 px-4 text-center">
                  <button className="text-gray-700 hover:text-blue-600">
                    <FaEdit />
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing 1 to {themes.length} of {themes.length} entries
        </div>
      </div>
    </div>
  );
};

export default ThemeList;