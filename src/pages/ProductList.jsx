import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import productsData from '../data/products.json'
import { useCart } from '../context/CartContext'

export default function ProductList() {
  const [filters, setFilters] = useState({})
  const [cartItems, setCartItems] = useState([])
  const { addToCart } = useCart()
 
  const handleAddToCart = (product) => {
  addToCart(product)
  alert(`${product.name} कार्ट में जोड़ा गया!`)
 
  }
   

  // const handleAddToCart = (product) => {
  //   setCartItems((prev) => [...prev, product])
  //   alert(`${product.name} कार्ट में जोड़ा गया!`)
  // }

  return (
    <div className="flex">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-full">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}
