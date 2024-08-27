import Popover from "@/components/Popover";
import PATH from "@/utils/constant/path";
import { MdOutlineKeyboardArrowDown } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const DropdownUser = () => {
  return (
    <Popover
      popoverParent={
        <div className="flex cursor-pointer items-center gap-2 border-l-borderwhite lg:border-l lg:pl-4">
          <div className="size-5 shrink-0 overflow-hidden rounded-full">
            <Image
              src="https://ik.imagekit.io/zkent266/google.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="hidden items-center lg:flex">
            <span className="text-sm">Phuc</span>
            <MdOutlineKeyboardArrowDown size={16} />
          </div>
        </div>
      }
    >
      <div className="z-[100] flex flex-col rounded-md border border-borderwhite bg-white text-semiblack">
        <Link href={PATH.LOGIN} className="px-4 py-3 hover:bg-borderwhite">
          Login
        </Link>
        <Link href={PATH.REGISTER} className="px-4 py-3 hover:bg-borderwhite">
          Register
        </Link>
        <Link
          href={PATH.FORGET_PASSWORD}
          className="px-4 py-3 hover:bg-borderwhite"
        >
          Forget password
        </Link>
      </div>
    </Popover>
  );
};
export default DropdownUser;
