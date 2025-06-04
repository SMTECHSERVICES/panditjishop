export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">🕉️ Panditji Shop</h2>
          <p className="text-sm">
            सभी प्रकार की पूजा सामग्री, थाली, और पंडित सेवा अब एक ही जगह पर। आस्था से जुड़े हर कार्य के लिए हम समर्पित हैं।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">🔗 त्वरित लिंक</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">🏠 होम</a></li>
            <li><a href="/products" className="hover:text-white">🛍️ सामग्री</a></li>
            <li><a href="/booking" className="hover:text-white">📅 पंडित बुकिंग</a></li>
            <li><a href="/contact" className="hover:text-white">📞 संपर्क करें</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">🧰 सेवाएं</h3>
          <ul className="space-y-2 text-sm">
            <li>🎯 पूजा थाली कस्टम</li>
            <li>📖 पूजन विधि और चालीसा</li>
            <li>🛕 तीर्थ दर्शन जानकारी</li>
            <li>🔍 पंडित निर्देशिका</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">📍 संपर्क जानकारी</h3>
          <p className="text-sm">फोन: 09098273259</p>
          <p className="text-sm">ईमेल: info@panditjishop.com</p>
          <p className="text-sm">स्थान: भारत, PAN India</p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Panditji Shop — सर्वाधिकार सुरक्षित
      </div>
    </footer>
  );
}
