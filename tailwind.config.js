/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        showBorder: {
          '0%': { 
            borderBottom: '2px solid transparent',
          },
          '100%': { 
            borderBottom: '2px solid #201E43',
          },
        },
        showBorderLight: {
          '0%': { 
            borderBottom: '2px solid transparent',
          },
          '100%': { 
            borderBottom: '2px solid #eeeeee',
          },
        },
        show: {
          '0%': { 
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        scale: {
          '0%': { 
            transform: 'scale(1)',
          },
          '100%': { 
            transform: 'scale(1.03)',
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        showBorder: 'showBorder 0.2s ease-in-out forwards',
        showBorderLight: 'showBorderLight 0.2s ease-in-out forwards',
        show: 'show .5s ease-in-out forwards',
        showDelay: 'show 1s ease-in-out forwards',
        scale: 'scale .1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

