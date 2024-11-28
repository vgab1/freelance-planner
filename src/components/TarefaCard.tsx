interface TarefaCardProps {
  tasks: Task[];
}

interface Task {
  id: number;
  name: string;
  status: string;
}

export default function TarefaCard({ tasks }: TarefaCardProps) {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="font-bold font-text text-xl mb-4">Resumo de Tarefas</h3>
      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <li className="text-gray-500">Nenhuma tarefa pendente.</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="text-gray-700">
              <span className="font-bold">{task.name}</span> - {task.status}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
