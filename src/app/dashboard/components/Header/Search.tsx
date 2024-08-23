import { FiSearch } from "@/utils/icons";
import { ComponentProps } from "react";

const Search = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <button className="flex size-7 shrink-0 items-center justify-center rounded-full border border-borderwhite bg-semiwhite text-semiblack shadow hover:bg-borderwhite md:hidden">
        <FiSearch size={16} />
      </button>

      <form>
        <div className="relative hidden w-1/2 min-w-[350px] rounded-sm border bg-gray-200 md:block">
          <input
            type="text"
            className="relative w-full py-1 pl-10 pr-3 outline-none"
          />
          <FiSearch className="absolute left-[12px] top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </form>
    </div>
  );
};
export default Search;
