
import { FinancialOverviewProps } from "../types";


export default function FinancialOverview({
  financialData,
  onClick,
}: FinancialOverviewProps) {
  const balance = (financialData?.income || 0) - (financialData?.expenses || 0);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-bold font-text text-xl mb-4">Resumo Financeiro</h3>
      {financialData ? (
        <div className="space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>Receita do Mês</span>
            <span>{formatCurrency(financialData.income)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Despesas do Mês</span>
            <span>{formatCurrency(financialData.expenses)}</span>
          </div>
          <div className="flex justify-between text-gray-700 font-bold">
            <span>Saldo Atual</span>
            <span className={balance >= 0 ? "text-green-500" : "text-red-500"}>
              {formatCurrency(balance)}
            </span>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Dados financeiros não disponíveis.</p>
      )}
    </div>
  );
}
