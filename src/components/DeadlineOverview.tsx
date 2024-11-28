interface Deadline {
  project: string;
  deadline: string;
}

interface DeadlineOverviewProps {
  deadlines: Deadline[];
  onClick: () => void;
}

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
          deadlines.map((deadline, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-bold">{deadline.project}</span> -{" "}
              {deadline.deadline}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
