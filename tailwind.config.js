/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        darkSlate :'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif']
      },
    },
    screens:{
      xs: '375px',
      sm: '760px',
      md: '1060px',
      lg: '1440px'
    }
  },
  plugins: [],
}

