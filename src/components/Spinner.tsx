import { ClipLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader size={50} color="#3498db" />
    </div>
  );
}