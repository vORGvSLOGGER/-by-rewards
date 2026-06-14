import Link from 'next/link';

const items = [
  ['الرئيسية', '/dashboard/partner'],
  ['العروض', '/dashboard/partner/offers'],
  ['مراجعة العمليات', '/dashboard/partner/reviews'],
  ['إعدادات الشريك', '/dashboard/partner/settings']
];

export default function PartnerSidebar() {
  return <aside className="bg-primary/80 border border-primary-700 rounded-md p-4 h-fit"><h3 className="font-bold text-accent-gold mb-3">لوحة الشريك</h3><nav className="space-y-2">{items.map(([label, href]) => <Link key={href} href={href} className="block text-sm text-gray-300 hover:text-accent-gold">{label}</Link>)}</nav></aside>;
}
