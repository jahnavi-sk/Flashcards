/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bryndan: ['BryndanWriteBook', 'sans-serif'],
      },
      colors:{
        babyyellow:'#FFFBF2'
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