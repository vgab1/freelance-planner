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

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex flex-col items-center justify-center mt-3">
        <h1 className="font-title text-5xl font-bold">Freelance Planner</h1>
        <p className="font-text text-lg">
          Ajudar freelancers a organizarem tarefas, projetos, prazos e finanças
          de forma prática e eficiente, tudo em uma única plataforma.
        </p>
      </div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-title font-bold text-blue-600 mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
            onClick={handleAddTaskRedirect}
          >
            <h3 className="font-bold font-text text-xl mb-4">Resumo de Tarefas</h3>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {task.name} - {task.status}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-bold font-text text-xl mb-4">Gráfico Financeiro</h3>
            <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="font-text">Gráfico de Entradas e Saídas</span>
            </div>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-bold font-text text-xl mb-4">Próximos Prazos</h3>
            <ul>
              {upcomingDeadlines.map((deadline, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {deadline.project} - {deadline.deadline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
