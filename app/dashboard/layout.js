export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-indigo-600">📊 Dashboard</h2>
        <nav className="space-y-3">
          <a
            href="/dashboard"
            className="block text-gray-700 hover:text-indigo-600"
          >
            🏠 الرئيسية
          </a>
          <a
            href="/dashboard/top-entities"
            className="block text-gray-700 hover:text-indigo-600"
          >
            🔝 Top Entities
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
