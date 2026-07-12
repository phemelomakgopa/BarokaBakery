import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL = 'https://wa.me/27799979469?text=Hi%20Baroka%27s%20Bakery!%20I%27d%20love%20to%20order%20a%20cake.';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-soft-pink-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <WhatsAppIcon className="relative h-6 w-6" />
      <span className="relative hidden overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 group-hover:max-w-[200px] group-hover:pr-2 max-w-0 sm:group-hover:inline">
        Chat with us!
      </span>
    </a>
  );
}
