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
              marginTop: "1.1em",
              marginBottom: "0.45em",
              fontSize: "2.1em",
            },
            h2: {
              marginTop: "1.1em",
              marginBottom: "0.45em",
              fontSize: "1.9em",
            },
            h3: {
              marginTop: "1.1em",
              marginBottom: "0.45em",
              fontSize: "1.7em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
