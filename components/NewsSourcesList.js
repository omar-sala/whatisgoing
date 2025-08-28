export default function NewsSourcesList({ sources }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-800 border-b pb-2 mb-4">
        📰 عدد الأخبار لكل مصدر
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {Object.entries(sources || {}).map(([source, count]) => (
          <li key={source}>
            <span className="font-semibold">{source}:</span>{' '}
            {typeof count === 'object' ? (
              <span className="text-gray-600">
                {count.name} ({count.value})
              </span>
            ) : (
              <span className="text-gray-600">{count}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

// export default function NewsSourcesList({ sources }) {
//   if (!sources) return null

//   return (
//     <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
//       <h2 className="text-xl font-semibold mb-3">عدد الأخبار لكل مصدر</h2>
//       <ul className="list-disc list-inside text-gray-700 space-y-1">
//         {Object.entries(sources).map(([source, count]) => (
//           <li key={source}>
//             <span className="font-medium">{source}:</span> {count}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
