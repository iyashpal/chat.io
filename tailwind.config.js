import {fontFamily} from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./components/**/*.{js,vue,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
