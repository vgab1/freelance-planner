interface Task {
  id: number;
  name: string;
  status: string;
}

interface Props {
  tasks: Task[];
  onClick: () => void;
}

export default function TaskSummary({ tasks, onClick }: Props) {
  const pendingTasks = tasks.filter(
    (task) => task.status === "Pendente"
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Concluído"
  ).length;

  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
      onClick={onClick}
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
