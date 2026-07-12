import { Link } from 'react-router-dom';
import { Instagram, Music2, MessageCircle, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';
const INSTAGRAM_URL = 'https://instagram.com/barokasbakery';
const TIKTOK_URL = 'https://tiktok.com/@barokasbakery';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 bg-brand-dark text-white">
      {/* Decorative wave top */}
      <div className="absolute -top-1 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,0 L0,0 Z"
            fill="#FFF0F3"
          />
          <path
            d="M0,35 C240,65 480,5 720,25 C960,45 1200,15 1440,35 L1440,0 L0,0 Z"
            fill="#4A1030"
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="container-warm relative pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-white/5 p-5 backdrop-blur-sm">
              <Logo />
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Sweet & Delicious. Custom birthday cakes baked with love for
                every celebration.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-rounded text-sm font-bold uppercase tracking-widest text-brand-pink-soft">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/gallery', label: 'Cake Gallery' },
                { to: '/contact', label: 'Contact & Order' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 transition-colors hover:text-brand-pink-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 font-rounded text-sm font-bold uppercase tracking-widest text-brand-pink-soft">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink-soft" />
                <span>Polokwane, South Africa</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink-soft" />
                <div>
                  <p>Mon – Fri: 8am – 5pm</p>
                  <p>Sat: 9am – 1pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="mb-4 font-rounded text-sm font-bold uppercase tracking-widest text-brand-pink-soft">
              Let's Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] transition-transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5 text-brand-dark" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 w-full text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Baroka's Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed by <a href="https://www.webinnovationnexus.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Web Innovation Nexus
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
