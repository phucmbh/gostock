import clsx from "clsx";
import Image from "next/image";
import { FaArrowDownLong, FaArrowUpLong } from "@/utils/icons";
import SparklineChart from "./SparklineChart";

type StockItemProps = {
  name: string;
  image: string;
  total_share: number;
  total_return: number;
  data: number[];
};
const StockItem = ({
  name,
  image,
  total_share,
  total_return,
  data
}: StockItemProps) => {
  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-5 items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="bg-white"
            />
          </div>
          <div className="font-semibold text-semiblack">{name}</div>
        </div>
        <div className="flex w-16 items-center">
          <SparklineChart data={data} color={total_return < 0 ? 'red': 'green'} />
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="text-semiblack">Total Share</div>
        <div>${total_share}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-semiblack">Total Return</div>
        <div
          className={clsx(
            "flex items-center",
            total_return > 0 ? "text-green-700" : "text-rose-500",
          )}
        >
          <div className="text-sm">{total_return} %</div>
          {total_return > 0 ? (
            <FaArrowUpLong size={12} />
          ) : (
            <FaArrowDownLong size={12} />
          )}
        </div>
      </div>
    </div>
  );
};
export default StockItem;
