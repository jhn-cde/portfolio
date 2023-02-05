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
          'light': '#DFF6FF',
          'dark': '#009780',
          DEFAULT: '#B8FFEE'
        },
        'primary-dark': {
          'light': '#D7F0EC',
          'dark': '#06283D',
          DEFAULT: '#318C83'
        },
        'secondary': {
          'light': '#D7F0EC',
          DEFAULT: '#06283D',
          'dark': '#318C83'
        },
        'secondary-dark': {
          'light': '#DFF6FF',
          'dark': '#009780',
          DEFAULT: '#B8FFEE'
        },
        'accent': {
          'light': '#D9ECE9',
          'dark': '#378980',
          DEFAULT: '#47B5FF'
        }
      },
    },
  },
  plugins: [],
}
