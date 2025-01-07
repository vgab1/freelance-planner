import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";

export default function Dashboard() {
  const [costs, setCosts] = useState(0);
  const [profitGoal, setProfitGoal] = useState(0);
  const [hoursPerMonth, setHoursPerMonth] = useState(160);
  const [hoursEstimated, setHoursEstimated] = useState(0);
  const [unexpectedRate, setUnexpectedRate] = useState(0);
  const [retainerHours, setRetainerHours] = useState(0);

  const [modalContent, setModalContent] = useState<string | null>(null);

  const calculateHourlyRate = () => {
    return (costs + profitGoal) / hoursPerMonth;
  };

  const calculateProjectPrice = () => {
    const hourlyRate = calculateHourlyRate();
    return hoursEstimated * hourlyRate * (1 + unexpectedRate / 100);
  };

  const calculateRetainerPrice = () => {
    const hourlyRate = calculateHourlyRate();
    return retainerHours * hourlyRate;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <DashboardHeader />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-title font-bold text-gray-800 mb-6">
          Calculadora Freelancer
        </h1>
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-title font-semibold mb-4">
              Cobrança por Hora
            </h2>
            <button
              onClick={() => setModalContent("hourly")}
              className="w-10 h-10 text-blue-500  bg-zinc-300 rounded-full shadow-lg text-lg font-bold"
            >
              ?
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block font-text text-sm font-medium text-gray-700">
                Custos Mensais:
              </label>
              <input
                type="number"
                value={costs}
                onChange={(e) => setCosts(Number(e.target.value))}
                className="w-full p-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-text text-sm font-medium text-gray-700">
                Meta de Lucro:
              </label>
              <input
                type="number"
                value={profitGoal}
                onChange={(e) => setProfitGoal(Number(e.target.value))}
                className="w-full p-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-text text-sm font-medium text-gray-700">
                Horas por Mês:
              </label>
              <input
                type="number"
                value={hoursPerMonth}
                onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                className="w-full p-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <p className="mt-4 font-text text-lg font-semibold">
            Taxa Horária: R$ {calculateHourlyRate().toFixed(2)}
          </p>
        </div>
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-title font-semibold mb-4">
              Cobrança por Projeto
            </h2>
            <button
              onClick={() => setModalContent("project")}
              className="w-10 h-10 text-blue-500  bg-zinc-300 rounded-full shadow-lg text-lg font-bold"
            >
              ?
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block font-text text-sm font-medium text-gray-700">
                Horas Estimadas:
              </label>
              <input
                type="number"
                value={hoursEstimated}
                onChange={(e) => setHoursEstimated(Number(e.target.value))}
                className="w-full p-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-text text-sm font-medium text-gray-700">
                Percentual para Imprevistos (%):
              </label>
              <input
                type="number"
                value={unexpectedRate}
                onChange={(e) => setUnexpectedRate(Number(e.target.value))}
                className="w-full p-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <p className="mt-4 font-text text-lg font-semibold">
            Preço do Projeto: R$ {calculateProjectPrice().toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-title font-semibold mb-4">Retainer</h2>
            <button
              onClick={() => setModalContent("retainer")}
              className="w-10 h-10 text-blue-500  bg-zinc-300 rounded-full shadow-lg text-lg font-bold"
            >
              ?
            </button>
          </div>
          <div>
            <label className="block font-text text-sm font-medium text-gray-700">
              Horas Comprometidas:
            </label>
            <input
              type="number"
              value={retainerHours}
              onChange={(e) => setRetainerHours(Number(e.target.value))}
              className="w-full p-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="mt-4 font-text text-lg font-semibold">
            Preço do Retainer: R$ {calculateRetainerPrice().toFixed(2)}
          </p>
        </div>
        {modalContent && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-0 transform transition-transform duration-300 ease-in-out scale-100">
              <h2 className="text-xl font-title font-semibold mb-4 text-gray-800">
                {modalContent === "hourly" && "Cobrança por Hora"}
                {modalContent === "project" && "Cobrança por Projeto"}
                {modalContent === "retainer" && "Retainer"}
              </h2>
              <p className="font-text text-gray-700 leading-relaxed">
                {modalContent === "hourly" &&
                  "Somar seus custos mensais, definir uma meta de lucro e dividir pelo número de horas que pretende trabalhar por mês."}
                {modalContent === "project" &&
                  "Fórmula: Preç​o do Projeto=(Horas Estimadas×Taxa Horária)×(1+Percentual para Imprevistos)"}
                {modalContent === "retainer" &&
                  "Fórmula: Preç​o do Retainer = Horas Comprometidas × Taxa Horária."}
              </p>
              <button
                onClick={() => setModalContent(null)}
                className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
