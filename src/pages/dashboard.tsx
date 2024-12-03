import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import DashboardHeader from "../components/dashboardHeader";
import TaskSummary from "../components/TaskSummary";
import FinancialOverview from "../components/FinancialOverview";
import DeadlineOverview from "../components/DeadlineOverview";
import TarefaCard from "../components/TarefaCard";
import TaskManager from "../components/TaskManager";
import Spinner from "../components/Spinner";
import { Task, Deadline, FinancialData } from "../types";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [financialData, setFinancialData] = useState<FinancialData | null>(
    null
  );
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];
      setTasks(fetchedTasks);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTask = async (newTask: Task) => {
    try {
      await addDoc(collection(db, "tasks"), newTask);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const handleEditTask = async (taskId: string, updatedTask: Task) => {
    const taskDoc = doc(db, "tasks", taskId);
    const taskSnapshot = await getDoc(taskDoc);
  
    if (taskSnapshot.exists()) {
      await setDoc(taskDoc, updatedTask);
    } else {
      console.error("Documento não encontrado!");
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      const taskRef = doc(db, "tasks", taskId);
      await deleteDoc(taskRef);
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "financialData"),
      (snapshot) => {
        const fetchedFinancialData = snapshot.docs.map((doc) =>
          doc.data()
        )[0] as FinancialData;
        setFinancialData(fetchedFinancialData);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "deadlines"), (snapshot) => {
      const fetchedDeadlines = snapshot.docs.map((doc) =>
        doc.data()
      ) as Deadline[];
      setDeadlines(fetchedDeadlines);
    });

    return () => unsubscribe();
  }, []);

  const handleRedirect = (route: string) => navigate(route);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TaskManager
              tasks={tasks}
              onAdd={handleAddTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
            <TaskSummary
              tasks={tasks}
              onClick={() => handleRedirect("/TaskManager")}
            />
            <TarefaCard tasks={tasks} />
            <FinancialOverview
              financialData={financialData}
              onClick={() => handleRedirect("/financial")}
            />
            <DeadlineOverview
              deadlines={deadlines}
              onClick={() => handleRedirect("/deadlines")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
