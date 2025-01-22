/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        text: ['Raleway', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
