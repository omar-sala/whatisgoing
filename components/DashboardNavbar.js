export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Dashboard</h1>
        <ul className="flex gap-4">
          <li>
            <a href="/dashboard">الرئيسية</a>
          </li>
          <li>
            <a href="/dashboard/reports">التقارير</a>
          </li>
          <li>
            <a href="/">الموقع الرئيسي</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
