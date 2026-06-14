interface StatsCardProps {
  label: string;
  value: string;
}

export default function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="rounded-md bg-primary/80 border border-primary-700 p-6 text-center">
      <p className="text-3xl font-extrabold text-accent-gold">{value}</p>
      <p className="text-gray-400 mt-2 text-sm">{label}</p>
    </div>
  );
}
