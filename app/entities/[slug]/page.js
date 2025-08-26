export default function EntityPage({ params }) {
  const { slug } = params

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">صفحة الكيان</h2>
      <p className="text-lg">
        الكيان المطلوب: <span className="font-semibold">{slug}</span>
      </p>
    </div>
  )
}
