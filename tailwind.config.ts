import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        royal: "#2563EB",
        skySoft: "#EAF4FF",
        ice: "#F5FAFF",
        paper: "#F7F9FC",
        muted: "#6B7280",
        ink: "#111827",
        gold: "#D4AF37",
        mint: "#4FD1C5"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "Geist",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 37, 69, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
