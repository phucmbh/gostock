import { IoNotificationsOutline } from "@/utils/icons";

const DropdownNotification = () => {
  return (
    <div className="relative">
      <IoNotificationsOutline size={22} />
      <div className="absolute top-[1px] right-[2px]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-rose-500"></span>
        </span>
      </div>
    </div>
  );
};
export default DropdownNotification;
