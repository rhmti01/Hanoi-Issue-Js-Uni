/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sx': '290px',
        'ss': '501px',
      },
      fontFamily: {
        lexend: ['Lexend']
      },
    }
  },
  plugins: [ ],
}