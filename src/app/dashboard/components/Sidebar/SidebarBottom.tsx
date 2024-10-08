import Link from "next/link";
import { ComponentProps } from "react";
import { sidebarBottomList } from "./sidebarList";

const SidebarBottom = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      {sidebarBottomList.map((item) => (
        <MenuItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          path={item.path}
          notification={item.notification}
        />
      ))}
    </div>
  );
};

type MenuItemProps = {
  icon: React.ReactNode;
  path: string;
  title: string;
  notification?: number;
};

function MenuItem({ icon, title, path, notification }: MenuItemProps) {
  return (
    <Link
      href={path}
      className="flex items-center justify-between p-2 text-semiblack hover:rounded-md hover:bg-borderwhite"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </div>
      {notification && (
        <div className="flex size-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-[#ffffff]">
          {notification}
        </div>
      )}
    </Link>
  );
}
export default SidebarBottom;
