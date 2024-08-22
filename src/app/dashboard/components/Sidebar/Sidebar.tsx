import PATH from "@/utils/constant/path";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { MdOfflineBolt, FaArrowUp } from "@/utils/icons";
import TotalInvestment from "./TotalInvestment";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <aside className="dark:border-r-semiblack absolute left-0 top-0 z-50 flex h-screen w-72 flex-col bg-white p-5 lg:static border-r-[1px] border-r-borderwhite">
      <Link
        href={PATH.HOME}
        className="flex items-center gap-2 self-center text-black"
      >
        <MdOfflineBolt size={20} />
        <span className="font-bold">GoStock</span>
      </Link>
      <TotalInvestment className="mt-8" />
      <SidebarTop className="mt-5 grow" />
      <SidebarBottom className="border-t-[1px] border-t-borderwhite pt-5" />
    </aside>
  );
};
export default Sidebar;
