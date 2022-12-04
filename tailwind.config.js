/** @type {import('tailwindcss').Config} */

/* eslint-disable import/no-extraneous-dependencies */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: colors.sky[900],
        secondary: colors.slate[700],
        third: colors.slate[400],
        cyan: colors.cyan[400],
      },
      fontSize: {
        tiny: defaultTheme.fontSize.xs,
        small: defaultTheme.fontSize.sm,
        subtitle: defaultTheme.fontSize["2xl"],
        title: defaultTheme.fontSize["3xl"],
        caption: defaultTheme.fontSize["4xl"],
      },
    },
  },
  plugins: [],
};
