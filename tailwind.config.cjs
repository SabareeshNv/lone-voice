/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Alegreya Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Alegreya", ...defaultTheme.fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": false,
            "blockquote p:first-of-type::after": false,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
