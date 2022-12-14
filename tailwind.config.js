/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        babyBlue: "#01B8AA",
        lightBabyBlue: "#30D9CB",
        reallyLightBabyBlue: "#9DF5ED",
        darkBlue: "#003366",
        lightBlue: "#93A7BA",
        corflowerBlue: "#6495ED",
      },
    },
  },
  plugins: [],
};
