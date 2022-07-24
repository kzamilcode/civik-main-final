module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {

 
    fontFamily:{
        "rubik": "'Rubik', sans-serif",
        "work": "'Work Sans', sans-serif"
    },
    extend: {
      backgroundImage: (theme) => ({
        'image-one':
          "url('https://i.ibb.co/5Fqwct8/main-image.png')",

        'image-two':
          "url('https://i.ibb.co/nczdKPc/main-imagetwo.png')",

          'icon-image':
          "url('https://i.ibb.co/S5Wb379/logo-1.png')",

          'icon-image-dark':
          "url('https://i.ibb.co/3vH896C/logo.png')"

      }),
 
 
      boxShadow: {
        '3xl': '-4px 1px 10px rgba(0, 0, 0, 0.4)',
        '2xl' : '0px 0px 80px rgba(0, 0, 0, 0.1)'
       
      },
      colors:{
        'bodyColor': '#111111',
        'nwSoftGray':'#8A8A8A',
        'gold'     : '#FBB957',
        'line'     : '#7AF9AD',
        'nwRoyelBlue' : '#73CEF5',
        'dgradient-left': '#70D4F6',
        'gradient-left':'#9BE997',
        'gradient-right':'#D2CD72',
        'dgradient-right':'#8AA9F9',
        'nGradient-left':'#EEC05F',
        'nGradient-right':'#C2D67D',
        'nblack': '#252525',
        'wvNblack':'#333333',
        'mprogress': '#7AF9AD',
        'nblackTwo' :'#141414',
        'nblackSoft':'#1D1D1D',
        'nsoftgray' : '#D4D4D4',
        'ngray' : '#5E5E5E',
        'light-gray' : '#C3C3C3',
        'nUnderLine' : '#A957FB',
        'nWhite'   : '#FCFCFC',
        'basic-black': '#BABABA' 
     },
     animation :{
      bounce : "bounce 3s linear infinite" 
    },
     keyframes :{ },
     transitionDuration: {
     
      '2000': '2000ms',
    },
      width: {
        // '128': '429px',
      },
      height: {
        // '128': '643.5px',
      },
      inset: {
        // '76px': '76px',
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
