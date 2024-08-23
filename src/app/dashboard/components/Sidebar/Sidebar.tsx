import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import TotalInvestment from "./TotalInvestment";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import Logo from "@/components/Logo";
import { IoArrowBack } from "@/utils/icons";
import clsx from "clsx";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLElement>(null);

  // Close sidebar when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      )
        setSidebarOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={clsx(
        "absolute left-0 top-0 z-50 flex h-screen w-72 -translate-x-full flex-col border-r-[1px] border-r-borderwhite bg-white duration-300 ease-linear lg:static lg:translate-x-0",
        sidebarOpen && "translate-x-0",
      )}
    >
      <div className="flex min-h-[75px] justify-between px-5  lg:justify-center items-center">
        <Logo />
        <IoArrowBack
          className="block cursor-pointer text-semiblack lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      <div className="no-scrollbar flex h-full flex-col overflow-y-auto px-5 pb-10">
        <TotalInvestment />
        <SidebarTop className="mt-5 grow" />
        <SidebarBottom className="border-t-[1px] border-t-borderwhite pt-5" />
      </div>
    </aside>
  );
};
export default Sidebar;
