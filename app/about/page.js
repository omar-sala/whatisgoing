import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNewspaper,
  faUsers,
  faChartLine,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-blue-800 mb-6">عن المنصة 🌍</h1>
      <p className="text-gray-700 mb-10 leading-relaxed">
        منصة <span className="font-semibold">NewsInsight</span> صُممت لعرض
        وتحليل الأخبار من مصادر مختلفة، مع إبراز الكيانات، الأشخاص، الأحداث،
        والمواقع الأكثر ذكرًا في التغطية الإعلامية.
      </p>

      {/* كروت المميزات */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="text-blue-600 text-2xl mt-1"
          />
          <div>
            <h2 className="text-xl text-blue-600 font-semibold mb-2">
              تجميع الأخبار
            </h2>
            <p className="text-gray-600">
              نجمع الأخبار من مصادر متعددة لضمان تغطية شاملة.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-green-600 text-2xl mt-1"
          />
          <div>
            <h2 className="text-xl text-green-600 font-semibold mb-2">
              تحليل الكيانات
            </h2>
            <p className="text-gray-600">
              إبراز الأشخاص، المنظمات، والأماكن الأكثر ظهورًا في الأخبار.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-yellow-500 text-2xl mt-1"
          />
          <div>
            <h2 className="text-xl text-yellow-600 font-semibold mb-2">
              إحصائيات بصرية
            </h2>
            <p className="text-gray-600">
              عرض البيانات في رسوم بيانية ولوحات تحكم سهلة الفهم.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-red-500 text-2xl mt-1"
          />
          <div>
            <h2 className="text-xl text-red-600 font-semibold mb-2">
              سهولة البحث
            </h2>
            <p className="text-gray-600">
              تمكين المستخدم من الوصول السريع للمعلومة المطلوبة.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
