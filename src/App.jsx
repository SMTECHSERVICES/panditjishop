import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Booking from './pages/Booking'
import VidhiChalisa from './pages/VidhiChalisa'
import TirthDarshan from './pages/TirthDarshan'
import PanditDirectory from './pages/PanditDirectory'
import JobPortal from './pages/JobPortal'
import Contact from './pages/Contact'
import PanditBooking from './pages/PanditBooking'
import { CartProvider } from './context/CartContext'
import PoojanVidhi from './pages/PoojanVidhi';
import PostJob from './pages/PostJob';
import PanditRegistration from './pages/PanditRegistration';



function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/vidhi-chalisa" element={<VidhiChalisa />} />
        <Route path="/tirth-darshan" element={<TirthDarshan />} />
        <Route path="/pandit-directory" element={<PanditDirectory />} />
        <Route path="/job-portal" element={<JobPortal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/pandit-booking" element={<PanditBooking />} />
        <Route path="/poojan-vidhi" element={<PoojanVidhi />} />
        <Route path="/tirth-darshan" element={<TirthDarshan />} />
        <Route path="/pandit-directory" element={<PanditDirectory />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/pandit-register" element={<PanditRegistration />} />






      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
