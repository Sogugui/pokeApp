/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'planta': '#6ab429',
        'fuego': '#cd5241',
        'agua': '#8bc5cd',
        'piedra': '#b4b49c',
        'electrico': '#f6bd20',
        'lucha': '#73a4a4',
        'normal': '#7b5a4a'
      },
      backgroundImage: {
        'pc': "url('https://images.hdqwalls.com/download/pikachu-pokeball-xc-2560x1600.jpg')",
        'movil': "url('https://i.pinimg.com/564x/bd/80/d2/bd80d286df3ae415c50e20fe61b86373.jpg')"
        
      }
    },
  },
  plugins: [],
}
