/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marqueeLeft: "marqueeLeft 15s linear infinite",
        marqueeRight: "marqueeRight 15s linear infinite",
      },
      keyframes: {
        marqueeLeft: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        marqueeRight: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
}

