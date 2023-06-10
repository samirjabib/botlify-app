/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}",
        "./design-system/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        whiteBlue:'#9ccbdb',
        blue:'#087ea4',
        hoverBlue:'#066583',
        hoverBlueLight:'#3998b6',
        gray:'#23272f',
        darkGray:'#1c1f25',
        lightGray:'#737477',
        grayBlack:'#16181d',
        grayLight:'#40414f'
      },
      boxShadow: {
        'outline-blue': '0 0 0 3px #087ea4',
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
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    variants: {
      extend: {
        boxShadow: ['focus'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};



