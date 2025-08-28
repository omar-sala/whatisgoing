export default function SentimentStats({ stats }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-800 border-b pb-2 mb-4">
        📊 إحصائيات المشاعر
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {Object.entries(stats || {}).map(([key, value]) => (
          <li key={key}>
            <span className="font-semibold capitalize">{key}:</span>{' '}
            {typeof value === 'object' ? (
              <span className="text-gray-600">
                {value.name} ({value.value})
              </span>
            ) : (
              <span className="text-gray-600">{value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

// export default function SentimentStats({ stats }) {
//   if (!stats) {
//     return <p className="text-gray-500">لا توجد بيانات إحصائية متاحة</p>
//   }

//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow w-fit mb-6">
//       <h2 className="text-xl font-semibold mb-3">إحصائيات المشاعر</h2>
//       <ul className="space-y-1 text-gray-800">
//         <li>👍 إيجابي: {stats.positive}</li>
//         <li>👎 سلبي: {stats.negative}</li>
//         <li>😐 محايد: {stats.neutral}</li>
//       </ul>
//     </div>
//   )
// }
