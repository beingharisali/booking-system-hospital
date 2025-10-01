import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface SMSConfigurationData {
  sr: number;
  date: string;
  menuName: string;
  language: string;
}

const SMSConfigurationList: React.FC = () => {
  const smsConfigurations: SMSConfigurationData[] = [
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">SMS Configuration List</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          New
        </button>
      </div>

      <div className="flex justify-end mb-4">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 text-gray-700 font-semibold">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
              {["Sr#", "Date", "Menu Name", "Language", "Edit", "Delete"].map((header, index) => (
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
            {smsConfigurations.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            ) : (
              smsConfigurations.map((config, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 px-4">{config.sr}</td>
                  <td className="py-2 px-4">{config.date}</td>
                  <td className="py-2 px-4">{config.menuName}</td>
                  <td className="py-2 px-4">{config.language}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing {smsConfigurations.length > 0 ? 1 : 0} to {smsConfigurations.length} of {smsConfigurations.length} entries
        </div>
      </div>
    </div>
  );
};

export default SMSConfigurationList;