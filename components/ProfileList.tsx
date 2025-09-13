import React from 'react';
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ProfileList: React.FC = () => {
  const profiles = [
    {
      sr: 1,
      organization: 'SMS Template',
      profileType: 'Patient Verify Report',
      profileName: 'Patient Verify Report',
      code: '',
      seqNo: 0,
      prefix: 'PRV/SMS',
      enable: true,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 text-gray-700">Search:</label>
          <input
            type="text"
            id="search"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left flex items-center">
                Sr#
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Orgization
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Profile Type
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Profile Name
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Code
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Seq No
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Prefix
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-left flex items-center">
                Enable
                <div className="ml-1 flex flex-col">
                  <FaChevronUp className="h-3 w-3 cursor-pointer" />
                  <FaChevronDown className="h-3 w-3 cursor-pointer" />
                </div>
              </th>
              <th className="py-3 px-6 text-center">Edit</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {profiles.map((profile, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{profile.sr}</td>
                <td className="py-3 px-6 text-left">{profile.organization}</td>
                <td className="py-3 px-6 text-left">{profile.profileType}</td>
                <td className="py-3 px-6 text-left">{profile.profileName}</td>
                <td className="py-3 px-6 text-left">{profile.code}</td>
                <td className="py-3 px-6 text-left">{profile.seqNo}</td>
                <td className="py-3 px-6 text-left">{profile.prefix}</td>
                <td className="py-3 px-6 text-left">
                  {profile.enable ? (
                    <span className="text-green-500">✔</span>
                  ) : (
                    <span className="text-red-500">✖</span>
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center space-x-2">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <FaEdit />
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileList;