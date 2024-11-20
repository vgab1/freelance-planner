export async function getProjects() {
  return [
    {
      name: "Projeto 1",
      description: "Descrição do Projeto 1",
      deadline: "2024-12-01",
      status: "Em andamento",
    },
    {
      name: "Projeto 2",
      description: "Descrição do Projeto 2",
      deadline: "2024-11-30",
      status: "Concluído",
    },
  ];
}

export async function addProject(project: {
  name: string;
  description: string;
  deadline: string;
  status: string;
}) {
  console.log("Projeto Adicionado:", project);
}
