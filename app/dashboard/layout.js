'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`
          bg-white shadow-lg p-6 space-y-6 md:w-64 md:flex-shrink-0
          ${isOpen ? 'block' : 'hidden'} md:block
        `}
      >
        <h2 className="text-2xl font-bold text-indigo-600">📊 Dashboard</h2>
        <nav className="space-y-3">
          <Link
            href="/dashboard"
            className="block text-gray-700 hover:text-indigo-600"
          >
            🏠 الرئيسية
          </Link>
          <Link
            href="/dashboard/top-entities"
            className="block text-gray-700 hover:text-indigo-600"
          >
            🔝 Top Entities
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* زر القائمة على الموبايل */}
        <div className="md:hidden bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-indigo-600">📊 Dashboard</h2>
          <button
            className="text-2xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
