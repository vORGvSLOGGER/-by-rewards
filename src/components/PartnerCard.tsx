import Link from 'next/link';

interface PartnerCardProps {
  id: string;
  name: string;
  category: string;
  verified?: boolean;
}

export default function PartnerCard({ id, name, category, verified }: PartnerCardProps) {
  return (
    <Link href={`/partners/${id}`} className="block bg-primary/80 border border-primary-700 rounded-md p-5 hover:border-accent-gold">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{name}</h3>
        {verified && <span className="text-xs text-accent-green">موثّق</span>}
      </div>
      <p className="text-sm text-gray-400 mt-2">{category}</p>
    </Link>
  );
}
