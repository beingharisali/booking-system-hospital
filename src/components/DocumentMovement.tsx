import React from 'react';

const DocumentMovement: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Document Movement Configuration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="docTypeProfileId"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Doc Type Profile Id <span className="text-red-500">*</span>
            </label>
            <select
              id="docTypeProfileId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Doc Type Profile Id</option>
              <option>Goods Transfer</option>
              <option>PO Contract</option>
              <option>Requisition</option>
              <option>History Attribute</option>
              <option>Goods In</option>
              <option>Bid Participant</option>
              <option>Inward</option>
              <option>Clinic Patient History</option>
              <option>Goods Out</option>
            </select>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="docMovementName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Doc Movement Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="docMovementName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="displayName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="shortName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Short Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="shortName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="prefixNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Prefix No
            </label>
            <input
              type="text"
              id="prefixNo"
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

export default DocumentMovement;