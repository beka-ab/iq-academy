import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ink navy — lifted from the logo's shield and wordmark
        ink: {
          50: "#eef1f7",
          100: "#dbe2ee",
          200: "#aebcd6",
          300: "#7d92ba",
          400: "#4c6494",
          500: "#2c4370",
          600: "#1c2e55",
          700: "#152341",
          800: "#101b33",
          900: "#0a1224",
        },
        // Warm paper background — matches the logo's canvas
        paper: {
          DEFAULT: "#F7F3EA",
          dim: "#EFE8D8",
        },
        // Flame gradient stops, lifted from the logo's torch
        flame: {
          purple: "#6B3FA0",
          violet: "#9B4FC4",
          orange: "#F0812E",
          amber: "#F4A93B",
        },
        // Kept for backward compatibility with existing components
        brand: {
          50: "#eef1f7",
          100: "#dbe2ee",
          200: "#aebcd6",
          300: "#7d92ba",
          400: "#4c6494",
          500: "#2c4370",
          600: "#1c2e55",
          700: "#152341",
          800: "#101b33",
          900: "#0a1224",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "BPG Nino Mtavruli", "sans-serif"],
      },
      backgroundImage: {
        "flame-gradient":
          "linear-gradient(135deg, #6B3FA0 0%, #9B4FC4 35%, #F0812E 75%, #F4A93B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
