import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-title font-semibold">Menu</h2>
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/dashboard"
              className="font-button px-4 py-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/relatorios"
              className="font-button px-4 py-2 hover:bg-gray-700 rounded"
            >
              Relatórios
            </Link>
          </li>
          <li>
            <Link
              to="/configuracoes"
              className="font-button px-4 py-2 hover:bg-gray-700 rounded"
            >
              Configurações
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col space-y-4 p-4 md:hidden">
          <li>
            <Link
              to="/dashboard"
              className="font-button px-4 py-2 hover:bg-gray-700 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/relatorios"
              className="font-button px-4 py-2 hover:bg-gray-700 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Relatórios
            </Link>
          </li>
          <li>
            <Link
              to="/configuracoes"
              className="font-button px-4 py-2 hover:bg-gray-700 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Configurações
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
