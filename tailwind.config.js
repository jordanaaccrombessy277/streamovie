/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple-shade':"#6100C2",
        'dark-shade':"#191817",
        'login':"#6100C2",
      },
      backgroundImage:{
         'welcomepage':"url('src/assets/pictures/flash.jpg')"
      }
    },
  },
  plugins: [],
}

