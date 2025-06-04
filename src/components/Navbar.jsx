import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'होम', href: '/' },
  { name: 'पूजा सामग्री', href: '/products' },
  { name: 'कार्ट', href: '/cart' },
  { name: 'पंडित बुकिंग', href: '/pandit-booking' },
  { name: 'पूजन विधि / चालीसा', href: '/vidhi-chalisa' },
  { name: 'तीर्थ दर्शन', href: '/tirth-darshan' },
  { name: 'पंडित निर्देशिका', href: '/pandit-directory' },
  { name: 'पंडित जॉब पोर्टल', href: '/job-portal' },
  { name: 'संपर्क करें', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-16 w-auto" />
            <span className="text-xl font-bold text-pink-700">Panditji Shop</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-pink-700 transition font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-pink-700 transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
