import { Dispatch, SetStateAction } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Search from "./Search";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <header className="sticky top-0 z-40 bg-white flex w-full">
      <div className="flex flex-grow items-center justify-between px-6 py-5 md:px-6 2xl:px-11">
     
          <Search />

          <div className="flex items-center gap-4">
            <DropdownMessage />
            <DropdownNotification />
            <DarkModeSwitcher />
            <div className="text-gray-300">|</div>
            <DropdownUser />
          </div>
    
      </div>
    </header>
  );
};
export default Header;
