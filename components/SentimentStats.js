import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSmile,
  faFrown,
  faMeh,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

export default function SentimentStats({ stats }) {
  // خريطة القيم: رقم → نص + لون + أيقونة
  const labels = {
    0: { text: 'سلبي', color: 'text-red-600', icon: faFrown },
    1: { text: 'إيجابي', color: 'text-green-600', icon: faSmile },
    2: { text: 'محايد', color: 'text-gray-600', icon: faMeh },
  }

  return (
    <div>
      {/* العنوان */}
      <h2 className="text-2xl font-semibold text-blue-800 border-b pb-2 mb-4">
        📊 إحصائيات المشاعر
      </h2>

      {/* القائمة */}
      <ul className="space-y-3 text-gray-800">
        {Object.entries(stats || {}).map(([key, value]) => {
          const label = labels[key] || {
            text: key,
            color: 'text-gray-600',
            icon: faQuestionCircle,
          }

          return (
            <li key={key} className="flex items-center gap-2">
              {/* النص + الأيقونة */}
              <span
                className={`font-semibold flex items-center gap-1 ${label.color}`}
              >
                <FontAwesomeIcon icon={label.icon} /> {label.text}:
              </span>

              {/* القيمة */}
              {typeof value === 'object' ? (
                <span className="text-gray-600">
                  {value.name} ({value.value})
                </span>
              ) : (
                <span className="text-gray-600">{value}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
