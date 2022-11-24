/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      height:{
        120: "35rem",
        600: '36.5rem'
      },
      colors:{
        bwg : '#F0F2F5',
        secondary: '#E4E6E9',
        dark: '#212529'
      },
      width: {
        card: '100rem',
        800: '49rem',
        box : '42rem'
      }
    },
  },
  plugins: [],
}
