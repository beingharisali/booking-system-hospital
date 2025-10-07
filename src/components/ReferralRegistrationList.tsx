import React from "react";
import { FaEdit, FaTrashAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";

const ReferralRegistrationList: React.FC = () => {
  const referrals = [
    { sr: 1, referralCode: "REF001", referral: "John Doe", mobileNo: "123-456-7890", areaName: "Downtown" },
    { sr: 2, referralCode: "REF002", referral: "Jane Smith", mobileNo: "098-765-4321", areaName: "Uptown" },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">
          New
        </button>
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
                "Referral Code",
                "Referral",
                "Mobile No",
                "Area Name",
                "Action",
                "Edit",
                "Delete",
              ].map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left border border-gray-400 font-semibold"
                >
                  <div className="flex items-center">
                    {header}
                    {header !== "Action" && header !== "Edit" && header !== "Delete" && (
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
            {referrals.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-4 px-4 text-center">
                  No data available in table
                </td>
              </tr>
            ) : (
              referrals.map((referral, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 px-4">{referral.sr}</td>
                  <td className="py-2 px-4">{referral.referralCode}</td>
                  <td className="py-2 px-4">{referral.referral}</td>
                  <td className="py-2 px-4">{referral.mobileNo}</td>
                  <td className="py-2 px-4">{referral.areaName}</td>
                  <td className="py-2 px-4 text-center">
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
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing 0 to {referrals.length} of {referrals.length} entries
        </div>
      </div>
    </div>
  );
};

export default ReferralRegistrationList;