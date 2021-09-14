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
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      height: {
        '5xl': '35rem',
        'screen-1/3': '33vh',
        'screen-2/3': '66vh',
      },
      width: {
        'screen-1/3': '33vw',
        'screen-2/3': '66vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
