import { Button } from "@/components";
import { GoDownload } from "@/utils/icons";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex min-h-[500px] flex-col items-center gap-10 bg-gray-900 py-10 lg:p-20 text-gray-300">
        <div className="text-center text-4xl lg:text-7xl lg:w-3/4 w-full leading-[60px]">
          Easily invest in stocks and crypto in one
          <span className="inline-block bg-gradient-to-r from-[#7B74F0] to-[#A8F7FD] bg-clip-text text-transparent ml-4">
            GoStock platform
          </span>
        </div>
        <div className="w-1/2 text-center text-xl text-gray-400">
          Get all the conveniences of investing in stocks or cryptocurrencies in
          one GoStock platform. Now you can use this app in desktop version.
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button className="cursor-pointer rounded-full border border-gray-50 px-5 py-2">
            How it work
          </Button>
          <Button className="flex cursor-pointer items-center gap-2 rounded-full border bg-gray-50 px-5 py-2 text-header">
            <span className="">Get app now</span>
            <GoDownload size={16} />
          </Button>
        </div>
      </div>
    </main>
  );
}
