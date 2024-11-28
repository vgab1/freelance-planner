import DashboardHeader from "../components/dashboardHeader";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 2000, expenses: 9800 },
  { name: "Apr", income: 2780, expenses: 3908 },
];

export default function Financial() {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">Gráfico Financeiro</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#8884d8" />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button
        onClick={handleBackToDashboard}
        className="mb-6 px-4 py-2 font-button bg-gray-600 text-white rounded-lg"
      >
        Voltar
      </button>
    </div>
  );
}
