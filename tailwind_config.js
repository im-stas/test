// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'drug-court': {
          'dark': '#202427',
          'border': '#292e32',
          'blue': '#066DE6',
          'text-gray': '#a7aec1',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

// File: postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}