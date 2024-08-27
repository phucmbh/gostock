import PATH from "@/utils/constant/path";
import Link from "next/link";
import { MdOfflineBolt } from "@/utils/icons";
import footerList from "./footerList";

const Footer = () => {
  return (
    <footer className="border-t border-borderwhite bg-centerwhite pt-10 text-semiblack">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="mt-6 xl:col-span-1 xl:mt-0">
          <Link href={PATH.HOME} className="flex items-center gap-2">
            <MdOfflineBolt size={20} />
            <span className="font-bold">GoStock</span>
          </Link>
          <div className="mt-4 flex flex-col gap-2 xl:gap-0">
            <p>TechnologyPark</p>
            <p>8-14 Marie Curie Street</p>
            <p>08042 Barcelona</p>
          </div>
          <p className="mt-4 font-bold underline">gostock@gmail.com</p>
        </div>
        {footerList.map((el) => (
          <div key={el.title} className="mt-6 xl:col-span-1 xl:mt-0">
            <div className="font-bold">{el.title}</div>
            <div className="mt-4 flex flex-col gap-2">
              {el.navList.map((item, idx) => (
                <Link href={item.path} key={idx}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-t-borderwhite bg-footer text-footer-contrast">
        <div className="py-4 text-center text-sm uppercase">
          @2022 Copyright-gostock
        </div>
      </div>
    </footer>
  );
};
export default Footer;
