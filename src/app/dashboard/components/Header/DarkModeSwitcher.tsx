"use client";
import { ThemeContext } from "@/context/theme.context";
import { MdOutlineNightlight, MdOutlineLightMode } from "@/utils/icons";
import { LocalStorage } from "@/utils/localStorage";
import { useContext } from "react";

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    
    const newTheme = theme ==='light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.setAttribute('data-theme', newTheme)
    LocalStorage.setTheme(newTheme)
  }
  return (
    <button className="flex size-7 items-center justify-center rounded-full border border-borderwhite bg-semiwhite shadow hover:bg-borderwhite shrink-0" onClick={handleChangeTheme}>
      {theme === "light" ? (
        <MdOutlineLightMode size={16} />
      ) : (
        <MdOutlineNightlight size={16}></MdOutlineNightlight>
      )}
    </button>
  );
};
export default DarkModeSwitcher;
