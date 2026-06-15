import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#060c16]/70">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="text-xl font-black text-white">By <span className="text-accent-indigo">REWARDS</span></h3>
          <p className="mt-3 leading-7 text-slate-400">
            منصة مكافآت ذكية تربط المتاجر بالعملاء عبر تجربة موثوقة بعد الشراء الموثق.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">روابط مهمة</h4>
          <div className="space-y-2 text-slate-400">
            <Link href="/how-it-works" className="block hover:text-white">كيف تعمل</Link>
            <Link href="/offers" className="block hover:text-white">العروض</Link>
            <Link href="/partners" className="block hover:text-white">الشركاء</Link>
            <Link href="/join-partner" className="block hover:text-white">انضم كشريك</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">الثقة والوضوح</h4>
          <div className="space-y-2 text-slate-400">
            <p>المكافأة تصرف بعد التحقق</p>
            <p>سجل شفاف لكل حالة طلب</p>
            <p>بنية جاهزة للتوسع والربط</p>
          </div>
          <p className="mt-4 text-slate-500">2026 By REWARDS</p>
        </div>
      </div>
    </footer>
  );
}
