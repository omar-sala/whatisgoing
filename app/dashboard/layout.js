import DashboardNavbar from '../../components/DashboardNavbar'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-500">
      <DashboardNavbar />
      <main className="p-6">{children}</main>
    </div>
  )
}
