/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#0320fc", // Add your custom color here
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
