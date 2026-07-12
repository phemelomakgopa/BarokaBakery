/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E91E8C',
          'pink-soft': '#F48FB1',
          'pink-light': '#FCE4EC',
          cream: '#FFF0F3',
          'cream-deep': '#FFE3EA',
          dark: '#4A1030',
          'dark-soft': '#6B1A4A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['Pacifico', 'cursive'],
        script: ['Dancing Script', 'cursive'],
        rounded: ['Nunito', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'gentle-bounce': 'gentle-bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
      },
      boxShadow: {
        'soft-pink': '0 10px 40px -10px rgba(233, 30, 140, 0.25)',
        'soft-pink-lg': '0 20px 60px -15px rgba(233, 30, 140, 0.35)',
        'warm': '0 8px 30px -8px rgba(74, 16, 48, 0.15)',
        'warm-lg': '0 15px 50px -10px rgba(74, 16, 48, 0.2)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FFF0F3 0%, #FCE4EC 50%, #FFFFFF 100%)',
        'gradient-pink': 'linear-gradient(135deg, #E91E8C 0%, #F48FB1 100%)',
        'gradient-soft': 'linear-gradient(180deg, #FFF0F3 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};
