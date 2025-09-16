import React from "react";

const ProfileConfiguration: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Profile Configuration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="id"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Id
            </label>
            <input
              type="text"
              id="id"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="profileType"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Profile Type <span className="text-red-500">*</span>
            </label>
            <select
              id="profileType"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Profile Type</option>
            </select>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="border w-full py- px text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="urduName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Urdu Name
            </label>
            <input
              type="text"
              id="urduName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="code"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Code
            </label>
            <input
              type="text"
              id="code"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="seqNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Seq No
            </label>
            <input
              type="text"
              id="seqNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="prefix"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Prefix <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="prefix"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button className="bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-6 rounded">
            Save
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileConfiguration;
