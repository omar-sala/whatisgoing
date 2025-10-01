'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faChartColumn,
  faLink,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="bg-blue-800 text-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* الشعار */}
        <h1 className="text-xl font-bold">🌍 NewsInsight</h1>

        {/* زر الموبايل */}
        <button
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

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

      {/* المنيو للموبايل */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-blue-800 flex flex-col text-center shadow-md md:hidden z-50">
          <li>
            <Link
              href="/"
              className="block px-4 py-3 hover:text-yellow-300"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-3 hover:text-yellow-300"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faChartColumn} className="mr-2" />
              لوحة التحكم
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/top-entities"
              className="block px-4 py-3 hover:text-yellow-300"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              الكيانات الأعلى
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-3 hover:text-yellow-300"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              عن المنصة
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
