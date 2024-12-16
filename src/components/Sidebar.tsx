import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-title font-semibold">Menu</h2>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/dashboard"
              className="block font-button px-4 py-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/relatorios"
              className="block font-button px-4 py-2 hover:bg-gray-700 rounded"
            >
              Relatórios
            </Link>
          </li>
          <li>
            <Link
              to="/configuracoes"
              className="block font-button px-4 py-2 hover:bg-gray-700 rounded"
            >
              Configurações
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
