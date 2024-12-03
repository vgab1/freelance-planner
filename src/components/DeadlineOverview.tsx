import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { DeadlineOverviewProps } from "../types";



export default function DeadlineOverview({
  deadlines,
  onClick,
}: DeadlineOverviewProps) {
  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-bold font-text text-xl mb-4">Próximos Prazos</h3>
      <ul className="space-y-2">
        {deadlines.length === 0 ? (
          <li className="text-gray-500">Nenhum prazo próximo.</li>
        ) : (
          deadlines.slice(0, 3).map((deadline, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-bold">{deadline.project}</span> -{" "}
              {format(new Date(deadline.deadline), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </li>
          ))
        )}
      </ul>
      {deadlines.length > 3 && (
        <p className="text-blue-500 text-sm mt-2">Ver todos os prazos</p>
      )}
    </div>
  );
}
