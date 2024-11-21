import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [financialData, setFinancialData] = useState<any>(null);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const tasksData = await getTasks();
      setTasks(tasksData);
      const financialDataResponse = await getFinancialData();
      setFinancialData(financialDataResponse);

      setUpcomingDeadlines([
        { project: "Projeto A", deadline: "2024-11-25" },
        { project: "Projeto B", deadline: "2024-12-01" },
      ]);
    }

    fetchData();
  }, []);

  const handleAddTaskRedirect = () => {
    navigate("/tasks");
  };

  const handleFinancialRedirect = () => {
    navigate("/financial");
  };

  const handleDeadlinesRedirect = () => {
    navigate("/deadlines");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex flex-col items-center justify-center mt-3 px-4 text-center">
        <h1 className="font-title text-3xl sm:text-4xl lg:text-5xl font-bold">
          Freelance Planner
        </h1>
        <p className="font-text text-center text-sm sm:text-base lg:text-lg mt-2 lg:mt-4">
          Ajudar freelancers a organizarem tarefas, projetos, prazos e finanças
          de forma prática e eficiente, tudo em uma única plataforma.
        </p>
      </div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-title font-bold text-blue-600 mb-6">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow">
            <h3 className="text-sm font-bold">Tarefas Pendentes</h3>
            <p className="text-2xl font-bold">
              {tasks.filter((task) => task.status === "Pendente").length}
            </p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow">
            <h3 className="text-sm font-bold">Receita do Mês</h3>
            <p className="text-2xl font-bold">
              R$ {financialData?.income || 0}
            </p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow">
            <h3 className="text-sm font-bold">Saldo Atual</h3>
            <p className="text-2xl font-bold">
              R$ {(financialData?.income || 0) - (financialData?.expenses || 0)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
            onClick={handleAddTaskRedirect}
          >
            <h3 className="font-bold font-text text-xl mb-4">
              Resumo de Tarefas
            </h3>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {task.name} - {task.status}
                </li>
              ))}
              <li>Projeto 1</li>
              <li>Projeto 2</li>
              <li>Projeto 3</li>
            </ul>
          </div>

          <div
            className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
            onClick={handleFinancialRedirect}
          >
            <h3 className="font-bold font-text text-xl mb-4">
              Gráfico Financeiro
            </h3>
            <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="font-text">Gráfico de Entradas e Saídas</span>
            </div>
          </div>

          <div
            className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
            onClick={handleDeadlinesRedirect}
          >
            <h3 className="font-bold font-text text-xl mb-4">
              Próximos Prazos
            </h3>
            <ul>
              {upcomingDeadlines.map((deadline, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {deadline.project} - {deadline.deadline}
                </li>
              ))}
              <li>Criar funções</li>
              <li>Mudar layout</li>
              <li>Adicionar rota</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
