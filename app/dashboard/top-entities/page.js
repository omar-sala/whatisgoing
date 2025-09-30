'use client'
import React, { useEffect, useState } from 'react'

export default function TopEntitiesPage() {
  const [entities, setEntities] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchEntities = async () => {
      try {
        setError(null)
        setEntities(null)

        const res = await fetch(
          'https://backend.whatisgoing.com/api/home/entities',
          { signal }
        )

        if (!res.ok) {
          const txt = await res.text().catch(() => '')
          throw new Error(
            `HTTP ${res.status} ${res.statusText} ${txt ? `- ${txt}` : ''}`
          )
        }

        const data = await res.json()

        // نجمع كل الكيانات
        const persons = Array.isArray(data.persons) ? data.persons : []
        const events = Array.isArray(data.events) ? data.events : []
        const locations = Array.isArray(data.locations) ? data.locations : []
        const organizations = Array.isArray(data.organizations)
          ? data.organizations
          : []

        let allEntities = [
          ...persons,
          ...events,
          ...locations,
          ...organizations,
        ]

        // ترتيب تنازلي حسب news_count
        allEntities = allEntities.sort(
          (a, b) => (b.news_count ?? 0) - (a.news_count ?? 0)
        )

        setEntities(allEntities)
      } catch (err) {
        if (err.name === 'AbortError') return
        console.error('[TopEntitiesPage] fetch error:', err)
        setError('❌ فشل تحميل الكيانات — ' + (err.message || 'خطأ غير معروف'))
        setEntities([])
      }
    }

    fetchEntities()
    return () => controller.abort()
  }, [])

  if (error) return <p className="text-red-600">{error}</p>
  if (entities === null) return <p>⏳ جاري التحميل...</p>
  if (entities.length === 0) return <p>لا توجد كيانات للعرض.</p>

  return (
    <div>
      <h1 className="text-2xl text-blue-600 font-bold mb-4">Top Entities</h1>
      <ul className="space-y-2">
        {entities.map((entity, idx) => (
          <li
            key={entity.id ?? entity.name ?? idx}
            className="p-3 border rounded-lg shadow"
          >
            <h2 className="font-semibold text-gray-600">{entity.name}</h2>
            <p className="text-sm text-gray-600">
              النوع: {entity.entity_type ?? 'غير معروف'} | الأخبار:{' '}
              {entity.news_count ?? 0}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
