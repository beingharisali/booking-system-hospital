"use client";

import React, { useState } from "react";

export default function ProfileForm() {
  // ✅ Strongly typed form state
  const [form, setForm] = useState<{
    profileType: string;
    name: string;
    urduName: string;
    code: string;
    seqNo: string;
    prefix: string;
  }>({
    profileType: "",
    name: "",
    urduName: "",
    code: "",
    seqNo: "",
    prefix: "",
  });

  // ✅ handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ handle save
  const handleSave = () => {
    console.log("Form Data:", form);
    alert("Form saved! ✅");
  };

  // ✅ handle clear
  const handleClear = () => {
    setForm({
      profileType: "",
      name: "",
      urduName: "",
      code: "",
      seqNo: "",
      prefix: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Profile Form
      </h2>

      {/* Profile Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Profile Type</label>
        <select
          name="profileType"
          value={form.profileType}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select Type</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Urdu Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Urdu Name</label>
        <input
          type="text"
          name="urduName"
          value={form.urduName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Code */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Code</label>
        <input
          type="text"
          name="code"
          value={form.code}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Seq No */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Seq No</label>
        <input
          type="text"
          name="seqNo"
          value={form.seqNo}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Prefix */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Prefix</label>
        <input
          type="text"
          name="prefix"
          value={form.prefix}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
