import "./Chart.scss";
import {
  Area,
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "February",
    Total: 2050,
  },
  {
    name: "March",
    Total: 850,
  },
  {
    name: "April",
    Total: 2200,
  },
  {
    name: "May",
    Total: 780,
  },
  {
    name: "Jun",
    Total: 2800,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%" aspect={aspect}>
        <AreaChart
          width="100%"
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#44475a" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
