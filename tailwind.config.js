/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./views/**/*.ejs"],
  content: ["./views/**/*.ejs", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
