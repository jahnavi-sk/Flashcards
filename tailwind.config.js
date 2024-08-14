/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0) ',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
      },
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
        blue_ans:'#D3E2F5',
        darkblue_ans:'#919BB5'
        
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