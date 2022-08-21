/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors:{
        Rose: {
          Rose: '#fee2e2'
        }   
      }
    }
  },
  plugins: [require('daisyui')]
}
