'use client' // لازم client component عشان handle errors

export default function Error({ error, reset }) {
  return (
    <div className="p-6 text-center">
      <p className="text-red-600 font-semibold mb-4">
        ❌ حدث خطأ أثناء جلب البيانات
      </p>
      <p className="text-gray-500 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        🔄 إعادة المحاولة
      </button>
    </div>
  )
}
