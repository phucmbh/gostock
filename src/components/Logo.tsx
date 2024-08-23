import PATH from "@/utils/constant/path";
import Link from "next/link";
import { MdOfflineBolt } from "@/utils/icons";
import { ComponentProps } from "react";

const Logo = (props: ComponentProps<"a">) => {
  return (
    <Link href={PATH.HOME} {...props}>
      <div className="flex items-center gap-2 self-center text-black w-full justify-center">
        <MdOfflineBolt size={20} />
        <span className="font-bold">GoStock</span>
      </div>
    </Link>
  );
};
export default Logo;
