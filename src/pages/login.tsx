import { signInWithGoogle } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/fp-logo.webp";
import imageHome from "../assets/image-1.jpg";

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
      <img
        src={imageHome}
        alt="Imagem de contabilidade"
        className="w-96 h-96"
      />
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <img
          src={logo}
          alt="Freelance Planner Logo"
          className="w-24 h-24 mb-4"
        />
        <h1 className="font-title text-2xl font-bold text-center text-blue-600 mb-4">
          Bem-vindo ao Freelance Planner
        </h1>
        <p className="font-text text-center text-gray-600 mb-6">
          Faça login para acessar sua conta
        </p>
        <button
          onClick={handleLogin}
          className="font-button flex items-center justify-center w-full py-2 px-4 bg-white text-blue-600 rounded-lg outline"
        >
          <FcGoogle className=" w-5 h-5 mr-2" />
          Login com Google
        </button>
      </div>
    </div>
  );
}
