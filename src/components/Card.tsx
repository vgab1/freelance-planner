type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
      <h2 className="text-lg font-title font-semibold text-gray-700 mb-4">
        {title}
      </h2>
      <div className="text-center">{children}</div>
    </div>
  );
}
