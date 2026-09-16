/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clive: {
          dark: '#1E1B4B',
          black: '#0F172A',
          purple: '#6B21A8',
          'purple-dark': '#4C1D95',
          magenta: '#C026D3',
          pink: '#EC4899',
          'pink-light': '#FCE7F3',
          gold: '#D97706',
          'gold-light': '#F59E0B',
          cream: '#FAF5FF',
          gray: '#F8FAFC',
          border: '#E2E8F0',
          muted: '#64748B',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
