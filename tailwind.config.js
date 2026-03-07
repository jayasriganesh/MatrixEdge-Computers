/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5f5',
        foreground: '#1D1D1F',
        bento: '#F0F0F2',
        primary: '#FF9F1B',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"SF Pro Display"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
      }
    },
  },
  plugins: [],
}
