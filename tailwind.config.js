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
      },
    },
  },
  plugins: [],
};
