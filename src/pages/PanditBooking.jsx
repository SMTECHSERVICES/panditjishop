import { useState } from 'react'
import panditList from '../data/pandits.json'

export default function PanditBooking() {
  const [pujaType, setPujaType] = useState('')
  const [district, setDistrict] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const filteredPandits = panditList.filter(
    (p) =>
      (!district || p.district === district) &&
      (!pujaType || p.expertise.includes(pujaType))
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🧘 पंडित बुकिंग फॉर्म</h1>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded shadow mb-6">
        <div>
          <label className="block font-semibold mb-1">पूजा प्रकार चुनें</label>
          <select
            className="w-full border p-2 rounded"
            value={pujaType}
            onChange={(e) => setPujaType(e.target.value)}
          >
            <option value="">-- चयन करें --</option>
            <option value="लक्ष्मी पूजन">लक्ष्मी पूजन</option>
            <option value="विवाह पूजन">विवाह पूजन</option>
            <option value="हवन">हवन</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">जिला चुनें</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="जिला जैसे: वाराणसी"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">तारीख</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">समय</label>
          <input
            type="time"
            className="w-full border p-2 rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      {/* Pandit List */}
      <h2 className="text-xl font-semibold mb-4">📜 उपलब्ध पंडित</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPandits.length === 0 ? (
          <p>कोई पंडित नहीं मिला</p>
        ) : (
          filteredPandits.map((p) => (
            <div key={p.id} className="border rounded shadow p-4 bg-white">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p>स्थान: {p.district}</p>
              <p>अनुभव: {p.experience} वर्ष</p>
              <p>विशेषज्ञता: {p.expertise.join(', ')}</p>
              <button className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
                📞 Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
