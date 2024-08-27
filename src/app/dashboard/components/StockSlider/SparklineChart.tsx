import { Sparklines, SparklinesLine } from "react-sparklines";

interface SparklineChartProps {
  data: number[];
  color?: "red" | "green";
}

const SparklineChart = ({ data, color = "green" }: SparklineChartProps) => {
  const colorResult = color === "red" ? "#F43F5E" : "#10b981";
  return (
    <Sparklines data={data}>
      <SparklinesLine color={colorResult} />
    </Sparklines>
  );
};
export default SparklineChart;
