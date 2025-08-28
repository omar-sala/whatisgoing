export default function EntityCard({ entity }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{entity.name}</h3>
      <p className="text-gray-600">{entity.description || 'لا يوجد وصف'}</p>
      <a
        href={`/entities/${encodeURIComponent(entity.slug)}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        اقرأ المزيد
      </a>
    </div>
  )
}
