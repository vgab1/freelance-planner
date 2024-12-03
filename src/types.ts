export interface Task {
  id: string;
  name: string;
  status: string;
}

export interface Deadline {
  project: string;
  deadline: string;
}

export interface FinancialData {
  income: number;
  expenses: number;
}

export interface UpdatedTask {
  [key: string]: unknown;
  name: string;
  status: string;
}

export interface TaskManagerProps {
  tasks: Task[];
  onAdd: (task: Task) => void;
  onEdit: (taskId: string, updatedTask: Task) => Promise<void>;
  onDelete: (taskId: string) => void;
}

export interface TarefaCardProps {
  tasks: Task[];
}

export interface DeadlineOverviewProps {
  deadlines: Deadline[];
  onClick: () => void;
}

export interface FinancialOverviewProps {
  financialData: FinancialData | null;
  onClick: () => void;
}

export interface Props {
  tasks: Task[];
  onClick: () => void;
}