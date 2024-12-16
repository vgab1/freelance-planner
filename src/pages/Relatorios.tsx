import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

export default function Relatorios() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Relatórios"
          subtitle="Visualize e gerencie seus relatórios"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Relatório de Tarefas">
            <p className="text-lg text-gray-700">
              Visualize o desempenho das tarefas realizadas.
            </p>
          </Card>
          <Card title="Relatório de Despesas">
            <p className="text-lg text-gray-700">
              Acompanhe as despesas de seu projeto.
            </p>
          </Card>
          <Card title="Relatório de Projetos">
            <p className="text-lg text-gray-700">
              Veja o progresso dos projetos em andamento.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
