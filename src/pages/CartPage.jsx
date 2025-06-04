import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart()

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 आपका कार्ट</h1>

      {cartItems.length === 0 ? (
        <p>🪔 आपका कार्ट खाली है</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>मात्रा: {item.qty}</p>
                  <p>₹ {item.price} × {item.qty}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                ❌ हटाएं
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <h2 className="text-xl font-bold">कुल: ₹ {total}</h2>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
              ✅ Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
