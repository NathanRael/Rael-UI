import {defaultConfig} from "./src/utils/config";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'primary' : defaultConfig.colors.primary,
          'secondary' : defaultConfig.colors.secondary,
          'danger' : defaultConfig.colors.danger,
      }
    },
  },
  plugins: [],
};
