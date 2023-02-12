/** @type {import('tailwindcss').Config} */
module.exports = {
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
          'light': '#F0FFFF',
          DEFAULT: '#B8FFEE',
          'dark': '#A8EFDE'
        },
        'primary-dark': {
          'light': '#56788D',
          DEFAULT: '#06283D',
          'dark': '#00081D'
        },
        'secondary': {
          'light': '#56788D',
          DEFAULT: '#06283D',
          'dark': '#00081D'
        },
        'secondary-dark': {
          'light': '#FFFFFF',
          DEFAULT: '#B8FFEE',
          'dark': '#A8EFDE'
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
