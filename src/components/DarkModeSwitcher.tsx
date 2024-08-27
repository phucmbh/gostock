"use client";
import { ThemeContext } from "@/context/theme.context";
import { MdOutlineNightlight, MdOutlineLightMode } from "@/utils/icons";
import { LocalStorage } from "@/utils/localStorage";
import clsx from "clsx";
import { ButtonHTMLAttributes, useContext } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeSwitcher = ({ className, ...rest }: ButtonProps) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    LocalStorage.setTheme(newTheme);
  };
  return (
    <button
      className={clsx(
        "flex size-7 shrink-0 items-center justify-center rounded-full border border-borderwhite bg-semiwhite hover:bg-borderwhite",
        className,
      )}
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
