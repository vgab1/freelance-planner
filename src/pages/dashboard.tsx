import DashboardHeader from "../components/dashboardHeader";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import LineChartComponent from "../components/LineChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import Sidebar from "../components/Sidebar";
import TaskListComponent from "../components/TaskListComponent";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <DashboardHeader />
      <Sidebar />
      <div className="container mx-auto px-6 py-10">
        <PageHeader
          title="Dashboard"
          subtitle="Resumo das principais métricas"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Tarefas Pendentes">
            <p className="text-4xl font-text font-bold text-blue-500 animate-pulse">
              12
            </p>
          </Card>
          <Card title="Projetos Concluídos">
            <p className="text-4xl font-text font-bold text-green-500">8</p>
          </Card>
          <Card title="Despesas">
            <p className="text-4xl font-text font-bold text-green-500">
              R$ 8.000
            </p>
          </Card>
          <Card title="Tarefas">
            <TaskListComponent />
          </Card>
          <Card title="Categorias">
            <PieChartComponent />
          </Card>
          <Card title="Evolução">
            <LineChartComponent />
          </Card>
        </div>
      </div>
    </div>
  );
}
