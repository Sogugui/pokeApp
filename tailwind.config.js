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
    },
  },
  plugins: [],
}
