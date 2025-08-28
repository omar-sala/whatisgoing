export default function EntityHeader({ name, description }) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{name}</h1>
      <p className="text-gray-700 leading-relaxed">
        {description || 'لا يوجد وصف'}
      </p>
    </div>
  )
}
