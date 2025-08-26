export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">NewsInsight</h1>
        <ul className="flex gap-6">
          <li>
            <a href="/">الرئيسية</a>
          </li>
          <li>
            <a href="/entities">الكيانات</a>
          </li>
          <li>
            <a href="/about">عن الموقع</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
