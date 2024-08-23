import { Dispatch, SetStateAction } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Search from "./Search";
import { IoMdMenu, MdOfflineBolt } from "@/utils/icons";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-white min-h-[75px]">
      <div className="flex flex-grow items-center px-6 py-5 sm:justify-between md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 text-black md:gap-4 lg:hidden">
          <IoMdMenu
            size={24}
            className="cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <MdOfflineBolt size={24} />
        </div>

        <Search className="ml-2 grow md:grow-0 lg:grow" />

        <div className="flex items-center gap-4 text-semiblack">
          <DropdownMessage />
          <DropdownNotification />
          <DarkModeSwitcher />
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};
export default Header;
