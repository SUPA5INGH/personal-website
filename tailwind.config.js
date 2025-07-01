/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        emerald: '#2ecc71',
        cream: '#fdfbea',
        'pastel-green': '#b7e4c7',
        'dark-green': '#355e3b',
      },
    },
  },
  plugins: [],
};
