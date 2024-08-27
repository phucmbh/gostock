"use client";
import { SidebarContext } from "@/context/sidebar.context";
import { useContext } from "react";
import { IoMdMenu } from "@/utils/icons";
import { IconBaseProps } from "react-icons/lib";

const SidebarToggle = (props: IconBaseProps) => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  return (
    <IoMdMenu
      size={24}
      className="cursor-pointer"
      onClick={() => setSidebarOpen(!sidebarOpen)}
      {...props}
    />
  );
};
export default SidebarToggle;
