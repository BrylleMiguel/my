/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-green-400',
    'text-red-400',
    'text-white'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}