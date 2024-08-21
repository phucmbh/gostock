import { FiSearch } from "@/utils/icons";

const Search = () => {
  return (
    <div>
      <form>
        <div className="w-[400px] relative rounded-sm border bg-gray-200">
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
