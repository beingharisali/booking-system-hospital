import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CorporateRegistrationList: React.FC = () => {
  const corporateRegistrations = [
    { sr: 60003001, corporateName: 'Sahat Card', location: 'Lahore', phoneNo: '', mobileNo: '', city: 'Lahore', active: true },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="mr-2 text-gray-700 font-semibold">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded">
            New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
              {[
                "Sr#",
                "Corporate Name",
                "Location",
                "Phone No",
                "Mobile No",
                "City",
                "Active",
                "Edit",
                "Delete",
              ].map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left border border-gray-400 font-semibold"
                >
                  <div className="flex items-center">
                    {header}
                    {header !== "Edit" && header !== "Delete" && header !== "Active" && (
                      <div className="ml-1 flex flex-col">
                        <FaChevronUp className="h-2 w-2 cursor-pointer" />
                        <FaChevronDown className="h-2 w-2 cursor-pointer" />
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {corporateRegistrations.map((corporate, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{corporate.sr}</td>
                <td className="py-2 px-4">{corporate.corporateName}</td>
                <td className="py-2 px-4">{corporate.location}</td>
                <td className="py-2 px-4">{corporate.phoneNo}</td>
                <td className="py-2 px-4">{corporate.mobileNo}</td>
                <td className="py-2 px-4">{corporate.city}</td>
                <td className="py-2 px-4 text-center">
                  {corporate.active ? <span className="text-green-500">✔</span> : <span className="text-red-500">✖</span>}
                </td>
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
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing 1 to {corporateRegistrations.length} of {corporateRegistrations.length} entries
        </div>
      </div>
    </div>
  );
};

export default CorporateRegistrationList;