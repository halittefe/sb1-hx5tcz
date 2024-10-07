import React, { useState } from 'react'
import { Search } from 'lucide-react'

const Models: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const models = [
    { id: 1, name: 'Model A', status: 'Active', performance: '95%', lastUpdated: '2023-03-15' },
    { id: 2, name: 'Model B', status: 'Inactive', performance: '87%', lastUpdated: '2023-03-10' },
    { id: 3, name: 'Model C', status: 'Active', performance: '92%', lastUpdated: '2023-03-14' },
    { id: 4, name: 'Model D', status: 'Active', performance: '89%', lastUpdated: '2023-03-12' },
  ]

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Active Models</h2>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search models..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div className="bg-neutral-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary text-neutral-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Performance</th>
              <th className="px-6 py-3 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {filteredModels.map((model) => (
              <tr key={model.id} className="border-b border-gray-200 hover:bg-neutral-lightGray">
                <td className="px-6 py-4">{model.name}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      model.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {model.status}
                  </span>
                </td>
                <td className="px-6 py-4">{model.performance}</td>
                <td className="px-6 py-4">{model.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Models