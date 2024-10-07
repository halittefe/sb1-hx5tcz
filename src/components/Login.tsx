import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
  onLogin: () => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      onLogin()
      navigate('/')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-lightGray">
      <div className="bg-neutral-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          {error && <p className="text-accent-red mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-neutral-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login