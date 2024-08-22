"use client";

import { useState } from "react";
import stockList from "./stockList";
import StockItem from "./StockItem";
import { motion } from "framer-motion";

import { IoIosArrowForward, IoIosArrowBack } from "@/utils/icons";

const StockSlider = () => {
  const [stockArray, setStockArray] = useState<[number, number]>([0, 4]);

  const stockDisplay = stockList;

  const handleClickPrevious = () => {
    if (stockArray[0] > 0) setStockArray((prev) => [prev[0] - 1, prev[1] - 1]);
  };

  const handleClickNext = () => {
    if (stockArray[1] < stockList.length)
      setStockArray((prev) => [prev[0] + 1, prev[1] + 1]);
  };
  return (
    <div>
      <div className="mb-5 text-semiblack text-xl">My Protofilo</div>
      <div className="relative rounded bg-white text-black shadow-sm border border-borderwhite">
        {stockArray[0] !== 0 && (
          <button
            className="absolute left-0 right-0 top-1/2 z-20 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-sm"
            onClick={handleClickPrevious}
          >
            <IoIosArrowBack />
          </button>
        )}

        <motion.div
          drag="x"
          className="flex w-full overflow-x-auto p-4"
        >
          {stockDisplay.map((item) => (
            <StockItem
              key={item.name}
              name={item.name}
              image={item.image}
              total_return={item.total_return}
              total_share={item.total_share}
            />
          ))}
        </motion.div>

        {stockArray[1] !== stockList.length && (
          <button
            className="absolute right-0 top-1/2 z-20 flex size-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border bg-white shadow-sm"
            onClick={handleClickNext}
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};
export default StockSlider;
