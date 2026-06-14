import Link from 'next/link';

const nav = [
  { href: '/', label: 'الرئيسية' },
  { href: '/offers', label: 'العروض' },
  { href: '/partners', label: 'الشركاء' },
  { href: '/how-it-works', label: 'كيف تعمل' },
  { href: '/about', label: 'من نحن' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-700 bg-primary/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-accent-gold">By REWARDS</Link>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          {nav.map((item) => <Link key={item.href} href={item.href} className="hover:text-accent-gold">{item.label}</Link>)}
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/auth/login" className="px-4 py-2 rounded-md border border-accent-gold text-accent-gold">دخول</Link>
          <Link href="/auth/signup" className="px-4 py-2 rounded-md bg-accent-gold text-primary font-bold">حساب جديد</Link>
        </div>
      </nav>
    </header>
  );
}
