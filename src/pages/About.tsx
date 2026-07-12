import { Link } from 'react-router-dom';
import {
  Heart,
  Sparkles,
  Cake,
  Users,
  Leaf,
  Award,
  ArrowRight,
  MessageCircle,
  Star,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';

const values = [
  {
    icon: Heart,
    title: 'Baked with Love',
    description: 'Every cake is made by hand with genuine care. I treat each one as if it were for my own child.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'I use only the finest, freshest ingredients. No shortcuts, no preservatives — just real, delicious cake.',
  },
  {
    icon: Sparkles,
    title: 'Creative Designs',
    description: 'From unicorns to superheroes, I love bringing wild ideas to life. Your imagination is the only limit.',
  },
  {
    icon: Users,
    title: 'Family First',
    description: 'I\'m a family-run bakery. When you order from Baroka\'s, you\'re supporting a dream, not a corporation.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'I\'m not happy until you\'re happy. If something isn\'t right, I\'ll make it right — that\'s my promise.',
  },
  {
    icon: Cake,
    title: 'Custom Everything',
    description: 'Flavors, fillings, colors, toppers — everything is tailored to your child\'s perfect day.',
  },
];

const timeline = [
  {
    year: '2018',
    title: 'The First Cake',
    text: 'It all started with a birthday cake for my niece. Word spread, and soon friends and neighbors were asking for their own.',
  },
  {
    year: '2020',
    title: 'Going Online',
    text: 'During lockdown, I started taking orders through WhatsApp. The love and support from my community kept the dream alive.',
  },
  {
    year: '2022',
    title: '500 Cakes & Counting',
    text: 'I hit a milestone — over 500 cakes baked, each one unique. The joy on children\'s faces never gets old.',
  },
  {
    year: 'Today',
    title: 'Baroka\'s Bakery',
    text: 'Now I\'m bringing the bakery online with a proper home. Same love, same care, now easier than ever to order.',
  },
];

export default function About() {
  return (
    <div className="relative z-10 pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-brand-pink-soft/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-cream-deep/40 blur-3xl" />
        </div>

        <div className="container-warm">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="section-eyebrow">Our Story</p>
              <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">
                Hi, I'm Baroka
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-brand-dark/70">
                I'm a home baker from Johannesburg with a passion for making
                birthdays magical. What started as baking a cake for my niece
                has grown into a love affair with fondant, buttercream, and
                the smiles on children's faces.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-dark/60">
                Every cake that leaves my kitchen carries a piece of my heart.
                I believe a birthday cake isn't just dessert — it's the
                centerpiece of a memory your child will carry forever.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="h-5 w-5" />
                  Let's Bake Together
                </a>
                <Link to="/gallery" className="btn-secondary">
                  See My Cakes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-3 rounded-[2rem] border-2 border-dashed border-brand-pink/20" />
                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-soft-pink-lg">
                  <img
                    src="https://images.pexels.com/photos/1858075/pexels-photo-1858075.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Baroka, the baker"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white px-5 py-3 shadow-warm-lg">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-brand-dark">500+ happy families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-warm">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="section-eyebrow">What I Stand For</p>
            <h2 className="section-title">My promise to you</h2>
            <p className="mt-4 text-brand-dark/60">
              These aren't just buzzwords — they're the values I bake into
              every single cake.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group rounded-3xl bg-white p-7 shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-pink animate-fade-in-up"
                style={{ animationDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cream text-brand-pink transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-pink group-hover:text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-rounded text-lg font-bold text-brand-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-warm" />
        <div className="container-warm">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-eyebrow">The Journey</p>
            <h2 className="section-title">From kitchen to celebration</h2>
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-pink-soft/40 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 -translate-x-1/2 sm:left-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-brand-cream bg-brand-pink shadow-soft-pink" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div className="rounded-3xl bg-white p-6 shadow-warm transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-pink">
                      <span className="inline-block rounded-full bg-brand-cream px-3 py-1 font-display text-sm text-brand-pink">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-rounded text-lg font-bold text-brand-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-warm">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-dark px-6 py-14 text-center sm:px-12">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-pink/20" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-brand-pink/10" />

            <div className="relative">
              <Cake className="mx-auto h-12 w-12 text-brand-pink-soft" />
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
                Let's create something sweet
              </h2>
              <p className="mx-auto mt-3 max-w-md text-white/70">
                Your child's dream cake is just a message away. I can't wait to
                hear your idea.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                <MessageCircle className="h-5 w-5" />
                Start Your Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
