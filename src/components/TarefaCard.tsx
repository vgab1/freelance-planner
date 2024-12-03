import { TarefaCardProps } from "../types";

export default function TarefaCard({ tasks }: TarefaCardProps) {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="font-bold font-text text-xl mb-4">Resumo de Tarefas</h3>
      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <li className="text-gray-500">Nenhuma tarefa pendente.</li>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center text-gray-700 border-b border-gray-200 pb-2"
            >
              <span className="truncate block font-bold">{task.name}</span>
              <span
                className={`${
                  task.status === "Concluído"
                    ? "text-green-500"
                    : "text-red-500"
                } font-semibold`}
              >
                {task.status}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
