import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

export default function Configuracoes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Configurações"
          subtitle="Ajuste as configurações do seu painel"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Notificações">
            <p className="text-lg text-gray-700">
              Gerencie suas preferências de notificações.
            </p>
          </Card>
          <Card title="Conta de Usuário">
            <p className="text-lg text-gray-700">
              Alterar dados da sua conta ou senha.
            </p>
          </Card>
          <Card title="Preferências de Tema">
            <p className="text-lg text-gray-700">
              Customize o tema do painel conforme sua preferência.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
