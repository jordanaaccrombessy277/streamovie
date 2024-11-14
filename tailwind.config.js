/** @type {import('tailwindcss').Config} */
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
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
         'welcomepage':`url('${path.resolve(__dirname, 'src/assets/pictures/flash.jpg')}')`
      }
    },
  },
  plugins: [],
})

