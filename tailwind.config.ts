import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          primary: '#ffffff',
          secondary: "#f0f0f0",
          accent: "#3498db",
          text: "#333333",
          light: "#666666",
          background: "#f5f5f5",
          border: "#dddddd",
        },
        dark: {
          primary: '#202124',
          secondary: "#34495e",
          accent: "#e74c3c",
          text: "#ecf0f1",
          light: "#bdc3c7",
          background: "#2c3e50",
          border: "#34495e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
