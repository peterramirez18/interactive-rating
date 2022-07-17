/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overpass', 'sans-serif', ]
      },
      colors: {
        'orange': '#fb7413',
        'light-grey': '#959eac',
        'medium-grey': '#7c8798',
        'dark-blue': '#252d37',
        'very-dark-blue': '#121417'
      }
    },
  },
  plugins: [],
}