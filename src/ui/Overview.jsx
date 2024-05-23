import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useRequests } from "../features/requests/useRequests";
import { format } from "date-fns";
import { Loader } from "lucide-react";

function prepareData(data) {
  const date = data
    .map(
      (value) =>
        format(new Date(value.startDate), "MMMM dd, yyyy").split(" ")[0]
    )
    .sort();

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

function Overview() {
  const { requests, isLoading } = useRequests();

  if (isLoading) return <Loader className="animate-spin" />;

  const data = prepareData(requests);

  return (
    <div className="shadow-lg p-6 h-full col-span-full row-start-3 row-end-6 rounded-lg big:row-start-2 big:row-end-6">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <Legend verticalAlign="bottom" height={36} />
          <Tooltip />
          <XAxis dataKey="month" />
          <YAxis dataKey="totalRequest" />
          <Bar dataKey="totalRequest" fill="#000000c3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Overview;
