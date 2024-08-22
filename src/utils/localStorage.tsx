"use client";
export const LocalStorage = {
  setTheme(newTheme: string) {
    localStorage.setItem("theme", newTheme);
  },
  getTheme() {
    return localStorage.getItem("theme");
  },
};
