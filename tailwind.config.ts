const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      white: '#f0ece5',
      black: '#111111',
      primary: '#FF9BD2',
      secondary: '#f9f9e1',
      accent: '#89ccd7',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
