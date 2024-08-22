import Image from "next/image";

type StockItemProps = {
  name: string;
  image: string;
  total_share: number;
  total_return: number;
};
const StockItem = ({
  name,
  image,
  total_share,
  total_return,
}: StockItemProps) => {
  return (
    <div className="w-[calc(25%-30px)] p-2 hover:border">
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
          <div>Apple</div>
        </div>
        <div>Wave</div>
      </div>
      <div className="flex justify-between">
        <div>Total Share</div>
        <div>${total_share}%</div>
      </div>
      <div className="flex justify-between">
        <div>Total Return</div>
        <div>{total_return}% </div>
      </div>
    </div>
  );
};
export default StockItem;
