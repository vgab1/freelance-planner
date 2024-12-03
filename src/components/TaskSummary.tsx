import { Props } from "../types";

export default function TaskSummary({ tasks, onClick }: Props) {
  const pendingTasks = tasks.filter(
    (task) => task.status === "Pendente"
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Concluído"
  ).length;

  if (tasks.length === 0) {
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h3 className="font-bold font-text text-xl mb-4">Resumo de Tarefas</h3>
        <p className="text-gray-500">Nenhuma tarefa cadastrada.</p>
      </div>
    );
  }

  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Abrir resumo de tarefas"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <h3 className="font-bold font-text text-xl mb-4">Resumo de Tarefas</h3>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-700">
          <span>Tarefas Pendentes</span>
          <span>{pendingTasks}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tarefas Concluídas</span>
          <span>{completedTasks}</span>
        </div>
      </div>
    </div>
  );
}
