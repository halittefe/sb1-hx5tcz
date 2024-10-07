import React from 'react'
import { CheckCircle, XCircle, Clock } from 'lucide-react'

const ETLStatus: React.FC = () => {
  const etlJobs = [
    { id: 1, name: 'Daily User Data', status: 'Completed', startTime: '2023-03-15 08:00:00', endTime: '2023-03-15 08:15:30' },
    { id: 2, name: 'Product Inventory', status: 'Failed', startTime: '2023-03-15 09:00:00', endTime: '2023-03-15 09:05:45' },
    { id: 3, name: 'Sales Transactions', status: 'Running', startTime: '2023-03-15 10:00:00', endTime: null },
    { id: 4, name: 'Customer Feedback', status: 'Completed', startTime: '2023-03-15 11:00:00', endTime: '2023-03-15 11:10:20' },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle size={20} className="text-green-500" />
      case 'Failed':
        return <XCircle size={20} className="text-accent-red" />
      case 'Running':
        return <Clock size={20} className="text-accent-blue animate-spin" />
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">ETL Status</h2>
      <div className="bg-neutral-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary text-neutral-white">
            <tr>
              <th className="px-6 py-3 text-left">Job Name</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Start Time</th>
              <th className="px-6 py-3 text-left">End Time</th>
            </tr>
          </thead>
          <tbody>
            {etlJobs.map((job) => (
              <tr key={job.id} className="border-b border-gray-200 hover:bg-neutral-lightGray">
                <td className="px-6 py-4">{job.name}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {getStatusIcon(job.status)}
                    <span className="ml-2">{job.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{job.startTime}</td>
                <td className="px-6 py-4">{job.endTime || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ETLStatus