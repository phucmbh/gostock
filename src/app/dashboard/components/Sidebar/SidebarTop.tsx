"use client";
import { ComponentProps, useState } from "react";
import { sidebarTopList } from "./sidebarList";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdArrowDropright } from "@/utils/icons";

const SidebarTop = (props: ComponentProps<"div">) => {
  const [activedTab, setActivedTab] = useState<number[]>([]);
  const handleShowTabs = (tabId: number) => {
    if (activedTab.some((id) => id === tabId))
      return setActivedTab((prev) => prev.filter((id) => id !== tabId));

    return setActivedTab((prev) => [...prev, tabId]);
  };
  return (
    <div {...props}>
      {sidebarTopList.map((item) => (
        <div key={item.id}>
          {item.type === "SINGLE" && (
            <Link
              href={item.path}
              className="text-semiblack hover:bg-borderwhite flex items-center gap-2 p-2 hover:rounded-md"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          )}

          {item.type === "PARENT" && (
            <div>
              <div
                className="hover:bg-borderwhite flex cursor-pointer items-center justify-between p-2 hover:rounded-md"
                onClick={() => handleShowTabs(item.id)}
              >
                <div className="text-semiblack flex items-center gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {activedTab.some((id) => id === item.id) ? (
                  <IoMdArrowDropdown size={20} className="text-semiblack" />
                ) : (
                  <IoMdArrowDropright size={20} className="text-semiblack" />
                )}
              </div>
              {activedTab.some((id) => id === item.id) && (
                <div className="flex flex-col">
                  {item.child?.map((tab) => (
                    <Link
                      href={tab.path}
                      key={tab.title}
                      className="text-semiblack p-2 pl-8 hover:rounded-md hover:bg-borderwhite"
                    >
                      {tab.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default SidebarTop;
