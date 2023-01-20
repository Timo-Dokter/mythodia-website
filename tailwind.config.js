const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.js", "./modules/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "mythodia-map": "url(/images/mythodia-map.jpeg)",
        "the-inner-planes-map": "url(/images/the-inner-planes.png)",
      },
      colors: {
        "light-parchment": "#FFFCF2",
        parchment: "#F4D2A2",
        "dark-parchment": "#EAC18B",
        "light-brown": "#8C6747",
      },
      minHeight: {
        120: " 30rem",
      },
      spacing: {
        128: "32rem",
        192: "48rem",
      },
    },
  },
  plugins: [],
};
