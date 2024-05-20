// impoe';
const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs':'300px',
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

