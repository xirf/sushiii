const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base": "#fbf5f3",
        "ancen": "#FA6B2A",
        "tertiary": "#181729",
        "gray": "#96A0B5",
        "orange": "#FE8C00",
      },
      fontFamily: {
        rocko: ['var(--rocko)', ...fontFamily.sans],
        poppins: ['var(--poppins)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}