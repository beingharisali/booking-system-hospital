import React, { useState } from 'react';

const PartyPricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Product');

  return (
    <div className="p-4">
      <div className="bg-[#2f3b3f] text-white px-4 py-2 font-semibold">
        Party Pricing Configuration
      </div>

      <div className="border border-gray-300 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="partyName" className="block text-gray-700 text-sm font-semibold mb-1">
              Party *
            </label>
            <input
              type="text"
              id="partyName"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="willEffectedFrom" className="block text-gray-700 text-sm font-semibold mb-1">
              Will Effected From
            </label>
            <input
              type="date"
              id="willEffectedFrom"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Detail</h3>
          <div className="flex border-b border-gray-300">
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 'Product'
                  ? 'border-b-2 border-blue-500 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('Product')}
            >
              Product
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === 'Service'
                  ? 'border-b-2 border-blue-500 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('Service')}
            >
              Service
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === 'Service Product'
                  ? 'border-b-2 border-blue-500 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('Service Product')}
            >
              Service Product
            </button>
            <button
              className={`ml-4 py-2 px-4 text-sm font-medium ${
                activeTab === 'Section'
                  ? 'border-b-2 border-blue-500 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('Section')}
            >
              Section
            </button>
          </div>
        </div>

        {activeTab === 'Product' && (
          <div className="mt-4">
            <div className="flex justify-end mb-4">
              <label htmlFor="searchProduct" className="block text-gray-700 text-sm font-semibold mr-2 self-center">
                Search:
              </label>
              <input
                type="text"
                id="searchProduct"
                className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Code</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Product Name</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Share %</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Flat Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">Product A</td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">Product B</td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Service' && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label htmlFor="service" className="block text-gray-700 text-sm font-semibold mb-1">
                  Service *
                </label>
                <select id="service" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300">
                  <option>Select Service</option>
                </select>
              </div>
              <div>
                <label htmlFor="servicePrice" className="block text-gray-700 text-sm font-semibold mb-1">
                  Service Price *
                </label>
                <input type="text" id="servicePrice" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div>
                <label htmlFor="sharePercent" className="block text-gray-700 text-sm font-semibold mb-1">
                  SharePercent(%)
                </label>
                <input type="text" id="sharePercent" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div className="flex items-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Clear
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                Import
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                Apply Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">ServiceId</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Type</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Section</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Service Name</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Service Price</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Share Percent</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Flat Share Amount</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">1001</td>
                    <td className="py-2 px-4">Diagnostic</td>
                    <td className="py-2 px-4">Radiology</td>
                    <td className="py-2 px-4">X-Ray Chest</td>
                    <td className="py-2 px-4">1500</td>
                    <td className="py-2 px-4">10</td>
                    <td className="py-2 px-4">150</td>
                    <td className="py-2 px-4 text-center">
                      <button className="text-red-500 hover:text-red-700">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Service Product' && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="serviceCategory" className="block text-gray-700 text-sm font-semibold mb-1">
                  Service Category
                </label>
                <select id="serviceCategory" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300">
                  <option>Select Service Category</option>
                </select>
                <div className="flex items-center mt-2">
                  <span className="text-gray-600 text-sm mr-2">Show</span>
                  <select className="border rounded px-2 py-1 text-gray-700">
                    <option>10</option>
                    <option>25</option>
                  </select>
                  <span className="text-gray-600 text-sm ml-2">entries</span>
                  <label htmlFor="searchService" className="ml-auto mr-2 text-gray-700 text-sm font-semibold">
                    Search:
                  </label>
                  <input
                    type="text"
                    id="searchService"
                    className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                        <th className="py-2 px-4 text-left border border-gray-400 font-semibold">ServiceId</th>
                        <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Service Name</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                      <tr><td colSpan={2} className="py-2 px-4 text-center">No data available in table</td></tr>
                    </tbody>
                  </table>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <div>Showing 0 to 0 of 0 entries</div>
                    <div>
                      <button className="px-3 py-1 border rounded mr-1">Previous</button>
                      <button className="px-3 py-1 border rounded">Next</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="productCategory" className="block text-gray-700 text-sm font-semibold mb-1">
                  Product Category
                </label>
                <select id="productCategory" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300">
                  <option>Select Product Category</option>
                </select>
                <div className="flex items-center mt-2">
                  <span className="text-gray-600 text-sm mr-2">Show</span>
                  <select className="border rounded px-2 py-1 text-gray-700">
                    <option>10</option>
                    <option>25</option>
                  </select>
                  <span className="text-gray-600 text-sm ml-2">entries</span>
                  <label htmlFor="searchProductCat" className="ml-auto mr-2 text-gray-700 text-sm font-semibold">
                    Search:
                  </label>
                  <input
                    type="text"
                    id="searchProductCat"
                    className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                        <th className="py-2 px-4 text-left border border-gray-400 font-semibold">ProductId</th>
                        <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Product Name</th>
                        <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Service Price</th>
                        <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Add</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                      <tr><td colSpan={4} className="py-2 px-4 text-center">No data available in table</td></tr>
                    </tbody>
                  </table>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <div>Showing 0 to 0 of 0 entries</div>
                    <div>
                      <button className="px-3 py-1 border rounded mr-1">Previous</button>
                      <button className="px-3 py-1 border rounded">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">Selected Service & Product</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Service</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Product</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Service Price</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Delete</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr><td colSpan={4} className="py-2 px-4 text-center">No selected services or products</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Section' && (
          <div className="mt-4">
            <div className="flex justify-end mb-4">
              <label htmlFor="searchSection" className="block text-gray-700 text-sm font-semibold mr-2 self-center">
                Search:
              </label>
              <input
                type="text"
                id="searchSection"
                className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#5a7b8c] text-white text-sm uppercase">
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Code</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Section Name</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Share %</th>
                    <th className="py-2 px-4 text-left border border-gray-400 font-semibold">Flat Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">10</td>
                    <td className="py-2 px-4">ALLERGY DISORDERS</td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">9</td>
                    <td className="py-2 px-4">AUTOIMMUNE DISORDERS</td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">BIOCHEMISTRY</td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">11</td>
                    <td className="py-2 px-4">BODY FLUID</td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                    <td className="py-2 px-4"><input type="text" className="border rounded px-2 py-1 w-20" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex space-x-4 mt-6">
          <button className="bg-[#54717c] hover:bg-[#435b63] text-white font-semibold py-2 px-6 rounded">
            Save
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartyPricing;