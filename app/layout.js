import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export const metadata = {
  title: 'NewsInsight',
  description: 'منصة لعرض الأخبار والكيانات باستخدام Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main className="min-h-screen container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
