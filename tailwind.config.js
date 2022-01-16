const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
        'lato': ['Lato']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'qte': '#14213d',
        'metal': '#565584',
        'silver': '#evebff',
        'alyminium': '#161616',
        'steel': '#424242',
        'black': '#000000',
        'qblue': '#14213d',
        'qellow': '#fca311',
        'qgrey': '#e5e5e5',
        'qgreydark': '#999999',
        'qred': '#a4161a',
        'qorange': '#dc2f02',
        'qgreen': '#76c893',
        'qviolet': '#cbb2fe',
        'qlitegray': '#e0e1dd',
        'qverylitegray': '#fafafa',
        'qveryverylitegray' :'#fdfdfd'
      },
  },
  variants: {
    extend: {
      backgroundColor: ['first'],
      display: ['first']
    },
  },
  plugins: [],
}
