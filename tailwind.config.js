/** @type {import('tailwindcss').Config} */
import colors from "./app/theme/colors";

export default {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [import("nativewind/preset")],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
