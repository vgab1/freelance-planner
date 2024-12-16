import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
    </Routes>
  );
}
