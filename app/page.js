import EntityCard from '@/components/EntityCard'

export default async function HomePage() {
  const res = await fetch('https://backend.whatisgoing.com/api/home', {
    next: { revalidate: 60 },
  })

  const data = await res.json()
  const entities = data.organizations || []

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">آخر الكيانات</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {entities.map((entity) => (
          <EntityCard key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  )
}
