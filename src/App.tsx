import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Models from './components/Models'
import DataEnrichment from './components/DataEnrichment'
import ETLStatus from './components/ETLStatus'
import Users from './components/Users'
import Menu from './components/Menu'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-neutral-black text-neutral-white' : 'bg-neutral-white text-neutral-black'}`}>
        {isAuthenticated && <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        <div className={`${isAuthenticated ? 'ml-64' : ''} p-8`}>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/models" element={<Models />} />
            <Route path="/data-enrichment" element={<DataEnrichment />} />
            <Route path="/etl-status" element={<ETLStatus />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App