/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        'teal':'#48C2B6',
        'teal-0': 'rgba(72, 194, 182, 0)',
        'teal-50': 'rgba(72, 194, 182, 0.05)',
        'teal-150': 'rgba(72, 194, 182, 0.15)',
        'teal-100': 'rgba(72, 194, 182, 0.1)',
        'teal-200': 'rgba(72, 194, 182, 0.2)',
        'teal-300': 'rgba(72, 194, 182, 0.3)',
        'teal-400': 'rgba(72, 194, 182, 0.4)',
        'teal-500': 'rgba(72, 194, 182, 0.5)',
        'teal-600': 'rgba(72, 194, 182, 0.6)',
        'teal-700': 'rgba(72, 194, 182, 0.7)',
        'teal-800': 'rgba(72, 194, 182, 0.8)',
        'teal-900': 'rgba(72, 194, 182, 0.9)',
        'orange':'#FEB629',
        'orange-0': 'rgba(255, 183, 41, 0)',
        'orange-50': 'rgba(255, 183, 41, 0.05)',
        'orange-100': 'rgba(255, 183, 41, 0.1)',
        'orange-150': 'rgba(255, 183, 41, 0.15)',
        'orange-200': 'rgba(255, 183, 41, 0.2)',
        'orange-300': 'rgba(255, 183, 41, 0.3)',
        'orange-400': 'rgba(255, 183, 41, 0.4)',
        'orange-500': 'rgba(255, 183, 41, 0.5)',
        'orange-600': 'rgba(255, 183, 41, 0.6)',
        'orange-700': 'rgba(255, 183, 41, 0.7)',
        'orange-800': 'rgba(255, 183, 41, 0.8)',
        'orange-900': 'rgba(255, 183, 41, 0.9)',
        'green':'#A2F063',
        'green-0': 'rgba(162, 240, 99, 0)',
        'green-50': 'rgba(162, 240, 99, 0.05)',
        'green-100': 'rgba(162, 240, 99, 0.1)',
        'green-150': 'rgba(162, 240, 99, 0.15)',
        'green-200': 'rgba(162, 240, 99, 0.2)',
        'green-300': 'rgba(162, 240, 99, 0.3)',
        'green-400': 'rgba(162, 240, 99, 0.4)',
        'green-500': 'rgba(162, 240, 99, 0.5)',
        'green-600': 'rgba(162, 240, 99, 0.6)',
        'green-700': 'rgba(162, 240, 99, 0.7)',
        'green-800': 'rgba(162, 240, 99, 0.8)',
        'green-900': 'rgba(162, 240, 99, 0.9)',
        'red':'#FE5B71',
        'red-0': 'rgba(254, 91, 113, 0)',
        'red-50': 'rgba(254, 91, 113, 0.05)',
        'red-100': 'rgba(254, 91, 113, 0.1)',
        'red-200': 'rgba(254, 91, 113, 0.2)',
        'red-300': 'rgba(254, 91, 113, 0.3)',
        'red-400': 'rgba(254, 91, 113, 0.4)',
        'red-500': 'rgba(254, 91, 113, 0.5)',
        'red-600': 'rgba(254, 91, 113, 0.6)',
        'red-700': 'rgba(254, 91, 113, 0.7)',
        'red-800': 'rgba(254, 91, 113, 0.8)',
        'red-900': 'rgba(254, 91, 113, 0.9)',
        
        'orangeLight':'#FFC65C',
        'orangeLight-0':'rgba(255, 198, 92, 0)',
        'orangeLight-50':'rgba(255, 198, 92, 0.05)',
        'orangeLight-100':'rgba(255, 198, 92, 0.1)',
        'orangeLight-150':'rgba(255, 198, 92, 0.15)',
        'orangeLight-200':'rgba(255, 198, 92, 0.2)',
        'orangeLight-300':'rgba(255, 198, 92, 0.3)',
        'orangeLight-400':'rgba(255, 198, 92, 0.4)',
        'orangeLight-500':'rgba(255, 198, 92, 0.5)',
        'orangeLight-600':'rgba(255, 198, 92, 0.6)',
        'orangeLight-700':'rgba(255, 198, 92, 0.7)',
        'orangeLight-800':'rgba(255, 198, 92, 0.8)',
        'orangeLight-900':'rgba(255, 198, 92, 0.9)',


        tealLight:'#DAF3F0',
        redLight:'#FFDEE3',
        blue:'#49AEE9',
        'blue-0': 'rgba(73, 174, 233, 0)',
        'blue-50': 'rgba(73, 174, 233, 0.05)',
        'blue-100': 'rgba(73, 174, 233, 0.1)',
        'blue-150': 'rgba(73, 174, 233, 0.15)',
        'blue-200': 'rgba(73, 174, 233, 0.2)',
        'blue-300': 'rgba(73, 174, 233, 0.3)',
        'blue-400': 'rgba(73, 174, 233, 0.4)',
        'blue-500': 'rgba(73, 174, 233, 0.5)',
        'blue-600': 'rgba(73, 174, 233, 0.6)',
        'blue-700': 'rgba(73, 174, 233, 0.7)',
        'blue-800': 'rgba(73, 174, 233, 0.8)',
        'blue-900': 'rgba(73, 174, 233, 0.9)',
        greenLight:'#ECFCE0'
      },
      width:{
        '80p' :'80%'
      },
      

    },
  },
  plugins: [],
}
