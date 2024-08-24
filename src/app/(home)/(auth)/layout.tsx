import { MdOfflineBolt, CryptoPortfolioSvg } from "@/utils/icons";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-semiwhite py-10">
      <div className="mx-auto flex max-w-screen-xl rounded bg-white border border-borderwhite">
        <div className="hidden w-1/2 border-r border-r-borderwhite p-10 text-center md:block lg:p-20">
          <div className="flex w-full items-center justify-center gap-2 self-center text-black">
            <MdOfflineBolt size={35} />
            <span className="text-2xl font-bold">GoStock</span>
          </div>
          <p className="mt-10 text-semiblack">
            Trade on the go. Anywhere, anytime.
          </p>
          <CryptoPortfolioSvg />
        </div>
        <div className="w-full p-10 md:w-1/2 lg:p-20">{children}</div>
      </div>
    </div>
  );
};
export default AuthLayout;
