import EntityHeader from '@/components/EntityHeader'
import SentimentStats from '@/components/SentimentStats'
import NewsSourcesList from '@/components/NewsSourcesList'
import TopRelatedEntities from '@/components/TopRelatedEntities'
import EntityFrequencyChart from '@/components/EntityFrequencyChart'

export async function generateMetadata({ params }) {
  const { slug } = params
  return {
    title: `صفحة الكيان: ${slug}`,
  }
}

export default async function EntityPage({ params }) {
  const { slug } = params

  const res = await fetch(
    `https://backend.whatisgoing.com/api/entities/${slug}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('فشل في جلب البيانات') // يروح لـ error.js
  }

  const entity = await res.json()

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-2xl shadow-md">
      <EntityHeader name={entity.name} description={entity.description} />
      <SentimentStats stats={entity.sentiment_statistics} />
      <NewsSourcesList sources={entity.news_count_per_source} />
      <TopRelatedEntities related={entity.top_related_entities} />

      {/* Line Chart */}
      <EntityFrequencyChart data={entity.entity_frequency} />
    </div>
  )
}
