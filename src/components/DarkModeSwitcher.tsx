"use client";
import { ThemeContext } from "@/context/theme.context";
import { MdOutlineNightlight, MdOutlineLightMode } from "@/utils/icons";
import { LocalStorage } from "@/utils/localStorage";
import { ButtonHTMLAttributes, useContext } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultColor?: "dark" | "light";
}

const DarkModeSwitcher = ({ defaultColor = "light", ...rest }: ButtonProps) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    LocalStorage.setTheme(newTheme);

    const classNameResult =
      defaultColor === "light"
        ? "flex size-7 shrink-0 items-center justify-center rounded-full border border-borderwhite bg-semiwhite shadow hover:bg-borderwhite"
        : "flex size-7 shrink-0 items-center justify-center rounded-full border border-borderwhite bg-semiwhite shadow hover:bg-borderwhite";
  };
  return (
    <button
      className="flex size-7 shrink-0 items-center justify-center rounded-full border border-borderwhite bg-semiwhite shadow hover:bg-borderwhite"
      onClick={handleChangeTheme}
      {...rest}
    >
      {theme === "light" ? (
        <MdOutlineLightMode size={16} />
      ) : (
        <MdOutlineNightlight size={16}></MdOutlineNightlight>
      )}
    </button>
  );
};
export default DarkModeSwitcher;
