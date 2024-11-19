import { signInWithGoogle } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
      console.log("Usuário logado:", loggedInUser.displayName);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Bem-vindo ao Freelance Planner
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Faça login para acessar sua conta
        </p>
        <button
          onClick={handleLogin}
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          <FcGoogle className="w-5 h-5 mr-2" />
          Login com Google
        </button>
      </div>
    </div>
  );
}
