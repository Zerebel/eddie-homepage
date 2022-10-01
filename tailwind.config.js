/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", defaultTheme.fontFamily.sans],
        poppins: ["Poppins", defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", defaultTheme.fontFamily.sans],
      },
      colors: {
        Gray1: "#333333",
        Gray2: "#4F4F4F",
        Gray3: "#828282",
        Gray4: "#BDBDBD",
        Gray5: "#E0E0E0",
        Gray6: "#F2F2F2",
        Blue: "#2D9CDB",
        Green: "#27AE60",
        Flamingo: "#EB5757",
      },
      boxShadow: {
        CustomShadow: "0px 10px 30px rgba(51, 51, 51, 0.1)",
      },
    },
  },
  plugins: [],
};
