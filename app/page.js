export default async function HomePage() {
  const res = await fetch('https://backend.whatisgoing.com/api/home', {
    cache: 'no-store',
  })

  if (!res.ok) {
    return <p>حدث خطأ أثناء جلب البيانات: {res.status}</p>
  }

  const data = await res.json()
  const entities = data.organizations || []

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">آخر الكيانات</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {entities.map((entity) => (
          <div
            key={entity.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{entity.name}</h3>
            <p className="text-gray-600">
              {entity.description || 'لا يوجد وصف'}
            </p>
            <a
              href={`/entities/${encodeURIComponent(entity.slug)}`}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
            >
              اقرأ المزيد
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
