import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects, addProject } from "../service/dashboardService";
import DashboardHeader from "../components/dashboardHeader";

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    deadline: "",
    status: "Em andamento",
  });

  const navigate = useNavigate(); //

  useEffect(() => {
    async function fetchData() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }

    fetchData();
  }, []);

  const handleAddProject = async () => {
    try {
      const addedProject = await addProject(newProject);
      setProjects([...projects, addedProject]);
      setNewProject({
        name: "",
        description: "",
        deadline: "",
        status: "Em andamento",
      });
    } catch (error) {
      console.error("Erro ao adicionar projeto:", error);
    }
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-title font-bold text-blue-600 mb-6">
          Gerenciamento De Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-bold font-title text-xl mb-4">
              Criar novo projeto
            </h3>
            <div className="mb-4">
              <input
                type="text"
                className="p-2 border font-text border-gray-300 rounded w-full mb-2"
                placeholder="Nome do Projeto"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
              />
              <input
                type="text"
                className="p-2 border font-text border-gray-300 rounded w-full mb-2"
                placeholder="Descrição do Projeto"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
              />
              <input
                type="date"
                className="p-2 border border-gray-300 rounded w-full mb-2"
                value={newProject.deadline}
                onChange={(e) =>
                  setNewProject({ ...newProject, deadline: e.target.value })
                }
              />
              <select
                className="p-2 border font-text border-gray-300 rounded w-full mb-2"
                value={newProject.status}
                onChange={(e) =>
                  setNewProject({ ...newProject, status: e.target.value })
                }
              >
                <option value="Em andamento">Em andamento</option>
                <option value="Concluído">Concluído</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <button
                onClick={handleAddProject}
                className="w-full py-2 font-button bg-blue-600 text-white rounded-lg"
              >
                Adicionar Projeto
              </button>
            </div>

            <div>
              <h4 className="font-bold font-title text-lg mb-2">
                Projetos Ativos
              </h4>
              <ul>
                {projects.map((project, index) => (
                  <li key={index} className="mb-2">
                    <div className="font-bold font-text">{project.name}</div>
                    <div>{project.description}</div>
                    <div className="text-sm text-gray-600 font-text">
                      Prazo: {project.deadline}
                    </div>
                    <div className="text-sm text-gray-600 font-text">
                      Status: {project.status}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={handleBackToDashboard}
          className="mb-6 px-4 py-2 font-button bg-gray-600 text-white rounded-lg"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
