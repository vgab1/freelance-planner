import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Tasks from "./pages/tasks";
import Financial from "./pages/financial";
import Deadline from "./pages/deadlines";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/deadlines" element={<Deadline />} />
    </Routes>
  );
}
