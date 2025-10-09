import React from "react";
import Image from "next/image";

const ReferralRegistration: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Referral Registration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="referralId"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Referral Id
              </label>
              <input
                type="text"
                id="referralId"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
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
              </select>
            </div>
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
            <div>
              <label
                htmlFor="referralName"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Referral Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="referralName"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="referralCode"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Referral Code
              </label>
              <input
                type="text"
                id="referralCode"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="md:col-span-1 border border-gray-300 p-4 bg-white">
            <h3 className="text-md font-semibold mb-3">Referral Picture</h3>
            <div className="flex flex-col items-center justify-center border border-gray-300 h-32 mb-3 relative">
              <span className="absolute top-1 right-1 text-red-500 cursor-pointer">
                X
              </span>
              <div className="text-gray-400">
                <Image 
                  src="/placeholder.png" 
                  alt="Referral Placeholder" 
                  width={100} // Added width
                  height={100} // Added height
                  className="max-h-full max-w-full object-contain" 
                /> 
              </div>
            </div>
            <input
              type="file"
              id="referralPicture"
              className="hidden"
            />
            <label
              htmlFor="referralPicture"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer block text-center"
            >
              Choose File
            </label>
          </div>
        </div>

        <div className="flex space-x-6 mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm">
              Is Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isCashInvoice"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="isCashInvoice" className="ml-2 text-gray-700 text-sm">
              Is Cash Invoice
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isCreditInvoice"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="isCreditInvoice" className="ml-2 text-gray-700 text-sm">
              Is Credit Invoice
            </label>
          </div>
        </div>

        <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
          Referral Detail
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label
              htmlFor="partyLocationId"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Party Location Id <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="partyLocationId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="referralLocationName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Referral Location Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="referralLocationName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="areaName"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Area Name
            </label>
            <input
              type="text"
              id="areaName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="mobile1"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Mobile 1 <span className="text-red-500">*</span>
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
              htmlFor="phoneNo"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Phone No
            </label>
            <input
              type="text"
              id="phoneNo"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
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
            />
          </div>
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
              htmlFor="flatSharePercent"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Flat Share Percent
            </label>
            <input
              type="text"
              id="flatSharePercent"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center col-span-1">
            <input
              type="checkbox"
              id="allowShare"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="allowShare" className="ml-2 text-gray-700 text-sm">
              Allow Share
            </label>
          </div>
        </div>

        <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
          Address Detail
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
          <div>
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select
                id="city"
                className="border rounded-l w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option>Select City</option>
              </select>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-r">
                +
              </button>
            </div>
          </div>
          <div className="col-span-full">
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

export default ReferralRegistration;