import Image from "next/image";

const HeaderChart = () => {
  return (
    <div className="flex gap-4 items-center ">
      <div className="size-10 shrink-0">
        <Image
          src="https://ik.imagekit.io/zkent266/apple.png"
          alt="Apple"
          width={100}
          height={100}
        />
      </div>
      <div className="grow">
        <div className="flex justify-between text-semiblack">
          <div className="text-lg font-semibold text-semiblack">Apple inc</div>
          <div>
            <span className=" bg-rose-500 text-[#fff] text-xs px-[6px] py-[1px] rounded-full">descrise</span>
            <span className="font-bold"> $150,70</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm uppercase">AAPL</div>
          <div className="text-xs">Last update in 30 day</div>
        </div>
      </div>
    </div>
  );
};
export default HeaderChart;
