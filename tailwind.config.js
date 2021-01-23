const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blueGray,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      royalBlue: colors.blue,
      red: colors.red,
      lime: colors.lime,
    },
    borderWidth: {
      DEFAULT: '1vmin',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
