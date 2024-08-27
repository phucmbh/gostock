import clsx from "clsx";
import Image from "next/image";

type WatchListType = {
  name: string;
  image: string;
  code: string;
  price: number;
  percent: number;
};

const WatchItem = ({ name, image, code, price, percent }: WatchListType) => {
  return (
    <div className="flex items-center gap-5 p-2">
      <div className="size-8 overflow-hidden rounded-full">
        <Image src={image} alt={name} width={100} height={100} />
      </div>
      <div className="grow">
        <div className="flex justify-between text-semiblack">
          <div className="font-semibold uppercase">{code}</div>
          <div className="font-semibold">${price}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-gray-400">{name}</div>
          <div className={clsx("text-sm text-rose-500", percent > 0 && "text-green-500")}>{percent}%</div>
        </div>
      </div>
    </div>
  );
};
export default WatchItem;
