type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-title font-extrabold text-gray-800">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 mt-2 animate-fade-in">{subtitle}</p>
      )}
    </div>
  );
}
