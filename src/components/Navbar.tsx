import Link from 'next/link';

const links = [
  { href: '/how-it-works', label: 'كيف تعمل' },
  { href: '/offers', label: 'العروض' },
  { href: '/partners', label: 'الشركاء' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'التواصل' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101d]/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-white">
          By <span className="text-accent-indigo">REWARDS</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="btn-secondary !px-4 !py-2 text-sm">تسجيل الدخول</Link>
          <Link href="/auth/signup" className="btn-primary !px-4 !py-2 text-sm">إنشاء حساب</Link>
        </div>
      </nav>
    </header>
  );
}
