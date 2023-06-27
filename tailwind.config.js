/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "P_Color_Light_Cyan": 'hsl(193, 38%, 86%)',
        "P_Color_Neon_Green": 'hsl(150, 100%, 66%)',
        "N_Color_Grayish_Blue": 'hsl(217, 19%, 38%)',
        "N_Color_Dark_Grayish_Blue": 'hsl(217, 19%, 24%)',
        "N_Color_Dark_Blue": 'hsl(218, 23%, 16%)',
      },

      fontSize: {
        "quote": '1.75rem',
      },

      boxShadow: {
        'inside': '0 0 2em 0 hsl(150, 100%, 66%)',
      },

      letterSpacing: {
        'advice_Num': "0.2em", 
      },

    },
  },
  plugins: [],
}

