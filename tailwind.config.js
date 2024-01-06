/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#1B1C57',
        skyblue: "#4BE4C9",
        orange: "#F59E0B",
        green: "#10B981",
        fadeblue: "#626687",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
