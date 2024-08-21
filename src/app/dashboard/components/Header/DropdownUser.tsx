import { MdOutlineKeyboardArrowDown } from "@/utils/icons";

const DropdownUser = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="size-[25px] overflow-hidden rounded-full">
        <img src="https://placehold.co/400" alt="" />
      </div>
      <span>Abram Palamen M</span>
      <MdOutlineKeyboardArrowDown size={16} />
    </div>
  );
};
export default DropdownUser;
