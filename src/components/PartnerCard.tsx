import Link from 'next/link';

interface PartnerCardProps {
  id: string;
  name: string;
  category?: string;
  logo?: string;
  verified?: boolean;
}

export default function PartnerCard({ id, name, category, logo, verified }: PartnerCardProps) {
  return (
    <div className="glass-card card-hover rounded-[28px] p-5">
      <div className="flex items-center gap-4">
        {logo && <img src={logo} alt={name} className="w-16 h-16 object-cover rounded-2xl ring-1 ring-white/10" />}
        <div className="flex-1">
          <h3 className="font-bold text-lg flex items-center gap-2 text-white">
            {name}
            {verified && <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">موثّق</span>}
          </h3>
          <p className="text-sm text-slate-400">{category || 'شريك مميز ضمن منظومة المكافآت'}</p>
        </div>
      </div>
      <Link href={`/partners/${id}`} className="btn-secondary mt-5 !w-full !rounded-xl !py-2.5">عرض التفاصيل</Link>
    </div>
  );
}
