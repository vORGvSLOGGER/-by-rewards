import Link from 'next/link';

interface OfferCardProps {
  id: string;
  title: string;
  image: string;
  storeName: string;
  rewardValue: string;
  expiry: string;
}

export default function OfferCard({ id, title, image, storeName, rewardValue, expiry }: OfferCardProps) {
  return (
    <Link href={`/offers/${id}`} className="group block overflow-hidden rounded-md bg-primary/80 border border-primary-700 hover:border-accent-gold transition">
      <img src={image} alt={title} className="h-48 w-full object-cover bg-primary-700" />
      <div className="p-5 space-y-3">
        <p className="text-xs text-gray-400">{storeName}</p>
        <h3 className="font-bold text-lg group-hover:text-accent-gold">{title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-accent-green font-bold">{rewardValue}</span>
          <span className="text-gray-400">ينتهي: {expiry}</span>
        </div>
      </div>
    </Link>
  );
}
