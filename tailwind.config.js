/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' based on your preference

  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        darkBackground: "rgba(32, 44, 54, 1)",
      },
      screens: {
        sm: "375px", // Bu yerda siz 375px breakpointni belgilaysiz
      },
    },
  },
  plugins: [],
};
