import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Database, FileSpreadsheet, Activity, Users, Sun, Moon } from 'lucide-react'

interface MenuProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Menu: React.FC<MenuProps> = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/models', label: 'Models', icon: Database },
    { path: '/data-enrichment', label: 'Data Enrichment', icon: FileSpreadsheet },
    { path: '/etl-status', label: 'ETL Status', icon: Activity },
    { path: '/users', label: 'Users', icon: Users },
  ]

  return (
    <nav className={`fixed left-0 top-0 h-full w-64 ${isDarkMode ? 'bg-neutral-darkGray' : 'bg-primary'} text-neutral-white p-6`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Data Admin</h1>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-opacity-20 hover:bg-neutral-white">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-4">
            <Link
              to={item.path}
              className={`flex items-center p-2 rounded-md transition duration-300 ${
                location.pathname === item.path
                  ? 'bg-secondary text-neutral-black'
                  : 'hover:bg-opacity-20 hover:bg-neutral-white'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu