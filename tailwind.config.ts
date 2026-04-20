import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030035",
        secondary: "#6610F2",
        accent: "#20C997",
      },
    },
  },
  plugins: [],
} satisfies Config;