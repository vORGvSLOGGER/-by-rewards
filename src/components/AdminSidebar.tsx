import Link from 'next/link';

const items = [
  ['الرئيسية', '/dashboard/admin'],
  ['المستخدمون', '/dashboard/admin/users'],
  ['الشركاء', '/dashboard/admin/partners'],
  ['العروض', '/dashboard/admin/offers'],
  ['طلبات المكافآت', '/dashboard/admin/requests'],
  ['المحافظ والسحوبات', '/dashboard/admin/wallet'],
  ['الاحتيال', '/dashboard/admin/fraud'],
  ['سجل النشاط', '/dashboard/admin/activity-log'],
  ['الإعدادات', '/dashboard/admin/settings']
];

export default function AdminSidebar() {
  return <aside className="bg-primary/80 border border-primary-700 rounded-md p-4 h-fit"><h3 className="font-bold text-accent-gold mb-3">إدارة المنصة</h3><nav className="space-y-2">{items.map(([label, href]) => <Link key={href} href={href} className="block text-sm text-gray-300 hover:text-accent-gold">{label}</Link>)}</nav></aside>;
}
