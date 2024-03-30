/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'katibeh': ['Katibeh', 'serif'],
        'roboto' : ['Roboto', 'serif'],
        'akshar' :['Akshar', 'sans-serif'],
      // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [require("daisyui")],
}