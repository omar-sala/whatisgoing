import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faUser,
  faBuilding,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

export default function TopRelatedEntities({ related }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-800 border-b pb-2 mb-4">
        🔗 الكيانات المرتبطة
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {/* أحداث */}
        {related?.event?.length > 0 && (
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarAlt} /> أحداث
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {related.event.map((ev) => (
                <li key={ev.id}>
                  {ev.name}{' '}
                  {ev.value !== undefined && (
                    <span className="text-sm text-gray-500">({ev.value})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* أشخاص */}
        {related?.person?.length > 0 && (
          <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} /> أشخاص
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {related.person.map((p) => (
                <li key={p.id}>
                  {p.name}{' '}
                  {p.value !== undefined && (
                    <span className="text-sm text-gray-500">({p.value})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* منظمات */}
        {related?.organization?.length > 0 && (
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-3 text-purple-700 flex items-center gap-2">
              <FontAwesomeIcon icon={faBuilding} /> منظمات
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {related.organization.map((o) => (
                <li key={o.id}>
                  {o.name}{' '}
                  {o.value !== undefined && (
                    <span className="text-sm text-gray-500">({o.value})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* أماكن */}
        {related?.location?.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> أماكن
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {related.location.map((loc) => (
                <li key={loc.id}>
                  {loc.name}{' '}
                  {loc.value !== undefined && (
                    <span className="text-sm text-gray-500">({loc.value})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
