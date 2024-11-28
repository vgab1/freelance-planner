interface FinancialData {
  income: number;
  expenses: number;
}

interface FinancialOverviewProps {
  financialData: FinancialData | null;
  onClick: () => void;
}

export default function FinancialOverview({
  financialData,
  onClick,
}: FinancialOverviewProps) {
  const balance = (financialData?.income || 0) - (financialData?.expenses || 0);

  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-bold font-text text-xl mb-4">Resumo Financeiro</h3>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-700">
          <span>Receita do Mês</span>
          <span>R$ {financialData?.income || 0}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Despesas do Mês</span>
          <span>R$ {financialData?.expenses || 0}</span>
        </div>
        <div className="flex justify-between text-gray-700 font-bold">
          <span>Saldo Atual</span>
          <span>R$ {balance}</span>
        </div>
      </div>
    </div>
  );
}
