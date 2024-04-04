import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SelectedBtn from "../../common/selectBtn";

const Graph = () => {
  const data = [
    {
      name: "Jun 01",
      uv: 0o1,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jun 02",
      uv: 5000,
      pv: 2800,
      amt: 2210,
    },
    {
      name: "Jun 03",
      uv: 5000,
      pv: 2800,
      amt: 2290,
    },
    {
      name: "Jun 04",
      uv: 3000,
      pv: 2800,
      amt: 2000,
    },
    {
      name: "Jun 05",
      uv: 4000,
      pv: 2800,
      amt: 2000,
    },
    {
      name: "Jun 06",
      uv: 8000,
      pv: 2800,
      amt: 2000,
    },
    {
      name: "Jun 07",
      uv: 8500,
      pv: 2800,
      amt: 2000,
    },
    {
      name: "Jun 08",
      uv: 9000,
      pv: 2800,
      amt: 2000,
    },
    {
      name: "Jun 09",
      uv: 10000,
      pv: 2800,
      amt: 2000,
    },
    {
      name: "Jun 10",
      uv: 9490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 11",
      uv: 7490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 12",
      uv: 5490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full h-96 bg-whiteBg mt-10 rounded-lg px-6 py-6">
      <div className="flex justify-end mb-8 gap-3">
        <SelectedBtn title="Status" border="border-none" bg="bg-greyBg" />
        <SelectedBtn title="Type" border="border-none" bg="bg-greyBg" />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            bottom: 25,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            // interval={0}
            axisLine={{ stroke: "transparent" }}
          />
          <YAxis axisLine={{ stroke: "transparent" }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#008124"
            strokeWidth="4"
            fill="#C9EAC4"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#FF4C54"
            strokeWidth="4"
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
