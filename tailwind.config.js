/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        skin: {
          base1: 'var(--primary-color)', 
          base2: 'var(--card-Color)',
          base3: 'var(--card-ColorText)',
          base4: 'var(--card-backColor)',
          base5: 'var(--stars)'
        }
      },
      width: {
        '10p' : '10%',
        '90p' : '90%',
        '120' : '32rem'
      },
      fontSize: {
        '8xl' : '8rem',
        '22xl' : '22rem',
        '32xl' : '32rem'
      },
      height: {
        '15' : '15vh',
        '85' : '85vh',
        '200' : '200px'
      },
      rotate: {
        '360' : '-90deg'
      },
      fontFamily: {
        'teko' : "Teko"
      }
    },
  },
  plugins: [],
}

