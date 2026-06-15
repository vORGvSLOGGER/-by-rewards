interface StatsCardProps {
  label?: string;
  title?: string;
  value: string;
}

export default function StatsCard({ label, title, value }: StatsCardProps) {
  const displayTitle = title || label || '';
  return (
    <div className="glass-card card-hover rounded-3xl p-5 text-center">
      <div className="text-3xl font-black text-white mb-2">{value}</div>
      <div className="text-sm text-slate-400">{displayTitle}</div>
    </div>
  );
}
