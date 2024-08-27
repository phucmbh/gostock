import PATH from "@/utils/constant/path";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface NavLinkProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameItem?: string;
}

const NavLink = ({
  className = "flex items-center gap-5 ",
  classNameItem = "border-b-2 border-header hover:border-b-2 hover:border-header-contrast",
  ...rest
}: NavLinkProps) => {
  return (
    <div className={className} {...rest}>
      {navigationList.map((item) => (
        <Link key={item.title} href={item.path} className={classNameItem}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const navigationList = [
  { path: PATH.HOME, title: "Home" },
  { path: PATH.HOME, title: "Service" },
  { path: PATH.HOME, title: "Product" },
  { path: PATH.HOME, title: "About us" },
  { path: PATH.DASHBOARD, title: "Dash board" },
];

export default NavLink;
