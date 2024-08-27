import { ComponentProps } from "react";
import HeaderChart from "./HeaderChart";
import AreaChart from "./AreaChart";

const StockChart = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className=" flex h-[500px] flex-col w-full rounded border border-borderwhite bg-white p-5 shadow-sm text-semiblack">
        <HeaderChart />
        <AreaChart />
      </div>
    </div>
  );
};
export default StockChart;
