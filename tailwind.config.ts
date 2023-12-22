import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          1: '#FFFFFF',
          2: '#DFF6FF',
          3: '#92B4EC',
          DEFAULT: '#DFF6FF',
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
            1: '#92B4EC',
            2: '#DFF6FF',
            3: '#FEFEFF',
            DEFAULT: '#DFF6FF'
          }
        },
        'accent': {
          'light': '#77E5FF',
          DEFAULT: '#47B5FF',
          'dark': '#0068DF'
        }
      },
    },
  },
  plugins: [],
}
export default config
