import DashboardHeader from "../components/dashboardHeader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Financial() {
  const navigate = useNavigate();
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const [financialData, setFinancialData] = useState<any[]>([]);

  useEffect(() => {
    // Simulando dados financeiros
    const fetchFinancialData = async () => {
      const data = [
        { month: "Janeiro", income: 3000, expense: 2000 },
        { month: "Fevereiro", income: 2500, expense: 1800 },
        { month: "Março", income: 3200, expense: 2200 },
      ];
      setFinancialData(data);
    };

    fetchFinancialData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Painel de Controle
        </h2>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="font-bold text-xl mb-4">Resumo Financeiro</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#4caf50" name="Entradas" />
              <Bar dataKey="expense" fill="#f44336" name="Saídas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
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
