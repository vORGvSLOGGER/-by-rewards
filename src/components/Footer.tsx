import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-primary-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm text-gray-400">
        <div>
          <h3 className="text-white font-bold mb-2">بواسطة المكافآت</h3>
          <p>منصة مكافآت بعد الشراء الموثق، بدون قروض أو تمويل.</p>
        </div>
        <div className="space-y-2">
          <Link href="/how-it-works" className="block hover:text-accent-gold">كيف تعمل</Link>
          <Link href="/offers" className="block hover:text-accent-gold">العروض</Link>
          <Link href="/join-partner" className="block hover:text-accent-gold">انضم كشريك</Link>
        </div>
        <div>
          <p>© 2026 By REWARDS. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
