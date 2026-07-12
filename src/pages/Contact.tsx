import { useState, FormEvent } from 'react';
import {
  Facebook,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Heart,
  Phone,
  Mail,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';
const FACEBOOK_URL = 'https://web.facebook.com/profile.php?id=61591181746141';
const TIKTOK_URL = 'https://tiktok.com/@barokasbakery';

const cakeTypes = [
  'Unicorn Cake',
  'Princess Cake',
  'Superhero Cake',
  'Cartoon Character Cake',
  'Baby Shower Cake',
  'Celebration Cake',
  'Other / Custom Design',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || null,
      cake_type: formData.get('cake_type') as string || null,
      event_date: formData.get('event_date') as string || null,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert(data);

      if (error) throw error;

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again or message us on WhatsApp.');
    }
  };

  return (
    <div className="relative z-10 pt-28">
      {/* Header */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-brand-pink-soft/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-brand-cream-deep/40 blur-3xl" />
        </div>

        <div className="container-warm text-center">
          <p className="section-eyebrow">Let's Talk Cake</p>
          <h1 className="font-display text-4xl text-brand-dark sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-dark/60">
            I'd love to help make your child's celebration unforgettable.
            Send me a message, or chat with me directly on WhatsApp — I usually
            reply within a few hours!
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-8">
        <div className="container-warm">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-6 shadow-warm sm:p-8">
                <h2 className="font-rounded text-xl font-bold text-brand-dark">
                  Send me a message
                </h2>
                <p className="mt-1 text-sm text-brand-dark/60">
                  Fill in the form below and I'll get back to you as soon as possible.
                </p>

                {status === 'success' && (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl bg-green-50 p-4 text-green-700 animate-fade-in-up">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Thank you! Your message has been sent.</p>
                      <p className="text-sm">I'll be in touch very soon. For urgent inquiries, please message me on WhatsApp.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-red-700 animate-fade-in-up">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Oops! Something went wrong.</p>
                      <p className="text-sm">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-dark">
                        Your Name <span className="text-brand-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        className="w-full rounded-2xl border-2 border-brand-cream-deep bg-brand-cream/30 px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 transition-colors focus:border-brand-pink focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-dark">
                        Email <span className="text-brand-pink">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="jane@email.com"
                        className="w-full rounded-2xl border-2 border-brand-cream-deep bg-brand-cream/30 px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 transition-colors focus:border-brand-pink focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-dark">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+27 12 345 6789"
                        className="w-full rounded-2xl border-2 border-brand-cream-deep bg-brand-cream/30 px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 transition-colors focus:border-brand-pink focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="event_date" className="mb-1.5 block text-sm font-semibold text-brand-dark">
                        Celebration Date
                      </label>
                      <input
                        type="date"
                        id="event_date"
                        name="event_date"
                        className="w-full rounded-2xl border-2 border-brand-cream-deep bg-brand-cream/30 px-4 py-3 text-brand-dark transition-colors focus:border-brand-pink focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cake_type" className="mb-1.5 block text-sm font-semibold text-brand-dark">
                      What kind of cake?
                    </label>
                    <select
                      id="cake_type"
                      name="cake_type"
                      defaultValue=""
                      className="w-full rounded-2xl border-2 border-brand-cream-deep bg-brand-cream/30 px-4 py-3 text-brand-dark transition-colors focus:border-brand-pink focus:bg-white focus:outline-none"
                    >
                      <option value="">Select a cake type...</option>
                      {cakeTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-dark">
                      Your Message <span className="text-brand-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your child's dream cake — theme, colors, flavors, number of guests..."
                      className="w-full resize-none rounded-2xl border-2 border-brand-cream-deep bg-brand-cream/30 px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 transition-colors focus:border-brand-pink focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="space-y-5 lg:col-span-2">
              {/* WhatsApp CTA */}
              <div className="rounded-3xl bg-[#25D366] p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-rounded text-lg font-bold">Chat on WhatsApp</h3>
                    <p className="text-sm text-white/80">Fastest way to reach me</p>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[#25D366] transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Start chatting
                </a>
                <a
                  href="tel:0712751229"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white transition-transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  Call 071 275 1229
                </a>
              </div>

              {/* Contact details */}
              <div className="rounded-3xl bg-white p-6 shadow-warm">
                <h3 className="font-rounded text-lg font-bold text-brand-dark">Contact Details</h3>
                <div className="mt-4 space-y-4">

                  {/* Phone / Call */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-brand-pink">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">Calls</p>
                      <a href="tel:0712751229" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">
                        071 275 1229
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F8EF] text-[#25D366]">
                      <WhatsAppIcon className="h-5 w-5" />
                    </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">WhatsApp</p>
                        
                          <a href="https://wa.me/27799979469"
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-brand-dark hover:text-[#25D366] transition-colors"
                        
                        >  +27 79 997 9469
                        </a>
                      </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-brand-pink">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">Email</p>
                      
                        <a href="mailto:barokasbakery@gmail.com"
                        className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors"
                      >
                        barokasbakery@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-brand-pink">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">Location</p>
                      <p className="text-sm font-medium text-brand-dark">Burgersfort, Limpopo</p>
                      <p className="text-xs text-brand-dark/50">Delivery available across Limpopo</p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-brand-pink">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">Operating Hours</p>
                      <div className="text-sm font-medium text-brand-dark">
                        <p>Mon – Fri: 8am – 6pm</p>
                        <p>Sat: 9am – 4pm</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social */}
              <div className="rounded-3xl bg-white p-6 shadow-warm">
                <h3 className="font-rounded text-lg font-bold text-brand-dark">Follow the sweetness</h3>
                <p className="mt-1 text-sm text-brand-dark/60">
                  See behind-the-scenes, new creations, and customer celebrations.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877F2] text-white transition-transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark text-white transition-transform hover:scale-110"
                    aria-label="TikTok"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12">
        <div className="container-warm">
          <div className="relative overflow-hidden rounded-3xl bg-brand-cream-deep p-8 text-center shadow-warm sm:p-12">
            <Heart className="mx-auto h-10 w-10 fill-brand-pink text-brand-pink animate-gentle-bounce" />
            <h2 className="mt-3 font-display text-2xl text-brand-dark sm:text-3xl">
              Find me in Burgersfort
            </h2>
            <p className="mx-auto mt-2 max-w-md text-brand-dark/60">
              I'm based in Burgersfort and deliver across Limpopo. Exact
              address shared upon order confirmation.
            </p>
            <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-warm">
              <MapPin className="h-5 w-5 text-brand-pink" />
              <span className="text-sm font-medium text-brand-dark">Burgersfort, Limpopo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
