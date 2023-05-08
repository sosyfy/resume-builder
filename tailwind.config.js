/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        grey: "#454545",
        black: "#000",
        blue: "#005ba2",
        "gray-5": "#e0e0e0",
      },
      fontFamily: {
        body: "Montserrat",
        "space-grotesk": "'Space Grotesk'",
        inherit: "inherit",
        archivo: "Archivo",
        "spline-sans": "'Spline Sans'",
        lora: "Lora",
        inter: "Inter",
        mulish: "Mulish",
        "arima-madurai": "'Arima Madurai'",
      },
      fontSize: {
        "3xs": "0.63rem",
        xs: "0.75rem",
        "5xs": "0.5rem",
        sm: "0.88rem",
        xl: "1.25rem",
        "5xl": "1.5rem",
        "9xl": "1.75rem",
      },
    },
   
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
