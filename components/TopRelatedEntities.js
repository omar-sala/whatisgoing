export default function TopRelatedEntities({ related }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-800 border-b pb-2 mb-4">
        🔗 الكيانات المرتبطة
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* أحداث */}
        {related?.event?.length > 0 && (
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-2 text-blue-700">📅 أحداث</h3>
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
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-2 text-green-700">👤 أشخاص</h3>
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
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg mb-2 text-purple-700">
              🏢 منظمات
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
      </div>
    </div>
  )
}

// export default function TopRelatedEntities({ entities }) {
//   if (!entities || entities.length === 0) return null

//   return (
//     <div className="bg-gray-50 p-4 rounded-lg shadow">
//       <h2 className="text-xl font-semibold mb-3">الكيانات المرتبطة</h2>
//       <ul className="list-disc list-inside text-gray-700 space-y-1">
//         {entities.map((e, i) => (
//           <li key={i}>
//             {e.name} <span className="text-sm text-gray-500">({e.value})</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
