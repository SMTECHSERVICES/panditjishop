const categories = [
  { name: 'लक्ष्मी पूजन', image: './src/assets/laxmi.jpg' },
  { name: 'विवाह पूजन', image: './src/assets/vivah.jpg' },
  { name: 'हवन सामग्री', image: './src/assets/havan.jpg' },
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
