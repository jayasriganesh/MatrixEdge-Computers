/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Matrix Edge design system
        background: '#0a0a0a',
        foreground: '#ffffff',
        'me-dark':  '#0a0a0a',
        'me-dark2': '#111214',
        'me-slate': '#4a5568',
        'me-white': '#ffffff',
        'me-card':  '#eeeeee',
        accent:     '#2563eb',
        'accent-glow': 'rgba(37,99,235,0.15)',
        // Legacy compat
        bento:   'rgba(255,255,255,0.10)',
        primary: '#2563eb',
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-.03em',
        tight:   '-.02em',
        widest:  '0.1em',
      },
      fontSize: {
        'hero': ['clamp(2.2rem,5vw,3.8rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'section-lg': ['clamp(2rem,4vw,3.375rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-md': ['clamp(1.6rem,3vw,2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
