'use client'

import { useEffect, useState } from 'react'

export default function SourcesStats() {
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSources() {
      try {
        const res = await fetch('https://backend.whatisgoing.com/api/home', {
          cache: 'no-store',
        })
        if (!res.ok) throw new Error('فشل تحميل المصادر')

        const data = await res.json()

        const list = Object.entries(data.news_count_per_source || {}).map(
          ([name, count]) => ({ name, count })
        )
        list.sort((a, b) => (b.count || 0) - (a.count || 0))

        setSources(list)
      } catch (err) {
        setError(err?.message || 'حدث خطأ غير متوقع')
      } finally {
        setLoading(false)
      }
    }

    fetchSources()
  }, [])

  if (loading) return <p>⏳ جاري التحميل...</p>
  if (error) return <p className="text-red-500">❌ {error}</p>

  return (
    <div className="p-4 bg-blue-500 shadow rounded-2xl w-full">
      <h2 className="text-xl font-bold mb-4">📊 أكثر المصادر كتابةً للأخبار</h2>
      <ul className="space-y-2">
        {sources.map((src, idx) => (
          <li
            key={src.name || idx}
            className="flex justify-between bg-blue-400 p-2 rounded-md"
          >
            <span>{src.name}</span>
            <span className="font-semibold">
              {Number(src.count).toLocaleString('ar-EG')} خبر
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
