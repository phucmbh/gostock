import LargeHeader from "./LargeHeader";
import SmallHeader from "./SmallHeader";

const Header = () => {
  return (
    <header className="bg-header text-header-contrast border-b border-borderblack">
      <LargeHeader className="hidden lg:block" />
      <SmallHeader className="block lg:hidden" />
      
    </header>
  );
};
export default Header;
