import React, { useState } from "react";

const Theme: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Menu"); 

  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Theme
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="themeName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Theme Name
            </label>
            <input
              type="text"
              id="themeName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="backgroundColor"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Background Color
            </label>
            <input
              type="text"
              id="backgroundColor"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex border-b border-gray-300">
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === "Menu"
                  ? "border-b-2 border-blue-500 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Menu")}
            >
              Menu
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === "Page"
                  ? "border-b-2 border-blue-500 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Page")}
            >
              Page
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === "Button"
                  ? "border-b-2 border-blue-500 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Button")}
            >
              Button
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === "Grid"
                  ? "border-b-2 border-blue-500 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Grid")}
            >
              Grid
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === "Pop Up"
                  ? "border-b-2 border-blue-500 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Pop Up")}
            >
              Pop Up
            </button>
          </div>
        </div>

        {activeTab === "Menu" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Menu Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="menuColor"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Color
                </label>
                <input
                  type="text"
                  id="menuColor"
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="menuHoverColor"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Hover Color
                </label>
                <input
                  type="text"
                  id="menuHoverColor"
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="menuSelectColor"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Select Color
                </label>
                <input
                  type="text"
                  id="menuSelectColor"
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="menuFontSize"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Font Size
                </label>
                <input
                  type="text"
                  id="menuFontSize"
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="menuFontStyle"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Font Style
                </label>
                <input
                  type="text"
                  id="menuFontStyle"
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "Page" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Page Configuration</h3>
            <p>content</p>
          </div>
        )}

        {activeTab === "Button" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Button Configuration</h3>
            <p>Content</p>
          </div>
        )}

        {activeTab === "Grid" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Grid Configuration</h3>
            <p>Content</p>
          </div>
        )}

        {activeTab === "Pop Up" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Pop Up Configuration</h3>
            <p>Content</p>
          </div>
        )}

        <div className="flex space-x-4 mt-6">
          <button className="bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-6 rounded">
            Save
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded">
            Clear
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded">
            List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theme;