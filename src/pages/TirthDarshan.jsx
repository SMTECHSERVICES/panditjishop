import tirthData from '../data/tirths.json'

export default function TirthDarshan() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛕 भारत के प्रमुख तीर्थ स्थल</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tirthData.map((place) => (
          <div key={place.id} className="bg-white p-4 rounded shadow">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold">{place.name}</h2>
            <p className="text-sm text-gray-600 mb-1">
              📍 {place.location}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              🏨 रहने की सुविधा: {place.stay}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              📞 संपर्क: {place.contact}
            </p>
            <a
              href={place.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              🗺️ रास्ता देखें (Google Maps)
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
