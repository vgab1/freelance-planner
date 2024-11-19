import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9Mg-NRTvPW-C6FRsygX0exiTwBG4ai9c",
  authDomain: "freelance-planner.firebaseapp.com",
  projectId: "freelance-planner",
  storageBucket: "freelance-planner.firebasestorage.app",
  messagingSenderId: "486304450231",
  appId: "1:486304450231:web:ad75ec6cfb55cc6ee46f32",
  measurementId: "G-H5J70VJ2X4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Logout realizado com sucesso.");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    throw error;
  }
};
