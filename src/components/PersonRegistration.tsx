'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const PersonRegistration: React.FC = () => {
  const [personId, setPersonId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [relation, setRelation] = useState('');
  const [relationName, setRelationName] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [personImage, setPersonImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPersonImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setPersonImage(null);
      setImagePreview(null);
    }
  };

  const handleRemoveImage = () => {
    setPersonImage(null);
    setImagePreview(null);
  };

  const handleSave = () => {
    console.log({
      personId,
      firstName,
      middleName,
      lastName,
      relation,
      relationName,
      mobile1,
      mobile2,
      cnic,
      email,
      personImage,
    });
    alert('Person data saved!');
    handleClear();
  };

  const handleClear = () => {
    setPersonId('');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setRelation('');
    setRelationName('');
    setMobile1('');
    setMobile2('');
    setCnic('');
    setEmail('');
    setPersonImage(null);
    setImagePreview(null);
  };

  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Person ID */}
        <div className="md:col-span-1">
          <label htmlFor="personId" className="block text-sm font-medium text-gray-700">
            PersonId
          </label>
          <input
            type="text"
            id="personId"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="relation" className="block text-sm font-medium text-gray-700">
            Relation
          </label>
          <select
            id="relation"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
          >
            <option>Select Relation</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Husband</option>
            <option>Wife</option>
            <option>Guardian</option>
          </select>
        </div>

        <div className="md:col-span-1">
          <label htmlFor="relationName" className="block text-sm font-medium text-gray-700">
            Relation Name
          </label>
          <input
            type="text"
            id="relationName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={relationName}
            onChange={(e) => setRelationName(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="mobile1" className="block text-sm font-medium text-gray-700">
            Mobile 1
          </label>
          <input
            type="text"
            id="mobile1"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={mobile1}
            onChange={(e) => setMobile1(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="mobile2" className="block text-sm font-medium text-gray-700">
            Mobile 2
          </label>
          <input
            type="text"
            id="mobile2"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={mobile2}
            onChange={(e) => setMobile2(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
            CNIC
          </label>
          <input
            type="text"
            id="cnic"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            EMail
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="md:col-span-1 row-span-2 flex flex-col items-center border border-gray-300 p-2 rounded-md bg-white">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Person Image
          </label>
          <div className="relative w-32 h-32 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden mb-2">
            {imagePreview ? (
              <>
                <Image src={imagePreview} alt="Person Preview" className="object-cover w-full h-full" />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs"
                >
                  X
                </button>
              </>
            ) : (
              <span className="text-gray-400 text-xs">Person Image</span>
            )}
          </div>
          <input
            type="file"
            id="personImage"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
          <label
            htmlFor="personImage"
            className="cursor-pointer bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-4 rounded-md text-sm"
          >
            Choose File
          </label>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleSave}
          className="bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-6 rounded"
        >
          Save
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PersonRegistration;