import React from 'react'
import { BarChart, Activity, Cpu, Zap } from 'lucide-react'

const Dashboard: React.FC = () => {
  const metrics = [
    { label: 'ETL Jobs Today', value: 42, icon: Activity },
    { label: 'Active Models', value: 15, icon: BarChart },
    { label: 'CPU Capacity', value: '75%', icon: Cpu },
    { label: 'GPU Capacity', value: '60%', icon: Zap },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-neutral-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{metric.label}</h3>
              <metric.icon size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
      {/* Add more dashboard components here */}
    </div>
  )
}

export default Dashboard