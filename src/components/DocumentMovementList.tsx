import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface DocumentMovementData {
  sr: number;
  docName: string;
  docShortName: string;
  displayName: string;
}

const DocumentMovementList: React.FC = () => {
  const documentMovements: DocumentMovementData[] = [
    { sr: 1, docName: 'Growth Cultural Template', docShortName: 'GRTRTM', displayName: 'Growth Cultural Template' },
    { sr: 2, docName: 'RIMS Order', docShortName: 'RIMPOD', displayName: 'RIMS Order' },
    { sr: 3, docName: 'RIMS Order Invoice', docShortName: 'RMOINV', displayName: 'RIMS Order Invoice' },
    { sr: 4, docName: 'RIMS Invoice', docShortName: 'RMIVCH', displayName: 'RIMS Invoice' },
    { sr: 5, docName: 'RIMS Receipt Voucher', docShortName: 'RMRVCH', displayName: 'RIMS Receipt Voucher' },
    { sr: 6, docName: 'RIMS Inventory Item', docShortName: 'RMIITM', displayName: 'RIMS Inventory Item' },
    { sr: 7, docName: 'RIMS Inventory', docShortName: 'RMINV', displayName: 'RIMS Inventory' },
    { sr: 8, docName: 'RIMS Stock Adjustment', docShortName: 'RMSTAD', displayName: 'RIMS Stock Adjustment' },
    { sr: 9, docName: 'RIMS Purchase Order Return', docShortName: 'RMPORE', displayName: 'RIMS Purchase Order Return' },
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
              {["Sr#", "Doc Name", "Doc ShorName", "Diplay Name", "Edit", "Delete"].map((header, index) => (
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
            {documentMovements.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            ) : (
              documentMovements.map((doc, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 px-4">{doc.sr}</td>
                  <td className="py-2 px-4">{doc.docName}</td>
                  <td className="py-2 px-4">{doc.docShortName}</td>
                  <td className="py-2 px-4">{doc.displayName}</td>
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
          Showing {documentMovements.length > 0 ? 1 : 0} to {documentMovements.length} of {documentMovements.length} entries
        </div>
      </div>
    </div>
  );
};

export default DocumentMovementList;