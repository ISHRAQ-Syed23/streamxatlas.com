/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'system-ui', 'sans-serif'],
      },
      colors: {
        jet: '#000000',
        ghost: '#ffffff',
        slate: '#666666',
      },
    },
  },
  plugins: [],
}
