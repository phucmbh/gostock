import { MdOutlineKeyboardArrowDown } from "@/utils/icons";
import Image from "next/image";

const DropdownUser = () => {
  return (
    <div className="flex items-center gap-2 lg:border-l border-l-borderwhite lg:pl-4">
      <div className="size-5 shrink-0 overflow-hidden rounded-full">
        <Image
          src="https://ik.imagekit.io/zkent266/google.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="hidden items-center lg:flex">
        <span className="text-sm">Abram Palamen</span>
        <MdOutlineKeyboardArrowDown size={16} />
      </div>
    </div>
  );
};
export default DropdownUser;
