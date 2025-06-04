import { useState } from 'react'
import vidhiData from '../data/vidhi.json'

export default function PoojanVidhi() {
  const [selectedDeity, setSelectedDeity] = useState(vidhiData[0])

  const handleSelect = (name) => {
    const deity = vidhiData.find((d) => d.name === name)
    setSelectedDeity(deity)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🙏 पूजा विधि एवं चालीसा</h1>

      {/* List of Deities */}
      <div className="flex flex-wrap gap-3 mb-6">
        {vidhiData.map((deity) => (
          <button
            key={deity.name}
            onClick={() => handleSelect(deity.name)}
            className={`px-4 py-2 rounded-full ${
              selectedDeity.name === deity.name
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {deity.name}
          </button>
        ))}
      </div>

      {/* Vidhi Section */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{selectedDeity.name} पूजा विधि</h2>
        <p className="text-gray-800 mb-4 whitespace-pre-line">{selectedDeity.vidhi}</p>

        <button
          onClick={() => window.print()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          🖨️ प्रिंट करें
        </button>
        <a
          href={selectedDeity.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          📥 PDF डाउनलोड
        </a>
      </div>

      {/* Chalisa Section */}
      {selectedDeity.chalisa && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{selectedDeity.name} चालीसा</h2>

          {selectedDeity.audio && (
            <audio controls className="mb-3">
              <source src={selectedDeity.audio} type="audio/mp3" />
              आपका ब्राउज़र ऑडियो प्लेयर को सपोर्ट नहीं करता।
            </audio>
          )}

          <p className="text-gray-800 whitespace-pre-line">{selectedDeity.chalisa}</p>
        </div>
      )}
    </div>
  )
}
