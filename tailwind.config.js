/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        rotatey : 'rotateY(180deg)',
      },
      fontFamily: {
        bryndan: ['BryndanWriteBook', 'sans-serif'],
      },
      colors:{
        babyyellow:'#FFFBF2',
        pinkbrown:'#D5B4BB',
        darkrose:'#CD8495'
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      borderColor: ['hover'], // Explicitly enabling hover variant for borderColor
    },
  }
}