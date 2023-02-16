/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          1: '#FFFFFF',
          2: '#DBDBFF',
          3: '#56788D',
          DEFAULT: '#DBDBFF',
          dark: {
            1: '#56788D',
            2: '#06283D',
            3: '#00081D',
            DEFAULT: '#06283D'
          }
        },
        'secondary': {
          1: '#56788D',
          2: '#06283D',
          3: '#00081D',
          DEFAULT: '#06283D',
          dark: {
            1: '#56788D',
            2: '#DBDBFF',
            3: '#FEFEFF',
            DEFAULT: '#CBCBFF'
          }
        },
        'accent': {
          'light': '#67D5FF',
          DEFAULT: '#47B5FF',
          'dark': '#1795DF'
        }
      },
    },
  },
  plugins: [],
}