import React, { useState } from "react";
import { FaEdit, FaChevronUp, FaChevronDown } from "react-icons/fa";


const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState([
    {
      sr: 1,
      organization: "SMS Template",
      profileType: "Patient Verify Report",
      profileName: "Patient Verify Report",
      code: "",
      seqNo: 0,
      prefix: "PRVSMS",
      enable: true,
    },
    {
      sr: 33,
      organization: "Urdu Dictionary",
      profileType: "Token No",
      profileName: "",
      code: "TKNDIC",
      seqNo: 0,
      prefix: "",
      enable: true,
    },
    {
      sr: 34,
      organization: "Schedule Type",
      profileType: "Referral Schedule",
      profileName: "",
      code: "REFSCH",
      seqNo: 2,
      prefix: "",
      enable: true,
    },
    {
      sr: 35,
      organization: "Data Type",
      profileType: "Numeric",
      profileName: "",
      code: "NUM",
      seqNo: 0,
      prefix: "",
      enable: true,
    },
    {
      sr: 36,
      organization: "Data Type",
      profileType: "Float",
      profileName: "",
      code: "FLOAT",
      seqNo: 0,
      prefix: "",
      enable: true,
    },
    {
      sr: 37,
      organization: "Sample Tracking",
      profileType: "Dispatched Sample Issue",
      profileName: "",
      code: "DSITRK",
      seqNo: 0,
      prefix: "",
      enable: true,
    },
  ]);

  const toggleEnable = (index: number) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index].enable = !updatedProfiles[index].enable;
    setProfiles(updatedProfiles);
  };

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
                "Organization",
                "Profile Type",
                "Profile Name",
                "Code",
                "Seq No",
                "Prefix",
                "Enable",
                "Edit",
              ].map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left border border-gray-400 font-semibold"
                >
                  <div className="flex items-center">
                    {header}
                    {header !== "Edit" && (
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
            {profiles.map((profile, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{profile.sr}</td>
                <td className="py-2 px-4">{profile.organization}</td>
                <td className="py-2 px-4">{profile.profileType}</td>
                <td className="py-2 px-4">{profile.profileName}</td>
                <td className="py-2 px-4">{profile.code}</td>
                <td className="py-2 px-4">{profile.seqNo}</td>
                <td className="py-2 px-4">{profile.prefix}</td>
                <td className="py-2 px-4">
                  <input
                    type="checkbox"
                    checked={profile.enable}
                    onChange={() => toggleEnable(index)}
                  />
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="text-gray-700 hover:text-blue-600">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing 1 to {profiles.length} of {profiles.length} entries
        </div>
      </div>
      
    </div>
  );
};

export default ProfileList;