import PATH from "@/utils/constant/path";
import Link from "next/link";
import { MdOfflineBolt } from "@/utils/icons";
import { DarkModeSwitcher } from "@/components";
import Sidebar from "@/components/Sidebar";
import { useContext } from "react";
import { SidebarContext } from "@/context/sidebar.context";

const Header = () => {
  const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext)
  return (
    <header>
      <nav className="bg-semiblack text-semiwhite">
        <div className="text-foreground container mx-auto flex items-center justify-between p-5">
          <Link href={PATH.HOME} className="flex items-center gap-2">
            <MdOfflineBolt size={20} />
            <span className="font-bold">GoStock</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href={PATH.HOME}>Home</Link>
            <Link href={PATH.HOME}>Service</Link>
            <Link href={PATH.HOME}>Product</Link>
            <Link href={PATH.HOME}>About us</Link>
            <Link href={PATH.DASHBOARD}>Dash board</Link>
          </div>

          <div className="flex items-center gap-5">
            <DarkModeSwitcher/>
            <Link href={PATH.LOGIN}>Login</Link>
            <Link href={PATH.REGISTER} className="b rounded-full px-4 py-2">
              Sign up
            </Link>
          </div>
        </div>

      </nav>
      <Sidebar>
        <div>Test</div>
      </Sidebar>

    </header>
  );
};
export default Header;
