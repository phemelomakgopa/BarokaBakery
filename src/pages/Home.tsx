import { Link } from 'react-router-dom';
import heroImage from '../data/Assets/CakeImage_vii.webp';
import WhatsAppIcon from '../components/WhatsAppIcon';
import {
  Heart,
  Sparkles,
  Cake,
  Palette,
  Truck,
  CalendarDays,
  Star,
  ArrowRight,
} from 'lucide-react';
import { cakes } from '../data/cakes';

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';

const steps = [
  {
    icon: WhatsAppIcon,
    title: 'Reach Out',
    description: 'Send me a message on WhatsApp with your cake idea, date, and theme.',
  },
  {
    icon: Palette,
    title: 'Design Together',
    description: 'We\'ll chat about flavors, colors, and design details to bring your vision to life.',
  },
  {
    icon: Cake,
    title: 'Baked with Love',
    description: 'I handcraft your cake from scratch using the freshest ingredients.',
  },
  {
    icon: Truck,
    title: 'Delivered & Enjoyed',
    description: 'Your cake arrives safely, ready to make the celebration unforgettable.',
  },
];

const stats = [
  { value: '50+', label: 'Cakes Baked' },
  { value: '5', label: 'Years of Joy' },
  { value: '100%', label: 'Baked with Love' },
];

export default function Home() {
  const featuredCakes = cakes.filter((c) => c.featured).slice(0, 6);

  return (
    <div className="relative z-10">
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-pink-soft/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-brand-cream-deep/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-pink/10 blur-3xl" />
        </div>

        <div className="container-warm">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-brand-pink shadow-warm backdrop-blur-sm animate-fade-in-up">
                <Sparkles className="h-4 w-4" />
                Sweet & Delicious ❤️ South African Home Bakery
              </div>

              <h1 className="mt-6 font-display text-4xl leading-tight text-brand-dark sm:text-5xl lg:text-6xl animate-fade-in-up animation-delay-100">
                Making birthdays
                <span className="block text-brand-pink">sweeter, one cake</span>
                at a time.
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-brand-dark/70 sm:text-lg lg:mx-0 animate-fade-in-up animation-delay-200">
                Custom birthday cakes baked with love and designed to make
                every celebration unforgettable. Every cake tells a story 😊
                let me help tell yours.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start animate-fade-in-up animation-delay-300">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                  <WhatsAppIcon className="h-5 w-5" />
                  Order on WhatsApp
                </a>
                <Link to="/gallery" className="btn-secondary w-full sm:w-auto">
                  View Cake Gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start animate-fade-in-up animation-delay-500">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-display text-2xl text-brand-pink sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-brand-dark/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-brand-pink/20 animate-pulse-soft" />
                <div className="absolute -inset-8 rounded-full border border-brand-pink-soft/20" />

                <div className="relative overflow-hidden rounded-full border-8 border-white shadow-soft-pink-lg">
                  <img
                    src={heroImage}
                    alt="Beautiful custom birthday cake"
                    className="aspect-square w-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -left-2 top-1/4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-warm-lg animate-gentle-bounce">
                  <Heart className="h-5 w-5 fill-brand-pink text-brand-pink" />
                  <span className="text-sm font-semibold text-brand-dark">Made with love</span>
                </div>

                <div className="absolute -right-2 bottom-1/4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-warm-lg animate-gentle-bounce animation-delay-500">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-brand-dark">5-star rated</span>
                </div>

                {/* Decorative scallop */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-brand-pink px-6 py-2 text-sm font-semibold text-white shadow-soft-pink">
                  Custom Designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CAKES */}
      <section className="relative py-20">
        <div className="container-warm">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="section-eyebrow">Recent Creations</p>
            <h2 className="section-title">Cakes that spark joy</h2>
            <p className="mt-4 text-brand-dark/60">
              Every cake is a one-of-a-kind creation, handcrafted to match your
              child's dreams. Here are some recent favorites.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCakes.map((cake, i) => (
              <Link
                to="/gallery"
                key={cake.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-pink-lg"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-pink backdrop-blur-sm">
                    {cake.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-rounded text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-pink">
                    {cake.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-dark/60 line-clamp-2">
                    {cake.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-secondary">
              See All Cakes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-warm" />
        <div className="container-warm">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-eyebrow">Simple & Sweet</p>
            <h2 className="section-title">How ordering works</h2>
            <p className="mt-4 text-brand-dark/60">
              Ordering a custom cake should be as easy as enjoying one. Here's
              how we'll create something magical together.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative rounded-3xl bg-white p-7 shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-pink"
              >
                {/* Step number */}
                <div className="absolute -top-4 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream font-display text-lg text-brand-pink">
                  {i + 1}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cream text-brand-pink transition-colors group-hover:bg-brand-pink group-hover:text-white">
                  <step.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-rounded text-lg font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">
                  {step.description}
                </p>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-6 w-6 text-brand-pink-soft" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="container-warm">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-pink px-6 py-16 text-center shadow-soft-pink-lg sm:px-12 lg:py-20">
            {/* Decorative circles */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-white/10" />

            <div className="relative">
              <Heart className="mx-auto h-12 w-12 fill-white text-white animate-gentle-bounce" />
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
                Ready to celebrate?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/90">
                Let's create a cake that makes your child's birthday truly
                unforgettable. Message me today and let's start designing!
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-pink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  <CalendarDays className="h-5 w-5" />
                  Contact & Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
