/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}', './dist/**/*.{js,html}'],
  theme: {
    extend: {
      animation: {},
      keyframes: {
        pop: {
          from: {
            transform: 'translateX(100%)',
          },
          '25%': {
            transform: 'translateX(-20%)',
          },
          '50%': {
            transform: 'translateX(10%)',
          },
          '75%': {
            transform: 'translateX(-5%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        slide: {
          from: {
            width: 100,
          },
          to: {
            width: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
