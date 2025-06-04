import { useState } from 'react'
import panditList from '../data/pandits.json'

export default function PanditDirectory() {
  const [search, setSearch] = useState('')
  const [district, setDistrict] = useState('')

  const filtered = panditList.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.district.toLowerCase().includes(district.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 पंडित डायरेक्टरी</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="नाम से खोजें"
          className="p-2 border rounded w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="जिला से खोजें"
          className="p-2 border rounded w-full sm:w-1/2"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>

      {/* Pandit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <p>❌ कोई पंडित नहीं मिला</p>
        ) : (
          filtered.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-1">{p.name}</h2>
              <p>📍 जिला: {p.district}</p>
              <p>🧘 अनुभव: {p.experience} वर्ष</p>
              <p>🔱 विशेषज्ञता: {p.expertise.join(', ')}</p>
              <p>📞 संपर्क: {p.contact}</p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                📅 Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
