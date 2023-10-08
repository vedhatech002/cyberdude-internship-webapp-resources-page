/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'inter': ['Inter'],
      },
      colors: {
        'cdn-red': '#F45050',
        'cdn-yellow': '#F9D949',
        'hero-card-color': '#D9D9D9',
      }
    },
  },
  plugins: [],
}

