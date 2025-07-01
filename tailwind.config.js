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
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'translateX(var(--move)) scale(1)' },
          '50%': { transform: 'translateX(var(--move)) scale(1.1)' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.3s ease',
      },
    },
  },
  plugins: [],
};
