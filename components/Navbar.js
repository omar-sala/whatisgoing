import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faChartColumn,
  faLink,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* الشعار */}
        <h1 className="text-xl font-bold">🌍 NewsInsight</h1>

        {/* الروابط */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition">
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="hover:text-yellow-300 transition"
            >
              <FontAwesomeIcon icon={faChartColumn} className="mr-2" />
              لوحة التحكم
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/top-entities"
              className="hover:text-yellow-300 transition"
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              الكيانات الأعلى
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              عن المنصة
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
