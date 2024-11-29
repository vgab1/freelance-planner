import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader";
import TaskSummary from "../components/TaskSummary";
import FinancialOverview from "../components/FinancialOverview";
import DeadlineOverview from "../components/DeadlineOverview";
import TarefaCard from "../components/TarefaCard";
import TaskManager from "../components/TaskManager";

interface Task {
  id: number;
  name: string;
  status: string;
}

interface Deadline {
  project: string;
  deadline: string;
}

interface FinancialData {
  income: number;
  expenses: number;
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Concluir projeto X", status: "Pendente" },
    { id: 2, name: "Revisar relatório", status: "Concluído" },
  ]);
  const [financialData, setFinancialData] = useState<FinancialData | null>(
    null
  );
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const navigate = useNavigate();

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const fetchedTasks = await mockFetchTasks();
        const fetchedFinancials = await mockFetchFinancialData();
        const fetchedDeadlines = await mockFetchDeadlines();

        setTasks(fetchedTasks);
        setFinancialData(fetchedFinancials);
        setDeadlines(fetchedDeadlines);
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const handleRedirect = (route: string) => navigate(route);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {loading ? (
          <p className="text-center text-gray-500">Carregando dados...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TaskManager
              tasks={tasks}
              onAdd={handleAddTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
            <TaskSummary
              tasks={tasks}
              onClick={() => handleRedirect("/TaskManager")}
            />
            <TarefaCard tasks={tasks} />
            <FinancialOverview
              financialData={financialData}
              onClick={() => handleRedirect("/financial")}
            />
            <DeadlineOverview
              deadlines={deadlines}
              onClick={() => handleRedirect("/deadlines")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

async function mockFetchTasks() {
  return [
    { id: 1, name: "Finalizar projeto A", status: "Pendente" },
    { id: 2, name: "Enviar relatório", status: "Concluído" },
  ];
}

async function mockFetchFinancialData() {
  return { income: 5000, expenses: 2000 };
}

async function mockFetchDeadlines() {
  return [
    { project: "Projeto A", deadline: "2024-12-01" },
    { project: "Projeto B", deadline: "2024-12-10" },
  ];
}
