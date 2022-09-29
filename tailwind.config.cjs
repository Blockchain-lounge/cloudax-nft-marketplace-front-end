/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-1": "#16162D",
        "bg-2": "#1F1F35",
        "txt-1": "#399CE1",
        "txt-2": "#A5A5B2",
      },
    },
  },
  plugins: [],
};
