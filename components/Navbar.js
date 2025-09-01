import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">NewsInsight</h1>
        <ul className="flex gap-6">
          <li>
            <Link href={'/'}>الرئيسية</Link>
          </li>
          <li>
            <Link href={'../entities'}>الكيانات</Link>
          </li>
          <li>
            <Link href={'/about'}>عن الموقع</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
