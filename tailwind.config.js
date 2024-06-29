/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                slideIn: 'slideIn 0.5s ease-in-out',
                slideOut: 'slideOut 0.5s ease-in-out'
            },
            keyframes: {
                slideIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-100px)'
                    },
                    '100%':{
                        opacity: '1',
                        transform: 'translateY(5px)'
                    }
                },
                slideOut: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-100px)'
                    }
                }
            }
      },
    },
    plugins: [require("@tailwindcss/forms")],
  }