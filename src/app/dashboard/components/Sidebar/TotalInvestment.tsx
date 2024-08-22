import { FaArrowUp } from "@/utils/icons";
import { ComponentProps } from "react";
const TotalInvestment = (props: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="bg-semiblack flex justify-between rounded-xl p-4 text-white">
        <div>
          <div className="mb-1 text-sm text-white/50">Total Investment</div>
          <div>$5390.90</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-1 text-xs text-green-600">
            <span>+10,30% </span>
            <FaArrowUp className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TotalInvestment;
