import React from 'react';

const EmailConfiguration: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        EMail Configuration
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
              htmlFor="date"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date" 
                id="date"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300 pr-10" // Added pr-10 for icon space
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="menu"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Menu <span className="text-red-500">*</span>
            </label>
            <select
              id="menu"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>---Select Menu---</option>
            </select>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="language"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Language <span className="text-red-500">*</span>
            </label>
            <select
              id="language"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>---Select Language---</option>
              <option>English</option>
              <option>Urdu</option>
            </select>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Employee List
          </h3>
          <div className="overflow-x-auto border border-gray-300 rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#5a7b8c] text-white text-sm uppercase">
                <tr>
                  <th className="py-2 px-4 text-left font-semibold">Sr#</th>
                  <th className="py-2 px-4 text-left font-semibold">Select</th>
                  <th className="py-2 px-4 text-left font-semibold">Name</th>
                  <th className="py-2 px-4 text-center font-semibold">New</th>
                  <th className="py-2 px-4 text-center font-semibold">Edit</th>
                  <th className="py-2 px-4 text-center font-semibold">Delete</th>
                  <th className="py-2 px-4 text-center font-semibold">To</th>
                  <th className="py-2 px-4 text-center font-semibold">CC</th>
                  <th className="py-2 px-4 text-center font-semibold">BCC</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                {[
                  "Dr Bilal Nazvi", "Asim", "Ali", "Dr Hamid", "Dr Azhar", "Dr Riaz", "Ayesha", "Aslam Gujar",
                  "Azhar Khan", "Awas Ali", "M Rizwan", "Imran Haans", "Hassan", "Fiaz Rasool", "Naqash",
                  "Azhar Bhatti", "WAJEEHA IBRAHIM", "FAKHRA EHSAN", "NABEEL HUSSAIN", "SAHER FATIMA", "Dr Kamran Iqbal"
                ].map((name, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4">{name}</td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="radio" name={`employee-to-${index}`} className="form-radio" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="radio" name={`employee-cc-${index}`} className="form-radio" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="radio" name={`employee-bcc-${index}`} className="form-radio" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex space-x-4 mt-6 justify-end">
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

export default EmailConfiguration;