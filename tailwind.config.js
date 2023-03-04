/** @type {import('tailwindcss').Config} */

/* eslint-disable import/no-extraneous-dependencies */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const forms = require("@tailwindcss/forms");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#344767",
        secondary: colors.slate[900],
        tertiary: colors.slate[50],
        muted: colors.slate[400],
        cyan: colors.cyan[400],
        info: colors.sky[500],
        success: colors.lime[500],
        error: colors.red[500],
      },
      fontSize: {
        tiny: defaultTheme.fontSize.xs,
        small: defaultTheme.fontSize.sm,
        subtitle: defaultTheme.fontSize.xl,
        title: defaultTheme.fontSize["2xl"],
        caption: defaultTheme.fontSize["4xl"],
      },
      dropShadow: {
        surface: defaultTheme.dropShadow.xl,
      },
      backgroundImage: {
        header: "url('/src/assets/images/header.png')",
      },
    },
  },
  plugins: [forms],
};
