/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerBackgroundColor: '#A1A483',
      },
      backgroundImage:{
        newArrivalBackground: "url('../src/assets/images/new-arrival-background.png')",
      },
    },
  },
  plugins: [],
}