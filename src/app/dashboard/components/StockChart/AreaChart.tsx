"use client";
import dayjs from "dayjs";
import { ApexOptions } from "apexcharts";
import { series } from "@/data";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AreaChart = () => {
  const options: ApexOptions = {
    chart: {
      id: "datetime-chart",
      width: "100%",
      height: "auto",

      animations: {
        enabled: true,
        easing: "linear",
      },
      toolbar: {
        show: false,
      },

      foreColor: "#AEB7C0",
    },
    xaxis: {
      type: "datetime",
      tickAmount: 7,
      labels: {
        formatter: function (value: string) {
          const formatedDate = dayjs(value).format("MMM D");
          return formatedDate;
        },
        show: true,
      },
    },
    yaxis: {
      labels: {},
      tickAmount: 6,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#3AB49C"],
    tooltip: {
      x: {
        formatter: function (value: number) {
          return new Date(value).toLocaleString();
        },
      },
    },
  };



  return (
    <div className="text-semiblack">
      <Chart options={options} series={series} type="area" height={400}/>
    </div>
  );
};
export default AreaChart;
