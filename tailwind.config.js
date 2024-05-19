/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#161D6F",
        secondaryColor: "#1EE3CF",
        thirdColor: "#0A0E3F",
      },
      screens: {
        sm: "576px",
        md: "769px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        'noor': ['Noor','sans-serif']
      }
    },
  },
  plugins: [],
};
