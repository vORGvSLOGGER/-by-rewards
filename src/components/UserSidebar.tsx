import Link from 'next/link';

const items = [
  ['الرئيسية', '/dashboard/user'],
  ['المحفظة', '/dashboard/user/wallet'],
  ['طلبات المكافآت', '/dashboard/user/requests'],
  ['رفع إثبات شراء', '/dashboard/user/upload'],
  ['الإشعارات', '/dashboard/user/notifications'],
  ['الملف الشخصي', '/dashboard/user/profile']
];

export default function UserSidebar() {
  return <aside className="bg-primary/80 border border-primary-700 rounded-md p-4 h-fit"><h3 className="font-bold text-accent-gold mb-3">حسابي</h3><nav className="space-y-2">{items.map(([label, href]) => <Link key={href} href={href} className="block text-sm text-gray-300 hover:text-accent-gold">{label}</Link>)}</nav></aside>;
}
