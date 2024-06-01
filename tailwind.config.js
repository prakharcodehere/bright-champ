/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'customPink': 'linear-gradient(90deg, #ff9a9e 0%, #fecfef 100%)',
        'customBlue': 'linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)',
      },
    },
  },
  plugins: [],
}

