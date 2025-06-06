import heroImg from './images/pooja-thali.jpg'

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={heroImg}
        alt="Pooja Thali"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          आपका आध्यात्मिक बाज़ार
        </h1>
        <p className="text-xl">हर पूजा की सामग्री, एक जगह!</p>
      </div>
    </div>
  )
}
