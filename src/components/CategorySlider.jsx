const categories = [
  { name: 'गणेश पूजन', image: './images/ganeshpuja.jpg' },
  { name: 'लक्ष्मी पूजन', image: './images/laxmi.jpg' },
  { name: 'नवग्रह शांति पूजन', image: './images/navagrahashantipuja.jpg' },
  { name: 'सत्यनारायण कथा पूजन', image: './images/stayanarayanpooja.jpg' },
  { name: 'विवाह पूजन', image: './images/vivah.jpg' },
  { name: 'हवन सामग्री', image: './images/havan.jpg' },
]

export default function CategorySlider() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">🌼 पूजा कैटेगरी</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="min-w-[200px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-36 object-cover"
            />
            <div className="p-2 text-center text-lg font-semibold">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
