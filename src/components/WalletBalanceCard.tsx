interface WalletBalanceCardProps {
  available: string;
  pending: string;
  paid: string;
}

export default function WalletBalanceCard({ available, pending, paid }: WalletBalanceCardProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-primary/80 border border-primary-700 rounded-md p-5"><p className="text-sm text-gray-400">متاح</p><p className="text-2xl font-bold text-accent-green">{available}</p></div>
      <div className="bg-primary/80 border border-primary-700 rounded-md p-5"><p className="text-sm text-gray-400">قيد المراجعة</p><p className="text-2xl font-bold text-accent-gold">{pending}</p></div>
      <div className="bg-primary/80 border border-primary-700 rounded-md p-5"><p className="text-sm text-gray-400">مصروف</p><p className="text-2xl font-bold">{paid}</p></div>
    </div>
  );
}
