import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LineChartComponent() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    setData([
      { name: "Jan", value: 4000 },
      { name: "Feb", value: 3000 },
      { name: "Mar", value: 2000 },
      { name: "Apr", value: 5000 },
    ]);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          content={({ payload }) => {
            if (!payload || payload.length === 0) return null;
            const { name, value } = payload[0] as {
              name: string;
              value: number;
            };
            return (
              <div className="custom-tooltip">
                <p>{name}</p>
                <p>
                  {value !== undefined
                    ? formatCurrency(value)
                    : "Valor não disponível"}
                </p>
              </div>
            );
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
