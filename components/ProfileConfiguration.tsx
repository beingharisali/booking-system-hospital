import React from 'react';

    
const ProfileConfiguration: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">
            Id
          </label>
          <input
            type="text"
            id="id"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="profileType" className="block text-gray-700 text-sm font-bold mb-2">
            Profile Type *
          </label>
          <select
            id="profileType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Select Profile Type</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="urduName" className="block text-gray-700 text-sm font-bold mb-2">
            Urdu Name
          </label>
          <input
            type="text"
            id="urduName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="code" className="block text-gray-700 text-sm font-bold mb-2">
            Code
          </label>
          <input
            type="text"
            id="code"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="seqNo" className="block text-gray-700 text-sm font-bold mb-2">
            Seq No
          </label>
          <input
            type="text"
            id="seqNo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="prefix" className="block text-gray-700 text-sm font-bold mb-2">
            Prefix *
          </label>
          <input
            type="text"
            id="prefix"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Clear
        </button>
      </div>
    </div>
  );
};

export default ProfileConfiguration;