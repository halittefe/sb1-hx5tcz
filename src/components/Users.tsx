import React, { useState } from 'react'
import { Plus, Edit, Trash } from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Data Analyst' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Data Scientist' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  const handleAddUser = () => {
    setEditingUser(null)
    setShowModal(true)
  }

  const handleEditUser = (user: User) => {
    setEditingUser(user)
    setShowModal(true)
  }

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newUser: User = {
      id: editingUser ? editingUser.id : users.length + 1,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
    }

    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? newUser : user)))
    } else {
      setUsers([...users, newUser])
    }

    setShowModal(false)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">User Management</h2>
      <button
        onClick={handleAddUser}
        className="mb-6 bg-primary text-neutral-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center"
      >
        <Plus size={20} className="mr-2" />
        Add User
      </button>
      <div className="bg-neutral-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary text-neutral-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-neutral-lightGray">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-accent-blue hover:text-opacity-80 mr-2"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-accent-red hover:text-opacity-80"
                  >
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-neutral-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-4">{editingUser ? 'Edit User' : 'Add User'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={editingUser?.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={editingUser?.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="role" className="block mb-2 font-semibold">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  defaultValue={editingUser?.role}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="Admin">Admin</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Data Scientist">Data Scientist</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-4 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-neutral-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  {editingUser ? 'Update' : 'Add'} User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users