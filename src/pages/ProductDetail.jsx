import { useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = productsData.find((p) => p.id === parseInt(id))
  const related = productsData.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-yellow-700 text-xl font-semibold mb-4">
            ₹{product.price}
          </p>

          <button
            onClick={() => {
              addToCart(product)
              alert('कार्ट में जोड़ दिया गया!')
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full mb-6"
          >
            🛒 कार्ट में जोड़ें
          </button>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">सामग्री की जानकारी:</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">पूजा में उपयोग:</h2>
            <p className="text-gray-700">{product.usage}</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">🔸 संबंधित पूजन थालियाँ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {related.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow rounded">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{item.name}</h3>
              <p className="text-yellow-700 font-bold">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
