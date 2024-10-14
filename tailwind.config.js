/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-viollet": "#2e3192",
        "custom-blue": "#74a9F0",
        "custom-black": "#090a29",
        "custom-white": "#f6faff",
      },
    },
  },
  plugins: [],
};
