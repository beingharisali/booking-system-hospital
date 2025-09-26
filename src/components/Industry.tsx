import React from 'react';

const Industry: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Industry
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <label
              htmlFor="industryId"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Id
            </label>
            <input
              type="text"
              id="industryId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="industryName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="industryName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-1">
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

export default Industry;