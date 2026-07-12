import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, ArrowRight, Filter } from 'lucide-react';
import { cakes, cakeCategories } from '../data/cakes';

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Cakes');

  const filteredCakes =
    activeCategory === 'All Cakes'
      ? cakes
      : cakes.filter((c) => c.category === activeCategory);

  return (
    <div className="relative z-10 pt-28">
      {/* Header */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-pink-soft/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-brand-cream-deep/40 blur-3xl" />
        </div>

        <div className="container-warm text-center">
          <p className="section-eyebrow">Our Cake Gallery</p>
          <h1 className="font-display text-4xl text-brand-dark sm:text-5xl lg:text-6xl">
            A sweet showcase
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-dark/60">
            Browse through some of my favorite cake creations. Each one was
            designed with love for a special celebration. Your cake could be next!
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-brand-cream/80 py-4 backdrop-blur-md">
        <div className="container-warm">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="h-5 w-5 shrink-0 text-brand-pink" />
            {cakeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-pink text-white shadow-soft-pink'
                    : 'bg-white text-brand-dark hover:bg-brand-pink-soft/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12">
        <div className="container-warm">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCakes.map((cake, i) => (
              <div
                key={cake.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-pink-lg animate-fade-in-up"
                style={{ animationDelay: `${(i % 6) * 80}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Hover content */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="font-rounded text-lg font-bold text-white">
                      {cake.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      {cake.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-pink transition-colors hover:bg-brand-cream"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Order similar
                    </a>
                  </div>

                  {/* Category badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-pink backdrop-blur-sm transition-colors group-hover:bg-brand-pink group-hover:text-white">
                    {cake.category}
                  </span>

                  {/* Heart icon */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors group-hover:bg-brand-pink">
                    <Heart className="h-4 w-4 text-brand-pink transition-colors group-hover:fill-white group-hover:text-white" />
                  </div>
                </div>

                {/* Title below image (always visible) */}
                <div className="p-4">
                  <h3 className="font-rounded font-bold text-brand-dark transition-colors group-hover:text-brand-pink">
                    {cake.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredCakes.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-brand-dark/50">No cakes in this category yet — check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container-warm">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 text-center shadow-warm sm:p-12">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cream-deep/50" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-pink-soft/20" />

            <div className="relative">
              <Heart className="mx-auto h-10 w-10 fill-brand-pink text-brand-pink" />
              <h2 className="mt-3 font-display text-2xl text-brand-dark sm:text-3xl">
                Have a cake idea in mind?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-brand-dark/60">
                I love a creative challenge. Send me your idea and let's make
                something deliciously unique together.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn-secondary">
                  Contact Form
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
