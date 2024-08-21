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
    <aside className="absolute left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-r-gray-200 bg-white p-5 lg:static">
      <Link href={PATH.HOME} className="flex items-center gap-2 self-center">
        <MdOfflineBolt size={20} />
        <span className="font-bold">GoStock</span>
      </Link>
      <TotalInvestment className="mt-8" />
      <SidebarTop className="mt-5 grow" />
      <SidebarBottom className="border-t-2 border-t-gray-200 pt-5" />
    </aside>
  );
};
export default Sidebar;
