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
          light: '#f8c651',
          DEFAULT: '#F8BE37',
        },
      },
      margin: {
        '-1': '-.25rem',
        '-2': '-.5rem',
        '-3': '-.75rem',
        '-4': '-1rem',
        '-8': '-2rem',
        '-16': '-4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
