import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Hem', path: '/' },
    { name: 'Meny', path: '/meny' },
    { name: 'Sportbar', path: '/event' },
    { name: 'Boka Bord', path: '/boka-bord' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-villa-darker/95 backdrop-blur-sm border-b border-villa-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/villa-logo.png"
              alt="Villa Skeppsbron"
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              link.name === 'Boka Bord' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-villa-gold text-villa-darker px-5 py-2.5 text-sm font-semibold hover:bg-villa-gold/90 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-semibold tracking-wide transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-villa-gold'
                      : 'text-villa-cream/90 hover:text-villa-gold'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:026-102000"
              className="flex items-center space-x-2 text-villa-cream/90 hover:text-villa-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">026-102000</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-villa-cream"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-villa-darker border-t border-villa-gold/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              link.name === 'Boka Bord' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-3 bg-villa-gold text-villa-darker px-5 py-3 text-center font-semibold"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive(link.path)
                      ? 'text-villa-gold'
                      : 'text-villa-cream/90'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-villa-gold/20">
              <a
                href="tel:026-102000"
                className="flex items-center space-x-2 text-villa-cream/90 py-2"
              >
                <Phone className="w-4 h-4" />
                <span>026-102000</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
