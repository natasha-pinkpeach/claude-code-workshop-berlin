import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0f1a",
        paper: "#faf8fb",
        accent: "#2B8A8A",
        lilac: "#B88BA8",
        blush: "#FFB6D9",
        tealdeep: "#1a5252",
        mandarin: "#FF8C42",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
