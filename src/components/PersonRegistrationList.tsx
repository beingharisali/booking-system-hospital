import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface Person {
  personId: number;
  fullName: string;
  cnic: string;
  mobile1: string;
}

const PersonRegistrationList: React.FC = () => {
  const persons: Person[] = [
    { personId: 1, fullName: 'Bilal', cnic: '0324-4145125', mobile1: '0324-4145125' },
    { personId: 2, fullName: 'Dummy', cnic: '0321-1234567', mobile1: '0321-1234567' },
    { personId: 3, fullName: 'Abdurrehman', cnic: '0300-0425813', mobile1: '0300-0425813' },
    { personId: 4, fullName: 'Abdurrehman', cnic: '0300-0425813', mobile1: '0300-0425813' },
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
                "Person Id",
                "Full Name",
                "CNIC",
                "Mobile 1",
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
            {persons.map((person, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{person.personId}</td>
                <td className="py-2 px-4">{person.fullName}</td>
                <td className="py-2 px-4">{person.cnic}</td>
                <td className="py-2 px-4">{person.mobile1}</td>
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
          Showing 1 to {persons.length} of {persons.length} entries
        </div>
      </div>
    </div>
  );
};

export default PersonRegistrationList;