/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat-Arabic', 'sans-serif']
      },
      colors: {
        primary: '#94D401',
      }
    },
  },
  plugins: [],
}

