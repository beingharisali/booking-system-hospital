import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";

interface LocationDetail {
  id?: number; 
  code?: string;
  prefix?: string;
  location?: string;
  locationTypeName?: string;
  active?: boolean;
}

interface ContactPerson {
  id?: number; 
  name?: string;
  department?: string;
  designation?: string;
  mobile1?: string;
  mobile2?: string;
  email?: string;
  extensionNo?: string;
  directLineNo?: string;
}

const PartyRegistration = () => {
  const [locationDetails, setLocationDetails] = useState<LocationDetail[]>([]);
  const [contactPersons, setContactPersons] = useState<ContactPerson[]>([]);

  const handleAddLocation = () => {
    setLocationDetails([...locationDetails, {} as LocationDetail]);
  };

  const handleAddContactPerson = () => {
    setContactPersons([...contactPersons, {} as ContactPerson]);
  };

  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
        Party Registration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="partyId"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Id
            </label>
            <input
              type="text"
              id="partyId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="currency"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Currency <span className="text-red-500">*</span>
            </label>
            <select
              id="currency"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Currency</option>
              <option>PKR</option>
              <option>USD</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="partyType"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Type <span className="text-red-500">*</span>
            </label>
            <select
              id="partyType"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Party Type</option>
              <option>Supplier</option>
              <option>Customer</option>
            </select>
          </div>
          <div className="row-span-2 flex items-center justify-center border border-gray-300 bg-white">
            <input type="file" id="imageUpload" className="hidden" />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer text-gray-500 hover:text-gray-700"
            >
              No file chosen
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label
              htmlFor="partyName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="partyName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="gst"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              GST
            </label>
            <input
              type="text"
              id="gst"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="ntn"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              NTN
            </label>
            <input
              type="text"
              id="ntn"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="cnic"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="partyCode"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Code
            </label>
            <input
              type="text"
              id="partyCode"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="locationLongitude"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Location Longitude
            </    label>
            <input
              type="text"
              id="locationLongitude"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="locationLatitude"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Location Latitude
            </label>
            <input
              type="text"
              id="locationLatitude"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="isActive"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-semibold">
            Is Active
          </label>
        </div>
      </div>

      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
        Party Location Detail
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="prefix"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Prefix
            </label>
            <input
              type="text"
              id="prefix"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="partyLocationCode"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Location Code
            </label>
            <input
              type="text"
              id="partyLocationCode"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="partyLocationType"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Location Type
            </label>
            <select
              id="partyLocationType"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Type</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="partyLocationName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Location Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="partyLocationName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="partyZone"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Zone
            </label>
            <input
              type="text"
              id="partyZone"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Phone No
            </label>
            <input
              type="text"
              id="phoneNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="xxxx-xxxxxxx"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo1"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Phone No 1
            </label>
            <input
              type="text"
              id="phoneNo1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="xxxx-xxxxxxx"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo2"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Phone No 2
            </label>
            <input
              type="text"
              id="phoneNo2"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="xxxx-xxxxxxx"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="faxNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Fax No
            </label>
            <input
              type="text"
              id="faxNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="xxx@xx.com"
            />
          </div>
          <div>
            <label
              htmlFor="uan"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              UAN
            </label>
            <input
              type="text"
              id="uan"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="tollFreeNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Toll Free No
            </label>
            <input
              type="text"
              id="tollFreeNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              WebSite
            </label>
            <input
              type="text"
              id="website"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Country</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="province"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Province <span className="text-red-500">*</span>
            </label>
            <select
              id="province"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Province</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <select
                id="city"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option>Select City</option>
              </select>
              <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                <FaPlus />
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="partyLongitude"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Longitude
            </label>
            <input
              type="text"
              id="partyLongitude"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="partyLatitude"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Latitude
            </label>
            <input
              type="text"
              id="partyLatitude"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="checkInRadius"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Check In Radius (KM)
            </label>
            <input
              type="text"
              id="checkInRadius"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="checkOutRadius"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Check Out Radius (KM)
            </label>
            <input
              type="text"
              id="checkOutRadius"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="distanceKM"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Distance (KM)
            </label>
            <input
              type="text"
              id="distanceKM"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="distanceMiles"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Distance (Miles)
            </label>
            <input
              type="text"
              id="distanceMiles"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="addressDetail"
            className="block text-gray-700 text-sm font-semibold mb-1"
          >
            Address Detail
          </label>
          <textarea
            id="addressDetail"
            rows={3}
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleAddLocation}
            className="bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-6 rounded"
          >
            Add
          </button>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Sr#
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Code
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Location Prefix
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Location
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Location Type Name
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Active
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Edit
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {locationDetails.map((location, index) => (
                <tr key={location.id || index} className="border-b border-gray-300">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{location.code || ""}</td>
                  <td className="py-2 px-4">{location.prefix || ""}</td>
                  <td className="py-2 px-4">{location.location || ""}</td>
                  <td className="py-2 px-4">{location.locationTypeName || ""}</td>
                  <td className="py-2 px-4">{location.active ? "Yes" : "No"}</td>
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
      </div>

      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
        Contact Persons
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="contactPersonName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactPersonName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="department"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="mobile1"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Mobile 1
            </label>
            <input
              type="text"
              id="mobile1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="mobile2"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Mobile 2
            </label>
            <input
              type="text"
              id="mobile2"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="contactEmail"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="contactEmail"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label
              htmlFor="extensionNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Extension No
            </label>
            <input
              type="text"
              id="extensionNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="directLineNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Direct Line No
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="directLineNo"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                onClick={handleAddContactPerson}
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Contact Person
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Department
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Designation
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Mobile-1
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Mobile-2
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Extension No
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Direct Line No
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Edit
                </th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {contactPersons.map((person, index) => (
                <tr key={person.id || index} className="border-b border-gray-300">
                  <td className="py-2 px-4">{person.name || ""}</td>
                  <td className="py-2 px-4">{person.department || ""}</td>
                  <td className="py-2 px-4">{person.designation || ""}</td>
                  <td className="py-2 px-4">{person.mobile1 || ""}</td>
                  <td className="py-2 px-4">{person.mobile2 || ""}</td>
                  <td className="py-2 px-4">{person.extensionNo || ""}</td>
                  <td className="py-2 px-4">{person.directLineNo || ""}</td>
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
  );
};

export default PartyRegistration;