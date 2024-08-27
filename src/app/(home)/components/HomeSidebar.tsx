'use client'
import Sidebar from "@/components/Sidebar";
import NavLink from "./Header/NavLink";
import { Fragment, useContext } from "react";
import { SidebarContext } from "@/context/sidebar.context";

const HomeSidebar = () => {
  const { sidebarOpen } = useContext(SidebarContext);
  return (
    <Fragment>
      {sidebarOpen && (
        <Sidebar>
          <NavLink
            className="flex flex-col"
            classNameItem="hover:bg-borderwhite px-5 py-2 rounded text-semiblack"
          />
        </Sidebar>
      )}
    </Fragment>
  );
};
export default HomeSidebar;
