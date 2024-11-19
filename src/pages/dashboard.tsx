import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Bem-vindo ao Dashboard!
        </h1>
        {user ? (
          <div className="flex flex-col items-center mb-6">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.displayName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ) : (
          <p>Carregando informações do usuário...</p>
        )}
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
