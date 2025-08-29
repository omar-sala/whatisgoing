export default function Loading() {
  return (
    <div className="p-6 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-4 text-gray-600 font-medium">
        ⏳ جاري تحميل البيانات...
      </p>
    </div>
  )
}
