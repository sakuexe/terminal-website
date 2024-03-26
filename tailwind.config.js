/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    fontFamily: {
      'monospace': ['Roboto Mono'],
      'sans': ['Inconsolata']
    },
    extend: {
      colors: {
        mutedPurple: "#9F86C0",
        mutedOrange: "#e08b40",
        mutedTurqoise: "#34A0A4",
        mutedBlack: "#0a0909",
      },
    },
  },
  plugins: [],
}
