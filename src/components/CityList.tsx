import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CityList: React.FC = () => {
  const cities = [
    { sr: 1, country: 'Pakistan', province: 'KPK', city: 'BHALWANARGER', shortName: 'BB', cityCode: '002', active: true },
    { sr: 2, country: 'Pakistan', province: 'Punjab', city: 'Multan', shortName: 'MUL', cityCode: '061', active: true },
  ];

  return (
    <div className="p-4">
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
              {[
                "Sr#",
                "Country",
                "Province",
                "City",
                "Short Name",
                "City Code",
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
            {cities.map((city, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{city.sr}</td>
                <td className="py-2 px-4">{city.country}</td>
                <td className="py-2 px-4">{city.province}</td>
                <td className="py-2 px-4">{city.city}</td>
                <td className="py-2 px-4">{city.shortName}</td>
                <td className="py-2 px-4">{city.cityCode}</td>
                <td className="py-2 px-4 text-center">
                  <input
                    type="checkbox"
                    checked={city.active}
                    readOnly 
                  />
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
          Showing 1 to {cities.length} of {cities.length} entries
        </div>
      </div>
    </div>
  );
};

export default CityList;