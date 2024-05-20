/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily:{
        Eloquia: ['Eloquia', 'sans-serif'],
        Mukta: ['Mukta', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
