/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["dark"], // Esto asegura que las variantes de sombra funcionen en modo oscuro
    },
  },
  plugins: [],
};
