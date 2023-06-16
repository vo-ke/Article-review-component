/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      default: ["manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'small': "url('images/drawers.jpg')",
      },
      screens: {
        'lappy': '1040px',
      },
    },
  },
  plugins: [],
}

