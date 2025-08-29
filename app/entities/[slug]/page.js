import EntityHeader from '@/components/EntityHeader'
import SentimentStats from '@/components/SentimentStats'
import NewsSourcesList from '@/components/NewsSourcesList'
import TopRelatedEntities from '@/components/TopRelatedEntities'
import EntityFrequencyChart from '@/components/EntityFrequencyChart'

export async function generateMetadata({ params }) {
  const { slug } = params

  // جلب بيانات الكيان عشان نبني الـ metadata منها
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
    <div className="space-y-8 p-6 bg-gray-50 rounded-2xl shadow-md">
      <EntityHeader name={entity.name} description={entity.description} />
      <SentimentStats stats={entity.sentiment_statistics} />
      <NewsSourcesList sources={entity.news_count_per_source} />
      <TopRelatedEntities related={entity.top_related_entities} />
      <EntityFrequencyChart data={entity.entity_frequency} />
    </div>
  )
}
