import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Cake Gallery' },
  { to: '/contact', label: 'Contact' },
];

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-warm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-warm flex items-center justify-between">
        <Link to="/" className="transition-transform hover:scale-105">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-full px-5 py-2 font-medium transition-all duration-300 ${
                  active
                    ? 'text-brand-pink'
                    : 'text-brand-dark hover:text-brand-pink'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-pink" />
                )}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3 py-2.5 text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full p-2 text-brand-dark transition-colors hover:bg-brand-cream lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-warm mt-3 flex flex-col gap-1 rounded-3xl bg-white/95 p-4 shadow-warm backdrop-blur-md">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-2xl px-5 py-3 font-medium transition-colors ${
                  active
                    ? 'bg-brand-cream text-brand-pink'
                    : 'text-brand-dark hover:bg-brand-cream'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
