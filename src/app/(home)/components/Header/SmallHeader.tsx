import { DarkModeSwitcher } from "@/components";
import Link from "next/link";
import { MdOfflineBolt, IoMdLogIn } from "@/utils/icons";
import PATH from "@/utils/constant/path";
import { ComponentProps } from "react";
import SidebarToggle from "./SidebarToggle";

const SmallHeader = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="relative hidden justify-between p-3 sm:flex">
        <div className="flex items-center gap-2 md:gap-4 lg:hidden">
          <SidebarToggle />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-2">
          <MdOfflineBolt size={24} />
          <div>GoStock</div>
        </div>
        <div className="flex items-center gap-3">
          <DarkModeSwitcher className="bg-header-contrast text-semiblack" />
          <Link href={PATH.LOGIN}>
            <IoMdLogIn size={25} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between p-3 sm:hidden">
        <div className="flex items-center gap-2 md:gap-4 lg:hidden">
          <SidebarToggle />
          <MdOfflineBolt size={24} />
        </div>
        <div className="flex items-center gap-2">
          <DarkModeSwitcher className="bg-header-contrast text-semiblack hover:text-semiblack" />
          <Link href={PATH.LOGIN}>
            <IoMdLogIn size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SmallHeader;
