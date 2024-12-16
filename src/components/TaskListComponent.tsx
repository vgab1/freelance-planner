import { useState, useEffect } from "react";

export default function TaskListComponent() {
  const [tasks, setTasks] = useState<{ id: number; name: string }[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = { id: Date.now(), name: newTask.trim() };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="px-4 py-2 border rounded-md flex-grow"
          placeholder="Nova tarefa"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Adicionar
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center">Nenhuma tarefa adicionada</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
            >
              <span>{task.name}</span>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
