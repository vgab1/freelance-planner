import DashboardHeader from "../components/dashboardHeader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Deadline() {
  const navigate = useNavigate();
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const [deadlines, setDeadlines] = useState<any[]>([]);
  const [newDeadline, setNewDeadline] = useState({
    project: "",
    deadline: "",
  });

  useEffect(() => {
    setDeadlines([
      {
        project: "Projeto A",
        deadline: "2024-11-25",
        status: "Dentro do prazo",
      },
      { project: "Projeto B", deadline: "2024-12-01", status: "Próximo" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-4">Adicionar Prazo</h3>
        <input
          type="text"
          placeholder="Nome do Projeto ou Tarefa"
          className="p-2 border border-gray-300 rounded w-full mb-2"
          value={newDeadline.project}
          onChange={(e) =>
            setNewDeadline({ ...newDeadline, project: e.target.value })
          }
        />
        <input
          type="date"
          className="p-2 border border-gray-300 rounded w-full mb-2"
          value={newDeadline.deadline}
          onChange={(e) =>
            setNewDeadline({ ...newDeadline, deadline: e.target.value })
          }
        />
        <button
          onClick={() => {
            const newEntry = { ...newDeadline, status: "Dentro do prazo" };
            setDeadlines([...deadlines, newEntry]);
            setNewDeadline({ project: "", deadline: "" });
          }}
          className="w-full py-2 bg-blue-600 text-white rounded-lg"
        >
          Adicionar Prazo
        </button>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h3 className="font-bold text-xl mb-4">Próximos Prazos</h3>
        <ul>
          {deadlines.map((deadline, index) => {
            const currentDate = new Date();
            const deadlineDate = new Date(deadline.deadline);
            const daysRemaining = Math.ceil(
              (deadlineDate.getTime() - currentDate.getTime()) /
                (1000 * 60 * 60 * 24)
            );

            // Define a cor do status com base nos dias restantes
            let statusColor = "text-green-600"; // Padrão: dentro do prazo
            if (daysRemaining <= 7 && daysRemaining >= 0)
              statusColor = "text-yellow-600"; // Prazo próximo
            if (daysRemaining < 0) statusColor = "text-red-600"; // Prazo atrasado

            return (
              <li key={index} className={`mb-2 ${statusColor}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold">{deadline.project}</div>
                    <div>Prazo: {deadline.deadline}</div>
                    <div>
                      Status:{" "}
                      {daysRemaining < 0
                        ? "Atrasado"
                        : `${daysRemaining} dias restantes`}
                    </div>
                  </div>
                  <div className="space-x-2">
                    {/* Botão de editar */}
                    <button
                      onClick={() => {
                        const updatedDeadlines = deadlines.map((d, i) =>
                          i === index
                            ? { ...d, project: "Projeto Atualizado" }
                            : d
                        );
                        setDeadlines(updatedDeadlines);
                      }}
                      className="px-2 py-1 bg-yellow-400 text-white rounded"
                    >
                      Editar
                    </button>
                    {/* Botão de excluir */}
                    <button
                      onClick={() =>
                        setDeadlines(deadlines.filter((_, i) => i !== index))
                      }
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
