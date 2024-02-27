/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Day_9/**/*.{html,js}"],
  theme: {
    extend: {},

    screens:{
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      colors:{
        'Plantation' : '#23424A',
        'Trendy_Pink' : '#87629A',
        'Genoa' : '#136C72',
        'Mine_Shaft' : '#3A3A3A',
        'Scooter' : '#38CFD9',
      }
    }

  },
  plugins: [],
}

