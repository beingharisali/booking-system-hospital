import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown, FaCog, FaCheck } from 'react-icons/fa';

const PartyRegistrationList: React.FC = () => {
  const parties = [
    { sr: 1, currency: 'PKR', partyType: 'Supplier', party: 'ABC SUPPLIER', gst: 0, ntn: 0, enabled: true },
    { sr: 2, currency: 'PKR', partyType: 'Customer', party: 'Dummy', gst: 0, ntn: 0, enabled: true },
    { sr: 3, currency: 'PKR', partyType: 'Customer', party: 'BAD', gst: 0, ntn: 0, enabled: true },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Party List</h2>
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 text-gray-700 font-semibold">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="ml-4 bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-6 rounded">
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
                "Currency",
                "Party Type",
                "Party",
                "GST",
                "NTN",
                "Detail",
                "Enable",
                "Edit",
                "Delete",
              ].map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left border border-gray-400 font-semibold"
                >
                  <div className="flex items-center">
                    {header}
                    {header !== "Detail" && header !== "Enable" && header !== "Edit" && header !== "Delete" && (
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
            {parties.map((party, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{party.sr}</td>
                <td className="py-2 px-4">{party.currency}</td>
                <td className="py-2 px-4">{party.partyType}</td>
                <td className="py-2 px-4">{party.party}</td>
                <td className="py-2 px-4">{party.gst}</td>
                <td className="py-2 px-4">{party.ntn}</td>
                <td className="py-2 px-4 text-center">
                  <button className="text-gray-700 hover:text-blue-600">
                    <FaCog />
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  {party.enabled && <FaCheck className="text-green-500 mx-auto" />}
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
          Showing 1 to {parties.length} of {parties.length} entries
        </div>
        <div className="flex">
          <button className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 mr-1">
            Previous
          </button>
          <button className="px-3 py-1 border rounded bg-blue-500 text-white mr-1">
            1
          </button>
          <button className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartyRegistrationList;