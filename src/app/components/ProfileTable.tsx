"use client";

import { useState } from "react";

interface Profile {
  id: number;
  organization: string;
  type: string;
  name: string;
  code: string;
  seqNo: number;
  prefix: string;
  enabled: boolean;
}

const sampleData: Profile[] = [
  { id: 1, organization: "-", type: "SMS Template Type", name: "Patient Verify Report", code: "0", seqNo: 0, prefix: "PRVSMS", enabled: true },
  { id: 2, organization: "-", type: "SMS Template Type", name: "Patient Re-Verify Report", code: "0", seqNo: 0, prefix: "PRRSMS", enabled: true },
];

const ProfileTable = () => {
  const [profiles] = useState<Profile[]>(sampleData);

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-4">Profile List</h2>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Sr#</th>
            <th className="border px-2 py-1">Organization</th>
            <th className="border px-2 py-1">Profile Type</th>
            <th className="border px-2 py-1">Profile Name</th>
            <th className="border px-2 py-1">Code</th>
            <th className="border px-2 py-1">Seq No</th>
            <th className="border px-2 py-1">Prefix</th>
            <th className="border px-2 py-1">Enable</th>
            <th className="border px-2 py-1">Edit</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((p, i) => (
            <tr key={p.id} className="text-center">
              <td className="border px-2 py-1">{i + 1}</td>
              <td className="border px-2 py-1">{p.organization}</td>
              <td className="border px-2 py-1">{p.type}</td>
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.code}</td>
              <td className="border px-2 py-1">{p.seqNo}</td>
              <td className="border px-2 py-1">{p.prefix}</td>
              <td className="border px-2 py-1">
                <input type="checkbox" checked={p.enabled} readOnly />
              </td>
              <td className="border px-2 py-1">
                <button className="text-blue-600">✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
