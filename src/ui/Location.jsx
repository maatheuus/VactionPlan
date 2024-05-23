import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

import { useRequests } from "../features/requests/useRequests";

function prepareData(data) {
  const date = data.map((value) => value.location.split(" ")[0]).sort();

  let monthCounts = {};
  date.forEach((entry) => {
    let month = entry;
    if (monthCounts[month]) {
      monthCounts[month]++;
    } else {
      monthCounts[month] = 1;
    }
  });
  const months = Object.keys(monthCounts).map((month) => ({
    month,
    totalRequest: monthCounts[month],
  }));
  return months;
}
const COLORS = ["#000000", "#979797", "#c00000cc", "#35aa039e"];

function Location() {
  const { requests = [] } = useRequests();

  const data = prepareData(requests);

  return (
    <div className="grid grid-cols-1 big:grid-cols-1">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            nameKey="month"
            dataKey="totalRequest"
            data={data}
            innerRadius="60%"
            outerRadius="90%"
            cx="50%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="1.5rem"
            formatter={(value) => ` ${value}`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Location;
