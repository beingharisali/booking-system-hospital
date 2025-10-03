import React from 'react';

const ConsultantRegistration: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Consultant Registration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <label htmlFor="consultantId" className="block text-gray-700 text-sm font-semibold mb-1">
              Consultant Id
            </label>
            <input
              type="text"
              id="consultantId"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="currency" className="block text-gray-700 text-sm font-semibold mb-1">
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
          <div className="col-span-1">
            <label htmlFor="consultantName" className="block text-gray-700 text-sm font-semibold mb-1">
              Consultant Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="consultantName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-1 row-span-3 bg-white border border-gray-300 flex flex-col items-center justify-center p-4">
            <h3 className="text-gray-700 font-semibold mb-2">Consultant Picture</h3>
            <div className="w-32 h-32 border border-gray-400 flex items-center justify-center mb-2">
              <span className="text-gray-400">No Image</span>
            </div>
            <input
              type="file"
              id="consultantPicture"
              className="hidden"
            />
            <label
              htmlFor="consultantPicture"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded cursor-pointer"
            >
              Choose File
            </label>
          </div>

          <div className="col-span-1">
            <label htmlFor="cnic" className="block text-gray-700 text-sm font-semibold mb-1">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              placeholder="XXXXX-XXXXXXX-X"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="ntn" className="block text-gray-700 text-sm font-semibold mb-1">
              NTN
            </label>
            <input
              type="text"
              id="ntn"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="code" className="block text-gray-700 text-sm font-semibold mb-1">
              Code
            </label>
            <input
              type="text"
              id="code"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="col-span-1 flex items-center mt-2">
            <input
              type="checkbox"
              id="isActive"
              className="form-checkbox h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-semibold">
              Is Active
            </label>
          </div>
          <div className="col-span-1 flex items-center mt-2">
            <input
              type="checkbox"
              id="isCashInvoice"
              className="form-checkbox h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor="isCashInvoice" className="ml-2 text-gray-700 text-sm font-semibold">
              Is Cash Invoice
            </label>
          </div>
          <div className="col-span-1 flex items-center mt-2">
            <input
              type="checkbox"
              id="isCreditInvoice"
              className="form-checkbox h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor="isCreditInvoice" className="ml-2 text-gray-700 text-sm font-semibold">
              Is Credit Invoice
            </label>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold mb-4">
            Consultant Address
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <label htmlFor="locationName" className="block text-gray-700 text-sm font-semibold mb-1">
                Consultant Location Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="locationName"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="areaName" className="block text-gray-700 text-sm font-semibold mb-1">
                Area Name
              </label>
              <input
                type="text"
                id="areaName"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="phoneNo" className="block text-gray-700 text-sm font-semibold mb-1">
                Phone No
              </label>
              <input
                type="text"
                id="phoneNo"
                placeholder="(XX)XXX-XXXXXXX"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="mobileNo1" className="block text-gray-700 text-sm font-semibold mb-1">
                Mobile No 1
              </label>
              <input
                type="text"
                id="mobileNo1"
                placeholder="XXXX-XXXXXXX"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="mobileNo2" className="block text-gray-700 text-sm font-semibold mb-1">
                Mobile No 2
              </label>
              <input
                type="text"
                id="mobileNo2"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="faxNo" className="block text-gray-700 text-sm font-semibold mb-1">
                Fax No
              </label>
              <input
                type="text"
                id="faxNo"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="xxx@xx.com"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="uan" className="block text-gray-700 text-sm font-semibold mb-1">
                UAN
              </label>
              <input
                type="text"
                id="uan"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="zipCode" className="block text-gray-700 text-sm font-semibold mb-1">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="tollFreeNo" className="block text-gray-700 text-sm font-semibold mb-1">
                Toll Free No
              </label>
              <input
                type="text"
                id="tollFreeNo"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="website" className="block text-gray-700 text-sm font-semibold mb-1">
                WebSite
              </label>
              <input
                type="text"
                id="website"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-1">
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
            <div className="col-span-1">
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
            <div className="col-span-1 flex items-end">
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
              <button className="ml-2 mb-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded text-sm">
                +
              </button>
            </div>
            <div className="col-span-3">
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

export default ConsultantRegistration;