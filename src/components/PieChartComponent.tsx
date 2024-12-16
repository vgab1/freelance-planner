import { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function PieChartComponent() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    setData([
      { name: "Web", value: 30 },
      { name: "Mobile", value: 20 },
      { name: "Server", value: 50 },
    ]);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
        >
          {data.map((_entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
