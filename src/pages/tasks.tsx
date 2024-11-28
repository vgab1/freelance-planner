import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../components/dashboardHeader";

export default function Tasks() {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pendente");
  const navigate = useNavigate();

  const handleSave = () => {
    // Simulação de salvar a tarefa
    console.log("Tarefa salva:", { taskName, taskStatus });
    navigate("/dashboard");
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Adicionar Tarefa</h2>
        <div className="mb-4">
          <label
            htmlFor="taskName"
            className="block text-sm font-medium text-gray-700"
          >
            Nome da Tarefa
          </label>
          <input
            id="taskName"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Nome da tarefa"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="taskStatus"
            className="block text-sm font-medium text-gray-700"
          >
            Status da Tarefa
          </label>
          <select
            id="taskStatus"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Salvar Tarefa
        </button>
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
