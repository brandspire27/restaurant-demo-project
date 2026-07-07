/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0BE4A',
          dark: '#9C7E1C',
        },
        cream: {
          DEFAULT: '#F8F3EA',
          50: '#FDFBF6',
          100: '#F8F3EA',
          200: '#F1E8D6',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          '2xl': '1280px',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'fade-up': 'fade-up 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
