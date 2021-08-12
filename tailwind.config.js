module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B35A5',
        },
        secondary: {
          DEFAULT: '#4BC5EF',
        },
        tertiary: {
          DEFAULT: '#F8BE37',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
