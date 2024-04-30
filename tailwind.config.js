/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
      
    extend: {
      fontFamily:{
       'iranSans' : 'iranSans',
       'iranSansLight' : 'iranSans-Light',
       'iranSansUltraLight' : 'iranSans-UltraLight',
       'iranSansMedium' : 'iranSans-Medium',
       'iranSansBold' : 'iranSans-Bold'
      },
      
      container: {
        center:true,
        padding:{
          DEFAULT:'0.625rem'
        }
      },

      colors:{
        'brown-100': '#d75328',
        'brown-200': '#d65125',
        'beige-100': '#faf6f3',
        'beige-200':'#FAFAFA',
        'button':'#332824',
        'red-550': '#ff0000'
      },

      boxShadow:{
        'center-lg': '0px 0px 8px  #adb5bd',
        'center-sm': '0px 0px 10px  #e9ecef',
        'inset-sm': 'inset 2px 5px 10px rgba(0,0,0,0.2)',
        'focus-input':'5px 5px 50px #969696,-5px -5px 50px #ffffff;'
      },

      overFlow:{
        'ellipsis' : 'ellipsis'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

