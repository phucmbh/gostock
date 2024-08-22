import { ComponentProps } from "react";

const StockChart = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="w-full h-[500px] bg-white shadow-sm border border-borderwhite rounded p-4">
        <div>StockChart</div>
      </div>
    </div>
  );
};
export default StockChart;
