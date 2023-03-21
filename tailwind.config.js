/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#18181b", // zinc-900
          200: "#27272a", // zinc-800
          300: "#3f3f46", // zinc-700
        },
        secondary: {
          100: "#f1f5f9", // slate-100
          200: "#94a3b8", // slate-400
          300: "#0f172a", // slate-900
        },
        accent: {
          100: "#164e63", // cyan-900
        },
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
