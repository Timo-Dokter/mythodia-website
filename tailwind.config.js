const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./modules/**/*.js"],
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
      lineHeight: { normal: "normal" },
      minHeight: {
        120: "30rem",
      },
      spacing: {
        25.5: "6.375rem",
        128: "32rem",
        184: "46rem",
        192: "48rem",
      },
      zIndex: {
        8: "8",
        9: "9",
      },
    },
  },
  plugins: [],
};
