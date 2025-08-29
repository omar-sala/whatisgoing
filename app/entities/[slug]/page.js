import { Suspense, lazy } from 'react'
import EntityHeader from '@/components/EntityHeader'
import SentimentStats from '@/components/SentimentStats'

// Lazy imports for heavy components
const EntityFrequencyChart = lazy(() =>
  import('@/components/EntityFrequencyChart')
)
const NewsSourcesList = lazy(() => import('@/components/NewsSourcesList'))
const TopRelatedEntities = lazy(() => import('@/components/TopRelatedEntities'))

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = params

  const res = await fetch(
    `https://backend.whatisgoing.com/api/entities/${slug}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    return {
      title: `الكيان: ${slug}`,
      description: 'تعذر تحميل بيانات الكيان',
    }
  }

  const entity = await res.json()

  return {
    title: `📌 ${entity.name} | WhatIsGoing`,
    description: entity.description || `صفحة ${entity.name} على WhatIsGoing`,
    openGraph: {
      title: `📌 ${entity.name} | WhatIsGoing`,
      description: entity.description || `صفحة ${entity.name} على WhatIsGoing`,
      url: `https://whatisgoing.com/entities/${slug}`,
      siteName: 'WhatIsGoing',
      images: [
        {
          url: entity.image || 'https://whatisgoing.com/default-og.png',
          width: 1200,
          height: 630,
          alt: entity.name,
        },
      ],
      locale: 'ar_EG',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `📌 ${entity.name} | WhatIsGoing`,
      description: entity.description || `صفحة ${entity.name} على WhatIsGoing`,
      images: [entity.image || 'https://whatisgoing.com/default-og.png'],
    },
  }
}

// ✅ Showcase Page
export default async function EntityPage({ params }) {
  const { slug } = params

  const res = await fetch(
    `https://backend.whatisgoing.com/api/entities/${slug}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('فشل في جلب البيانات')
  }

  const entity = await res.json()

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <EntityHeader name={entity.name} description={entity.description} />
        </div>

        {/* Sentiment Stats */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">📊 إحصائيات المشاعر</h2>
          <SentimentStats stats={entity.sentiment_statistics} />
        </div>

        {/* News Sources */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">📰 مصادر الأخبار</h2>
          <Suspense fallback={<div>⏳ جاري تحميل المصادر...</div>}>
            <NewsSourcesList sources={entity.news_count_per_source} />
          </Suspense>
        </div>

        {/* Related Entities */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">🔗 الكيانات المرتبطة</h2>
          <Suspense fallback={<div>⏳ جاري تحميل الكيانات المرتبطة...</div>}>
            <TopRelatedEntities related={entity.top_related_entities} />
          </Suspense>
        </div>

        {/* Frequency Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">
            📈 تكرار ظهور الكيان عبر الزمن
          </h2>
          <Suspense fallback={<div>📊 جاري تحميل الرسم البياني...</div>}>
            <EntityFrequencyChart data={entity.entity_frequency} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
