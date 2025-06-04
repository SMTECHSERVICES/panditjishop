// src/components/ProductCard.jsx

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // सही path रखें

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // ✅ hook अब component के अंदर

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <Link to={`/product/${product.id}`} className="w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
        <p className="text-yellow-700 font-semibold text-xl mt-1">₹{product.price}</p>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full"
      >
        🛒 कार्ट में जोड़ें
      </button>
    </div>
  );
}
