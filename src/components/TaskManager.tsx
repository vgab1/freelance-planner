import { useState } from "react";
import type { Task, TaskManagerProps } from "../types";

export default function TaskManager({
  tasks,
  onAdd,
  onEdit,
  onDelete,
}: TaskManagerProps) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("Pendente");
  const handleAddTask = () => {
    if (!newTaskName.trim()) {
      alert("O nome da tarefa não pode estar vazio.");
      return;
    }

    if (tasks.some((task) => task.name === newTaskName.trim())) {
      alert("Já existe uma tarefa com esse nome.");
      return;
    }

    const newTask: Task = {
      id: String(Date.now()),
      name: newTaskName.trim(),
      status: newTaskStatus,
    };

    onAdd(newTask);
    setNewTaskName("");
    setNewTaskStatus("Pendente");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Gerenciar Tarefas</h3>

      <div className="flex gap-4 mb-4 flex-wrap">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nova tarefa"
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pendente">Pendente</option>
          <option value="Concluído">Concluído</option>
        </select>
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <p>Não há tarefas para exibir.</p>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-2 rounded ${
                task.status === "Concluído" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <span className="truncate">
                {task.name} - <span className="italic">{task.status}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    onEdit({
                      ...task,
                      status:
                        task.status === "Pendente" ? "Concluído" : "Pendente",
                    })
                  }
                  className="px-2 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Alterar Status
                </button>
                <button
                  onClick={() => {
                    if (
                      confirm("Tem certeza que deseja excluir esta tarefa?")
                    ) {
                      onDelete(task.id);
                    }
                  }}
                  className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
