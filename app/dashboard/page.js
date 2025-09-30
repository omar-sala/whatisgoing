import SourcesStats from './SourcesStats'

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl text-yellow-600 font-bold mb-4">مرحباً بك 👋</h1>
      <p className="text-gray-600">اختر من القائمة لعرض البيانات.</p>
      <SourcesStats />
    </div>
  )
}
