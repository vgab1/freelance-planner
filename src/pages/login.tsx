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
    <div className="flex h-screen bg-gray-100">
      <img
        src={imageHome}
        alt="Imagem de contabilidade"
        className="hidden lg:block w-2/3 h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg w-full lg:w-1/2">
        <img
          src={logo}
          alt="Freelance Planner Logo"
          className="w-36 h-36 rounded-full mb-4"
        />
        <h1 className="font-title text-2xl font-bold text-center text-blue-600 mb-4">
          Bem-vindo ao Freelance Planner
        </h1>
        <p className="font-text mb-6 text-center">
          Uma aplicação web que permite gerenciar projetos, tarefas e finanças
          de forma integrada.
        </p>
        <p className="font-text text-center text-gray-600 mb-3">
          Faça login para acessar sua conta
        </p>
        <button
          onClick={handleLogin}
          className="font-button flex items-center justify-center w-full py-2 px-4 bg-white text-blue-600 rounded-lg outline hover:bg-slate-100"
        >
          <FcGoogle className=" w-5 h-5 mr-2" />
          Login com Google
        </button>
      </div>
    </div>
  );
}
