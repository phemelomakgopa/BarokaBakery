import logoImage from '../data/Assets/Logo.jpeg';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImage}
        alt="Baroka's Bakery image logo"
        className="hidden h-12 w-12 rounded-full object-cover sm:block"
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg sm:text-xl text-brand-pink">
            Baroka's
          </span>
          <span className="font-rounded font-bold text-[10px] sm:text-xs tracking-[0.2em] text-brand-dark uppercase">
            Bakery
          </span>
        </div>
      )}
    </div>
  );
}
