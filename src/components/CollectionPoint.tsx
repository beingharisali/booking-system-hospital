import React from 'react';
import { FaPlus } from 'react-icons/fa';

const CollectionPoint: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Collection Point Registration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="collectionId" className="block text-gray-700 text-sm font-semibold mb-1">
              Collection Id
            </label>
            <input
              type="text"
              id="collectionId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="currency" className="block text-gray-700 text-sm font-semibold mb-1">
              Currency <span className="text-red-500">*</span>
            </label>
            <select
              id="currency"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Currency</option>
              {/* Add currency options dynamically if needed */}
            </select>
          </div>
          <div>
            <label htmlFor="collectionName" className="block text-gray-700 text-sm font-semibold mb-1">
              Collection Name
            </label>
            <input
              type="text"
              id="collectionName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="cnic" className="block text-gray-700 text-sm font-semibold mb-1">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="ntn" className="block text-gray-700 text-sm font-semibold mb-1">
              NTN
            </label>
            <input
              type="text"
              id="ntn"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="collectionCode" className="block text-gray-700 text-sm font-semibold mb-1">
              Collection Code
            </label>
            <input
              type="text"
              id="collectionCode"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="isActive" className="mr-2" />
          <label htmlFor="isActive" className="text-gray-700 text-sm font-semibold">
            Is Active
          </label>
        </div>
      </div>

      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
        Collection Point Detail
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="partyLocationId" className="block text-gray-700 text-sm font-semibold mb-1">
              Party Location Id <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="partyLocationId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="collectionLocationName" className="block text-gray-700 text-sm font-semibold mb-1">
              Collection Location Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="collectionLocationName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="areaName" className="block text-gray-700 text-sm font-semibold mb-1">
              Area Name
            </label>
            <input
              type="text"
              id="areaName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="mobile1" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="mobile1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="mobile2" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile2
            </label>
            <input
              type="text"
              id="mobile2"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="phoneNo" className="block text-gray-700 text-sm font-semibold mb-1">
              Phone No
            </label>
            <input
              type="text"
              id="phoneNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="phoneNo1" className="block text-gray-700 text-sm font-semibold mb-1">
              Phone No 1
            </label>
            <input
              type="text"
              id="phoneNo1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="phoneNo2" className="block text-gray-700 text-sm font-semibold mb-1">
              Phone No 2
            </label>
            <input
              type="text"
              id="phoneNo2"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="faxNo" className="block text-gray-700 text-sm font-semibold mb-1">
              Fax No
            </label>
            <input
              type="text"
              id="faxNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="uan" className="block text-gray-700 text-sm font-semibold mb-1">
              UAN
            </label>
            <input
              type="text"
              id="uan"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-gray-700 text-sm font-semibold mb-1">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="tollFreeNo" className="block text-gray-700 text-sm font-semibold mb-1">
              Toll Free No
            </label>
            <input
              type="text"
              id="tollFreeNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-gray-700 text-sm font-semibold mb-1">
              WebSite
            </label>
            <input
              type="text"
              id="website"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="flatSharePercent" className="block text-gray-700 text-sm font-semibold mb-1">
              Flat Share Percent
            </label>
            <input
              type="text"
              id="flatSharePercent"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="allowShare" className="mr-2" />
          <label htmlFor="allowShare" className="text-gray-700 text-sm font-semibold">
            Allow Share
          </label>
        </div>

        <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
          Address Detail
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="country" className="block text-gray-700 text-sm font-semibold mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Country</option>
              {/* Add country options */}
            </select>
          </div>
          <div>
            <label htmlFor="province" className="block text-gray-700 text-sm font-semibold mb-1">
              Province <span className="text-red-500">*</span>
            </label>
            <select
              id="province"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Province</option>
              {/* Add province options */}
            </select>
          </div>
          <div className="flex items-end">
            <div className="flex-grow">
              <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <select
                id="city"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option>Select City</option>
                {/* Add city options */}
              </select>
            </div>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r">
              <FaPlus />
            </button>
          </div>
          <div>
            <label htmlFor="longitude" className="block text-gray-700 text-sm font-semibold mb-1">
              Longitude
            </label>
            <input
              type="text"
              id="longitude"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-end">
            <div className="flex-grow">
              <label htmlFor="latitude" className="block text-gray-700 text-sm font-semibold mb-1">
                Latitude
              </label>
              <input
                type="text"
                id="latitude"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r">
              <FaPlus />
            </button>
          </div>
          <div>
            <label htmlFor="altitude" className="block text-gray-700 text-sm font-semibold mb-1">
              Altitude
            </label>
            <input
              type="text"
              id="altitude"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div>
          <label htmlFor="addressDetail" className="block text-gray-700 text-sm font-semibold mb-1">
            Address Detail
          </label>
          <textarea
            id="addressDetail"
            rows={3}
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
      </div>

      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
        Party Collection Detail
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <button className="bg-[#5a7b8c] hover:bg-[#435b63] text-white font-semibold py-2 px-4 rounded mb-4">
          Corporate Contact Persons
        </button>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="contactPersonName" className="block text-gray-700 text-sm font-semibold mb-1">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactPersonName"
              placeholder="Department"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-gray-700 text-sm font-semibold mb-1">
              Department
            </label>
            <input
              type="text"
              id="department"
              placeholder="Department"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="designation" className="block text-gray-700 text-sm font-semibold mb-1">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              placeholder="Designation"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="cpMobile1" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile 1
            </label>
            <input
              type="text"
              id="cpMobile1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="cpMobile2" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile 2
            </label>
            <input
              type="text"
              id="cpMobile2"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="cpEmail" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="cpEmail"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="extensionNo" className="block text-gray-700 text-sm font-semibold mb-1">
              Extension No
            </label>
            <input
              type="text"
              id="extensionNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-end">
            <div className="flex-grow">
              <label htmlFor="directLineNo" className="block text-gray-700 text-sm font-semibold mb-1">
                Direct Line No
              </label>
              <input
                type="text"
                id="directLineNo"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r">
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Table for Contact Persons */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Contact Person</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Department</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Designation</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Mobile 1</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Mobile 2</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Email</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Extension No</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Direct Line No</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {/* Example row, can be mapped from state */}
              {/*
              <tr>
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">Sales</td>
                <td className="py-2 px-4">Manager</td>
                <td className="py-2 px-4">1234567890</td>
                <td className="py-2 px-4">0987654321</td>
                <td className="py-2 px-4">john.doe@example.com</td>
                <td className="py-2 px-4">101</td>
                <td className="py-2 px-4">555-1234</td>
                <td className="py-2 px-4 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
              */}
            </tbody>
          </table>
        </div>

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

export default CollectionPoint;