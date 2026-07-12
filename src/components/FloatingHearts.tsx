import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const HeartIcon = ({ size, opacity }: { size: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ opacity }}
    className="text-brand-pink-soft"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="currentColor"
    />
  </svg>
);

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generate = () => {
      const newHearts: Heart[] = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 24,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.25,
      }));
      setHearts(newHearts);
    };

    generate();
    const interval = setInterval(generate, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.left}%`,
            animation: `float-up ${heart.duration}s linear ${heart.delay}s infinite`,
          }}
        >
          <HeartIcon size={heart.size} opacity={heart.opacity} />
        </div>
      ))}
    </div>
  );
}
