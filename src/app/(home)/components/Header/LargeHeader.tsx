import PATH from "@/utils/constant/path";
import Link from "next/link";
import NavLink from "./NavLink";
import { DarkModeSwitcher } from "@/components";
import { MdOfflineBolt } from "@/utils/icons";
import { ComponentProps } from "react";

const LargeHeader = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="container mx-auto flex items-center justify-between p-5">
        <Link href={PATH.HOME} className="flex items-center gap-2">
          <MdOfflineBolt size={20} />
          <span className="font-bold">GoStock</span>
        </Link>

        <NavLink />

        <div className="flex items-center gap-5">
          <DarkModeSwitcher className="bg-header-contrast text-semiblack" />
          <Link
            href={PATH.LOGIN}
            className="border-b-2 border-header hover:border-b-2 hover:border-header-contrast"
          >
            Login
          </Link>
          <Link
            href={PATH.REGISTER}
            className="border-b-2 border-header  hover:border-b-2 hover:border-header-contrast"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LargeHeader;
