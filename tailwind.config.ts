import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b7cfff",
          300: "#8aadff",
          400: "#5c85ff",
          500: "#3660fa",
          600: "#2445e0",
          700: "#1d37b3",
          800: "#1c318f",
          900: "#1c2e70",
        },
        accent: {
          500: "#f7b733",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "BPG Nino Mtavruli", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
