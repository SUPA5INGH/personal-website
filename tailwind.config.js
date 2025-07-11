/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fdfbea',
        'pastel-green': '#b7e4c7',
        'pastel-blue': '#a7d8de',
        'pastel-yellow': '#fff3b0',
        'dark-green': '#386641',
        'sage-100': '#E9F5DB',
        'sage-300': '#CFE1B9',
        'sage-500': '#97A97C',
        'sage-700': '#718355',
        'projects-blue': '#BFDBFE',
        'blog-peach': '#FED7AA',
        'about-lavender': '#E9D5FF',
        'cv-lime': '#D9F99D',
        'moral-yellow': '#FCD34D',
        'skills-rose': '#FCA5A5',
        charcoal: '#1d1d1f',
        coral: '#ff8352',
      },
      boxShadow: {
        elev: '0 4px 24px 0 rgba(0,0,0,0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'translateX(var(--move)) scale(1)' },
          '50%': { transform: 'translateX(var(--move)) scale(1.1)' },
        },
        // Using translateY only keeps tile width stable on mount
        fall: {
          from: { opacity: '0', transform: 'translateY(-10%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.3s ease',
        fall: 'fall 0.4s ease-out both',
        ripple: 'ripple 0.6s ease-out forwards',

        heartbeat: 'heartbeat 1s ease-in-out infinite',
        progress: 'progress 2s linear infinite',
      },
    },
  },
  plugins: [],
};
