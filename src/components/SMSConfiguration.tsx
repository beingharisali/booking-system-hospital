import React from 'react';

const SMSConfiguration: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        SMS Configuration
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
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300 pr-10"
              />
            </div>
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

          <div className="col-span-4 row-span-2">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="col-span-2">
            <div className="bg-gray-200 p-4 rounded-md h-full">
              <h4 className="font-semibold text-gray-800 mb-2">Tags List</h4>
              <ul className="text-sm text-gray-700 space-y-1 overflow-auto h-[120px]">
                <li>&lt;BranchName&gt;</li>
                <li>&lt;BookingDate&gt;</li>
                <li>&lt;RequestDate&gt;</li>
                <li>&lt;Party&gt;</li>
                <li>&lt;RequestedAmount&gt;</li>
                <li>&lt;TotalTest&gt;</li>
                <li>&lt;NetReceivable&gt;</li>
                <li>&lt;OpeningBalance&gt;</li>
                <li>&lt;FromDate&gt;</li>
                <li>&lt;ToDate&gt;</li>
                <li>&lt;InvoiceMonth&gt;</li>
                <li>&lt;InvoiceYear&gt;</li>
                <li>&lt;PartyLocation&gt;</li>
                <li>&lt;DueDate&gt;</li>
              </ul>
            </div>
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
                  <th className="py-2 px-4 text-center font-semibold">Select</th>
                  <th className="py-2 px-4 text-left font-semibold">Name</th>
                  <th className="py-2 px-4 text-left font-semibold">Designation</th>
                  <th className="py-2 px-4 text-left font-semibold">Department</th>
                  <th className="py-2 px-4 text-left font-semibold">Contact #</th>
                  <th className="py-2 px-4 text-center font-semibold">New</th>
                  <th className="py-2 px-4 text-center font-semibold">Edit</th>
                  <th className="py-2 px-4 text-center font-semibold">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                {[
                  { sr: 1, name: 'Dr Kamran Iqbal', designation: 'Sr. Medical Officer', department: 'Medicine', contact: '03224798080' },
                  { sr: 2, name: 'WAJEEHA IBRAHIM', designation: 'Administration', department: 'Administration', contact: '03115674963' },
                  { sr: 3, name: 'FAKHRA EHSAN', designation: 'Administration', department: 'Administration', contact: '03332467980' },
                  { sr: 4, name: 'NABEEL HUSSAIN', designation: 'Administrator', department: 'IT', contact: '03002345678' },
                  { sr: 5, name: 'SAHER FATIMA', designation: 'Administrator', department: 'Accounts', contact: '03451234567' },
                  { sr: 6, name: 'Dr Azhar', designation: 'Sr Medical Officer', department: 'Admin-Staff', contact: '03211234567' },
                  { sr: 7, name: 'Dr Riaz', designation: 'Sr Medical Officer', department: 'Medicine', contact: '03211111111' },
                  { sr: 8, name: 'Dr Azhar', designation: 'Sr Medical Officer', department: 'Admin-Staff', contact: '03211234567' },
                  { sr: 9, name: 'Dr Riaz', designation: 'Sr Medical Officer', department: 'Medicine', contact: '03211111111' },
                  { sr: 10, name: 'Dr Azhar', designation: 'Sr Medical Officer', department: 'Admin-Staff', contact: '03211234567' },
                  { sr: 11, name: 'Dr Riaz', designation: 'Sr Medical Officer', department: 'Medicine', contact: '03211111111' },
                  { sr: 12, name: 'Dr Azhar', designation: 'Sr Medical Officer', department: 'Admin-Staff', contact: '03211234567' },
                  { sr: 13, name: 'Asim', designation: 'Medical Officer', department: 'Administration', contact: '' },
                  { sr: 14, name: 'Dr Bilal Nazwi', designation: 'Consultant', department: 'Radiology', contact: '' },
                  { sr: 15, name: 'Ayesha', designation: 'Consultant', department: 'Admin-Staff', contact: '' },
                  { sr: 16, name: 'Azhar Bhatti', designation: 'HR Manager', department: 'Admin-Staff', contact: '' },
                  { sr: 17, name: 'Hassan', designation: 'HR Manager', department: 'HR', contact: '' },
                  { sr: 18, name: 'Fiaz Rasool', designation: 'HR Manager', department: 'HR', contact: '' },
                  { sr: 19, name: 'Naqash', designation: 'HR Manager', department: 'Administration', contact: '' },
                  { sr: 20, name: 'Dr Umer Farooq', designation: 'Orthopedic', department: '', contact: '' },
                  { sr: 21, name: 'Dr Hamid', designation: 'Consultant', department: 'Administration', contact: '' },
                  { sr: 22, name: 'Azhar Khan', designation: 'Receptionist', department: 'Admin-Staff', contact: '' },
                ].map((employee, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{employee.sr}</td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4">{employee.name}</td>
                    <td className="py-2 px-4">{employee.designation}</td>
                    <td className="py-2 px-4">{employee.department}</td>
                    <td className="py-2 px-4">{employee.contact}</td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-2 px-4 text-center">
                      <input type="checkbox" className="form-checkbox" />
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
    </div>
  );
};

export default SMSConfiguration;