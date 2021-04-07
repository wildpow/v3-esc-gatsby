const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Roboto Slab",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },

    extend: {
      screens: {
        xms: "400px",
        phablet: "550px",
      },
      colors: {
        brandBackground: colors.gray[100],
        brandBlue: colors.blue[800],
        brandRed: colors.red[800],
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        warmGray: colors.warmGray,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
      },
    },
  },
  variants: {},
  plugins: [typography],
};
