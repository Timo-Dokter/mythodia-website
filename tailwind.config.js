const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.js", "./modules/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "mythodia-map": "url(/images/mythodia-map.png)",
      },
      colors: {
        "light-parchment": "#FFFCF2",
        parchment: "#F4D2A2",
        "dark-parchment": "#EAC18B",
      },
      fontFamily: {
        sans: ["url(/fonts/Scala.otf)", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        120: " 30rem",
      },
    },
  },
  plugins: [],
};
