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
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'translateX(var(--move)) scale(1)' },
          '50%': { transform: 'translateX(var(--move)) scale(1.1)' },
        },
        fall: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        heartbeat: {
          '0%,40%,100%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.2)' },
          '60%': { transform: 'scale(1.2)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%,100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        tilt: {
          '0%,100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(15deg) rotateY(8deg)' },
        },
        'bar-grow': {
          from: { height: '0%' },
          to: { height: '100%' },
        },
        confetti: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        sparkline: {
          from: { 'stroke-dashoffset': 'var(--dash)' },
          to: { 'stroke-dashoffset': '0' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.3s ease',
        fall: 'fall 0.4s ease-out both',
        ripple: 'ripple 0.6s ease-out forwards',
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        typewriter: 'typewriter 2s steps(40, end) forwards',
        blink: 'blink 0.75s step-end infinite',
        tilt: 'tilt 6s ease-in-out infinite',
        'bar-grow': 'bar-grow 1s ease-out forwards',
        confetti: 'confetti 0.7s ease-out forwards',
        sparkline: 'sparkline 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
