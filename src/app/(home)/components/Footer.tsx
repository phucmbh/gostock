import PATH from "@/utils/constant/path";
import Link from "next/link";
import { MdOfflineBolt } from "@/utils/icons";

const Footer = () => {
  return (
    <footer className="bg-centerwhite text-semiblack pt-10 border-t border-borderwhite">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-5">
        <div className="mt-6 xl:col-span-1 xl:mt-0">
          <Link href={PATH.HOME} className="flex items-center gap-2">
            <MdOfflineBolt size={20} />
            <span className="font-bold">GoStock</span>
          </Link>
          <div className="mt-4 flex flex-col gap-2 xl:gap-0">
            <Link href={PATH.HOME}>TechnologyPark</Link>
            <Link href={PATH.HOME}>8-14 Marie Curie Street</Link>
            <Link href={PATH.HOME}>08042 Barcelona</Link>
          </div>
          <p className="mt-4 font-bold underline">gostock@gmail.com</p>
        </div>
        <div className="mt-6 xl:col-span-1 xl:mt-0">
          <div className="font-bold">Platform</div>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={PATH.HOME}>Analytics</Link>
            <Link href={PATH.HOME}>Planning</Link>
            <Link href={PATH.HOME}>Collaboration</Link>
            <Link href={PATH.HOME}>Data Management</Link>
            <Link href={PATH.HOME}>Integrations</Link>
            <Link href={PATH.HOME}>Security</Link>
          </div>
        </div>
        <div className="mt-6 xl:col-span-1 xl:mt-0">
          <div className="font-bold">Resources</div>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={PATH.HOME}>Customers</Link>
            <Link href={PATH.HOME}>Strategic Finance</Link>
            <Link href={PATH.HOME}>Ebook&Guides</Link>
            <Link href={PATH.HOME}>Webinars&Events</Link>
            <Link href={PATH.HOME}>Podcast&Video</Link>
          </div>
        </div>
        <div className="mt-6 xl:col-span-1 xl:mt-0">
          <div className="font-bold">Solutions</div>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={PATH.HOME}>Financial</Link>
            <Link href={PATH.HOME}>Investors & CEOs</Link>
            <Link href={PATH.HOME}>Revenue Operations</Link>
            <Link href={PATH.HOME}>Sales & Marketing</Link>
            <Link href={PATH.HOME}>Human Resources</Link>
          </div>
        </div>
        <div className="mt-6 xl:col-span-1 xl:mt-0">
          <div className="font-bold">Resources</div>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={PATH.HOME}>Customers</Link>
            <Link href={PATH.HOME}>Strategic Finance</Link>
            <Link href={PATH.HOME}>Ebook&Guides</Link>
            <Link href={PATH.HOME}>Webinars&Events</Link>
            <Link href={PATH.HOME}>Podcast&Video</Link>
            <Link href={PATH.HOME}>Matrics Catalog</Link>
          </div>
        </div>
      </div>

      <div className="bg-footer text-footer-contrast mt-10 border-t border-t-borderwhite">
        <div className="py-4 text-center text-sm uppercase">
          @2022 Copyright-gostock
        </div>
      </div>
    </footer>
  );
};
export default Footer;
