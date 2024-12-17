import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ConfirmationModal from "../components/ConfirmationModal";

interface User {
  photoURL: string | null;
  displayName: string | null;
}

export default function DashboardHeader() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
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

  const handleLogoutClick = () => {
    setShowModal(true); 
  };

  const handleConfirmLogout = async () => {
    setShowModal(false);
    await logout();
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="flex items-center space-x-4">
        <img
          src={user?.photoURL ?? ""}
          alt="Foto do usuário"
          className="w-12 h-12 rounded-full"
          referrerPolicy="no-referrer"
        />
        <div className="text-sm">
          <p className="font-title font-bold">{user?.displayName || "Usuário"}</p>
        </div>
      </div>

      <button
        onClick={handleLogoutClick}
        className="font-button px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100"
      >
        Logout
      </button>
      {showModal && (
        <ConfirmationModal
          message="Você tem certeza que deseja sair?"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
    </header>
  );
}
