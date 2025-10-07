import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const PartyPricingList: React.FC = () => {
  const partyPrices = [
    { id: 60001001, type: 'Collection Point', partyName: 'ASD - ACFF', fromDate: '2024-01-01', toDate: '2024-12-31' },
    { id: 60002001, type: 'Customer', partyName: 'BAD - Lahore', fromDate: '2024-03-01', toDate: '2025-02-28' },
    { id: 60004001, type: 'Customer', partyName: 'Dummy - Ihr', fromDate: '2023-01-01', toDate: '2023-12-31' },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <label htmlFor="partyType" className="block text-gray-700 text-sm font-semibold mr-2">
            Party Type *
          </label>
          <select
            id="partyType"
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option>Select Party Type</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          New
        </button>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-gray-600 text-sm mr-2">Show</span>
        <select className="border rounded px-2 py-1 text-gray-700">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span className="text-gray-600 text-sm ml-2">entries</span>
        <label htmlFor="searchList" className="ml-auto mr-2 text-gray-700 font-semibold">
          Search:
        </label>
        <input
          type="text"
          id="searchList"
          className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
              {[
                "Id",
                "Type",
                "Party Name",
                "From Date",
                "To Date",
                "Edit",
                "Delete",
              ].map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left border border-gray-400 font-semibold"
                >
                  <div className="flex items-center">
                    {header}
                    {header !== "Edit" && header !== "Delete" && (
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
            {partyPrices.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.type}</td>
                <td className="py-2 px-4">{item.partyName}</td>
                <td className="py-2 px-4">{item.fromDate}</td>
                <td className="py-2 px-4">{item.toDate}</td>
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
          Showing 1 to {partyPrices.length} of {partyPrices.length} entries
        </div>
        <div>
          <button className="px-3 py-1 border rounded mr-1">Previous</button>
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded ml-1">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PartyPricingList;