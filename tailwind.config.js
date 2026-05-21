/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        portfolio: {
          bg: '#04040a',
          card: '#0d0d1a',
          teal: '#0ff4c6',
          violet: '#8b5cf6',
          rose: '#f43f5e',
        },
      },
    },
  },
  plugins: [],
};
