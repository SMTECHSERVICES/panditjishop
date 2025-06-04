import HeroBanner from '../components/HeroBanner'
import SearchBar from '../components/SearchBar'
import CategorySlider from '../components/CategorySlider'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      <HeroBanner />
      <SearchBar />
      <CategorySlider />
    </div>
  )
}
