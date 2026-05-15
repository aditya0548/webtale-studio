import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        surface: "#0a0a0a",
        muted: "#111111",
        border: "#1a1a1a",
        silver: "#c0c0c0",
        gold: "#c9a84c",
        "blue-glow": "#3b82f6",
        "purple-glow": "#7c3aed",
      },
    },
  },
  plugins: [],
};
export default config;
