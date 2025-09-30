import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faChartColumn,
  faLink,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* الشعار */}
        <h1 className="text-xl font-bold">🌍 NewsInsight</h1>

        {/* input type checkbox للتحكم في القوائم على الموبايل */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </label>

          {/* القوائم تظهر عند checked */}
          <ul className="peer-checked:block hidden absolute top-full left-0 w-full bg-blue-800 flex flex-col">
            <li>
              <Link href="/" className="block px-4 py-2 hover:text-yellow-300">
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-2 hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faChartColumn} className="mr-2" />
                لوحة التحكم
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/top-entities"
                className="block px-4 py-2 hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faLink} className="mr-2" />
                الكيانات الأعلى
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                عن المنصة
              </Link>
            </li>
          </ul>
        </div>

        {/* الروابط للـ desktop */}
        <ul className="hidden md:flex md:gap-6 md:items-center">
          <li>
            <Link href="/" className="hover:text-yellow-300 flex items-center">
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="hover:text-yellow-300 flex items-center"
            >
              <FontAwesomeIcon icon={faChartColumn} className="mr-2" />
              لوحة التحكم
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/top-entities"
              className="hover:text-yellow-300 flex items-center"
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              الكيانات الأعلى
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-300 flex items-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              عن المنصة
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
