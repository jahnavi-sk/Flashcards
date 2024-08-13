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
        darkrose:'#CD8495',
        blue_1:'#ADB8D0',
        blue_2:'#B9CBE1',
        blue_btn:'#DDD7E5',
        pinkans:'#BE6C7F',
        lightpinkans:'#FFB9C9',
        darkblueans:'#6397D7',
        
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