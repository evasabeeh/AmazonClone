/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],         // which files to track or watch (*.file_name - all files with particular names)
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch - this command will generatate boilerplate code that you add to every file for tailwind application