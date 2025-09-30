'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function EntityFrequencyChart({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">لا توجد بيانات لعرضها</p>
  }

  return (
    <div className="w-full h-80 bg-white shadow rounded-2xl p-4">
      <h2 className="text-xl text-blue-600 font-bold mb-4">
        تغير تكرار الكيان بمرور الوقت
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
