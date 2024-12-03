interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationModal({
  message,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="font-text text-black">{message}</p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white font-button rounded"
          >
            Confirmar
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black font-button rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
