import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CollectionPointList: React.FC = () => {
  const collectionPoints = [
    { sr: 1, code: '0241', collectionPoint: 'ASD', mobileNo: '03244145125', areaName: 'Some Area', active: true },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end items-center mb-4">
        <div className="flex items-center mr-4">
          <label htmlFor="search" className="mr-2 text-gray-700 font-semibold">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button className="bg-[#5a7b8c] hover:bg-[#435b63] text-white font-semibold py-2 px-4 rounded">
          New
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
              {[
                "Sr#",
                "Code",
                "Collection Point",
                "Mobile No",
                "Area Name",
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
            {collectionPoints.map((point, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{point.sr}</td>
                <td className="py-2 px-4">{point.code}</td>
                <td className="py-2 px-4">{point.collectionPoint}</td>
                <td className="py-2 px-4">{point.mobileNo}</td>
                <td className="py-2 px-4">{point.areaName}</td>
                <td className="py-2 px-4 text-center">
                  <input
                    type="checkbox"
                    checked={point.active}
                    readOnly
                    className="form-checkbox h-4 w-4 text-blue-600"
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
          Showing 1 to {collectionPoints.length} of {collectionPoints.length} entries
        </div>
      </div>
    </div>
  );
};

export default CollectionPointList;