import { StockChart } from "./components/StockChart";
import { StockSlider } from "./components/StockSlider";
import { WatchList } from "./components/WatchList";

const DashboardPage = () => {
  return (
    <div >
      <StockSlider />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-8">
        <StockChart className="col-span-1 lg:col-span-2" />
        <WatchList className="col-span-1" />
      </div>
    </div>
  );
};
export default DashboardPage;
