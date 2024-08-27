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
        borderblack: "#242424",
        centerwhite: "#FFFFFF",
        black: "#242424",
        semiblack: "#242424",
        link: "#0000EE",
        footer: "#242424",
        "footer-contrast": "#F1F5F9",
        header: "#242424",
        "header-contrast": "#F1F5F9",
        red: "#F1F5F9",
      },
      dark: {
        white: "#24303F",
        semiwhite: "#1A222C",
        borderwhite: "#2E3A47",
        borderblack: "#2E3A47",
        centerwhite: "#1D2A39",
        black: "#F3F3F3",
        semiblack: "#AEB7C0",
        link: "#348ceb",
        footer: "#24303F",
        "footer-contrast": "#AEB7C0",
        header: "#1A222C",
        "header-contrast": "#AEB7C0",
        red: "#F1F5F9",
      },
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
