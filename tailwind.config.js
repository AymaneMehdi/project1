/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), flowbite.plugin()],
};
