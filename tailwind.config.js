/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        // 1. Deep Navy Blue
        navy: {
          DEFAULT: '#0B1F3A',
          dark: '#061529',
          light: '#14315A',
          muted: '#1D4272',
        },
        // 2. Warm Gold / Beige
        gold: {
          DEFAULT: '#C9A063',
          dark: '#A8834A',
          light: '#E3C88F',
          sand: '#F7F2E8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        script: ['var(--font-script)', 'Georgia', 'cursive'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 31, 58, 0.18)',
        card: '0 18px 50px -20px rgba(11, 31, 58, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
