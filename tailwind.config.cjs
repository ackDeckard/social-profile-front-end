/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(185, 75%, 39%)",
        veryDarkDesaturated: "hsl(229, 23%, 23%)",
        darkGrayish: "hsl(227, 10%, 46%)",
        darkGray: " hsl(0, 0%, 59%)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
