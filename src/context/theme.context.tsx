"use client";
import { LocalStorage } from "@/utils/localStorage";
import { createContext, SetStateAction, useEffect, useState } from "react";

const darkthemePreference = () => {
  if (typeof window !== "undefined") {
    const theme = LocalStorage.getTheme();
    const isSystemDarkMode = window.matchMedia(
      "prefers-color-schema:dark",
    ).matches;
    if (theme) return theme;
    if (isSystemDarkMode) return "dark";
  }

  return "light";
};

interface ThemeContextInterface {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<string>>;
}

const initialThemeContext: ThemeContextInterface = {
  theme: darkthemePreference(),
  setTheme: () => null,
};

export const ThemeContext = createContext(initialThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(initialThemeContext.theme);
  useEffect(() => {
    if (theme) document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
