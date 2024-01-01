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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "70ch",
            "blockquote p:first-of-type::before": false,
            "blockquote p:first-of-type::after": false,
          },
        },
        "2xl": {
          css: {
            h1: {
              marginBottom: "0.5em",
              fontSize: "2em",
            },
            h2: {
              marginBottom: "0.5em",
              marginTop: "1.33em",
              fontSize: "1.8em",
            },
            h3: {
              marginBottom: "0.5em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
