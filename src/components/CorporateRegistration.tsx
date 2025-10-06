import React, { useState } from 'react';
import Image from 'next/image';

const CorporateRegistration: React.FC = () => {
  const [corporatePicture, setCorporatePicture] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setCorporatePicture(event.target.files[0]);
    }
  };

  const handleRemovePicture = () => {
    setCorporatePicture(null);
  };

  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Corporate Registration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <div className="col-span-1">
            <label
              htmlFor="corporateId"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Corporate Id
            </label>
            <input
              type="text"
              id="corporateId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-1">
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
            </select>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="corporateName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Corporate Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="corporateName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-1 row-span-2 bg-gray-200 p-4 border border-gray-300">
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Corporate Picture</h3>
            <div className="flex items-center justify-center h-24 bg-gray-300 border border-gray-400 mb-2 relative">
              {corporatePicture ? (
                <>
                  <Image
                    src={URL.createObjectURL(corporatePicture)}
                    alt="Corporate"
                    className="max-h-full max-w-full object-contain"
                  />
                  <button
                    onClick={handleRemovePicture}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs"
                  >
                    X
                  </button>
                </>
              ) : (
                <span className="text-gray-500 text-sm">No image</span>
              )}
            </div>
            <input
              type="file"
              id="corporatePictureUpload"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
            <label
              htmlFor="corporatePictureUpload"
              className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-semibold py-1 px-3 rounded cursor-pointer block text-center"
            >
              Choose File
            </label>
            {corporatePicture && (
                <span className="text-gray-600 text-xs mt-1 block truncate">
                {corporatePicture.name}
                </span>
            )}
          </div>
          <div className="col-span-1">
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
          <div className="col-span-1">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-semibold">
              Is Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isCashInvoice"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="isCashInvoice" className="ml-2 text-gray-700 text-sm font-semibold">
              Is Cash Invoice
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isCreditInvoice"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="isCreditInvoice" className="ml-2 text-gray-700 text-sm font-semibold">
              Is Credit Invoice
            </label>
          </div>
        </div>
      </div>

      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mt-6">
        Corporate Address
      </div>
      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="locationName" className="block text-gray-700 text-sm font-semibold mb-1">
              Location Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="locationName"
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
            <label htmlFor="phoneNo" className="block text-gray-700 text-sm font-semibold mb-1">
              Phone No
            </label>
            <input
              type="text"
              id="phoneNo"
              placeholder="XXX-XXXXXXX"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="mobileNo1" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile No 1
            </label>
            <input
              type="text"
              id="mobileNo1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="mobileNo2" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile No 2
            </label>
            <input
              type="text"
              id="mobileNo2"
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
              placeholder="xxx@x.com"
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
            </select>
          </div>
          <div className="flex items-end">
            <div className="flex-1">
              <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <select
                id="city"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option>Select City</option>
              </select>
            </div>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-3 rounded text-lg">
              +
            </button>
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

      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mt-6">
        Corporate Detail
      </div>
      <div className="border border-gray-300 p-6 bg-gray-50 mb-6">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded mb-4">
          Corporate Contact Persons
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="contactPersonName" className="block text-gray-700 text-sm font-semibold mb-1">
              Contact Person Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactPersonName"
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
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="mobile1" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile 1
            </label>
            <input
              type="text"
              id="mobile1"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="mobile2" className="block text-gray-700 text-sm font-semibold mb-1">
              Mobile 2
            </label>
            <input
              type="text"
              id="mobile2"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="contactEmail"
              placeholder="xxx@x.com"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
            <div className="flex-1">
              <label htmlFor="directLineNo" className="block text-gray-700 text-sm font-semibold mb-1">
                Direct Line No
              </label>
              <input
                type="text"
                id="directLineNo"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-3 rounded text-lg">
              +
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Department</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Designation</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Contact Person</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Mobile 1</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Mobile 2</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Email</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Extension No</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Direct Line No</th>
                <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
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

export default CorporateRegistration;