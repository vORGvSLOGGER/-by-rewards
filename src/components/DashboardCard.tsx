interface DashboardCardProps {
  title: string;
  value: string;
  hint?: string;
}

export default function DashboardCard({ title, value, hint }: DashboardCardProps) {
  return (
    <div className="bg-primary/80 border border-primary-700 rounded-md p-5">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-2xl font-bold mt-2 text-accent-gold">{value}</p>
      {hint && <p className="text-xs text-gray-500 mt-2">{hint}</p>}
    </div>
  );
}
