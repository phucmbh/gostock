import type { Config } from "tailwindcss";

import { createThemes } from "tw-colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        white: "#FFFFFF",
        semiwhite: "#F1F5F9",
        borderwhite: "#e5e7eb",
        black: "#242424",
        semiblack: "#242424",
      },
      dark: {
        white: "#24303F",
        semiwhite: "#1A222C",
        borderwhite: "#2E3A47",
        black: "#F3F3F3",
        semiblack: "#AEB7C0",
      },
    }),
  ],
} satisfies Config;

export default config;
