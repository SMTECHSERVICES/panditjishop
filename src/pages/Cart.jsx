import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 आपकी पूजा सामग्री</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">कार्ट खाली है। <Link to="/products" className="text-blue-600">सामग्री देखें</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center bg-white p-4 shadow rounded">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-yellow-700">₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  हटाएं
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold mb-2">कुल राशि: ₹{totalPrice}</p>
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full"
            >
              ✅ Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
