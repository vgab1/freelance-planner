import { useState } from "react";

interface Task {
  id: number;
  name: string;
  status: string;
}

interface TaskManagerProps {
  tasks: Task[];
  onAdd: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskManager({ tasks, onAdd, onEdit, onDelete }: TaskManagerProps) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("Pendente");

  const handleAddTask = () => {
    if (!newTaskName.trim()) return;

    const newTask: Task = {
      id: Date.now(), // ID único baseado na data atual
      name: newTaskName,
      status: newTaskStatus,
    };

    onAdd(newTask);
    setNewTaskName(""); // Limpa o campo de nome
    setNewTaskStatus("Pendente");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Gerenciar Tarefas</h3>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nova tarefa"
          className="flex-1 px-3 py-2 border rounded"
        />
        <select
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="Pendente">Pendente</option>
          <option value="Concluído">Concluído</option>
        </select>
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span>
              {task.name} - <span className="italic">{task.status}</span>
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit({ ...task, status: task.status === "Pendente" ? "Concluído" : "Pendente" })}
                className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
              >
                Alterar Status
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="px-2 py-1 text-sm bg-red-500 text-white rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
