import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColorGreen: {
          DEFAULT: '#4ccd99',
          hover: '#3fa97f',
        },
        'black-color': 'black',
        'white-color': '#ffffff',
        'main-color': '#4CCD99',
        'color-green-0': '#4ccd99',
        'color-green-1': 'rgba(76, 205, 153, 0.7)',
        'color-green-2': '#3fa97f',
        'color-black-0': 'rgba(0, 0, 0, 0.5)',
        'color-black-1': 'rgba(0, 0, 0, 0)',
        'color-black-2': 'rgba(34, 34, 34, 0.7)',
        'color-black-3': 'rgba(34, 34, 34, 0.3)',
        'color-black-4': 'rgba(150, 150, 150, 0.3)',
        'color-black-5': 'rgb(34, 34, 34)',
        'color-white-0': 'rgba(255, 255, 255)',
        'color-white-1': 'rgb(245, 245, 245)',
        'color-white-2': '#f7f7f7',
        'color-gray-0': '#e3e3e3',
        'color-gray-1': '#999',
        'color-blue-0': '#18a0c6',
        'color-blue-1': '#3b5998',
        'color-blue-2': 'rgba(24, 160, 198, 0.3)',
        'color-yellow-button': '#e9c714',
        'color-red-0': '#dd4c3b',
        'color-footer-1': '#818998',
        'color-line-footer': 'rgba(34, 34, 34, 0.3)',
      },
      cursor: {
        'custom': 'url(/images/iconSvg/3844431_in_magnifier_plus_search_zoom_icon.svg), auto',
      },
      width: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '85px': '85px',
        '20px': '20px',
        '75px': '75px',
        '300px': '300px',

      },
      maxWidth: {
        '300px': '300px',
      },
      height: {
        '1px': '1px',
        '2px': '2px',
        '500px': '500px',
      },
      margin: {
        '5%': '5%',
        '8px': '8px',
        '4px': '4px',
        '20px': '20px',
        '15px': '15px',
        '12px': '12px',
      },
      padding: {
        '15': '15px',
        '5px': '5px',
        '75px': '75px',
        '12px': '12px',
      },
      fontFamily: {
        'banner': ['FontBanner'],
      },
      letterSpacing: {
        '1px': '1px',
      },
      fontSize: {
        '15px': '15px',
        '16px': '16px',
        '22px': '22px',
        '14px': '14px',
      },
      borderRadius: {
        '90px': '90px',
      },
      borderWidth: {
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
      },
      top: {
        '45%': '45%',
        '4px': '4px',
        '6px': '6px',
      },
      gridTemplateColumns: {
        '2-130px': 'repeat(2, 130px)',

        'footer': '200px minmax(900px, 1fr) 100px',
      },
      keyframes: {
        wiggle: {
          'to': {
            transform: 'translateY(-0px)',
            filter: 'blur(0px)',
            opacity: '1',
          }
        },
        checkCode: {
          'to': {
            transform: 'translate(-50%,-50%)',
            filter: 'blur(0px)',
            opacity: '1',
          }
        },
        botWidth: {
          'to': {
            width: '100%'
          }
        }
      },
      animation: {
        'wiggle-1s': 'wiggle 0.5s 0.8s linear 1 forwards',
        'wiggle-1.2s': 'wiggle 0.5s 1s linear 1 forwards',
        'wiggle-1.4s': 'wiggle 0.5s 1.2s linear 1 forwards',
        'wiggle-1.6s': 'wiggle 0.5s 1.4s linear 1 forwards',
        'wiggle-0.6s': 'wiggle 0.2s 0.4s linear 1 forwards',
        'checkCode-1s': 'checkCode 0.5s 0.8s linear 1 forwards',
        'botWidth-1s': 'botWidth 0.3s 0.2s linear 1 forwards',
      },
      animationDelay: {
        '1.2': '1.2s',
        '1.5': '1.5s',
      },
      translate: {
        '!50px': '-50px',

      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
});
export default config;
