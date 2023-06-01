/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:'#087ea4',
        gray:'#23272f',
        darkGray:'#1c1f25',
        black:'#16181d',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1240px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        display: ['var(--font-exo)'],
      },
    },
  },
  plugins: [],
};



