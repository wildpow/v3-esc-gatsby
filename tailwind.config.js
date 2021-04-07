const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
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
