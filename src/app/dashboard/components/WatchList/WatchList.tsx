import { ComponentProps } from "react";
import { HiOutlinePlusSm } from "@/utils/icons";
import WatchItem from "./WatchItem";
import stockList from "./stockList";
import clsx from "clsx";

const WatchList = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="h-[500px] w-full rounded bg-white p-4 shadow-sm border border-borderwhite">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-semiblack">My watchlist</div>
          <button className="text-semiblack">
            <HiOutlinePlusSm size={20} />
          </button>
        </div>
        <div className="mt-5">
          {stockList.map((item ,index) => (
            <div key={item.code} className={clsx(index !== 0 && 'border-borderwhite border-t')}>
              <WatchItem
                name={item.name}
                code={item.code}
                image={item.image}
                price={item.price}
                percent={item.percent}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WatchList;
