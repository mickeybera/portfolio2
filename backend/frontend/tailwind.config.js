/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensures dark mode is based on the "dark" class added to html/body
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure all your components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

