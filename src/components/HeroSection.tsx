import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-700">
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-accent-gold text-sm mb-4">بواسطة المكافآت | By REWARDS</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            اشترِ من الشركاء، واربح مكافأتك بعد التحقق.
          </h1>
          <p className="mt-6 text-gray-300 leading-loose">
            منصة عربية تربط المستخدمين بالمتاجر الشريكة عبر عروض مكافآت واضحة،
            مع محفظة، طلبات مراجعة، ونظام حماية من الاحتيال.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/offers" className="px-6 py-3 bg-accent-gold text-primary rounded-md font-bold">تصفح العروض</Link>
            <Link href="/join-partner" className="px-6 py-3 border border-accent-gold text-accent-gold rounded-md">انضم كشريك</Link>
          </div>
        </div>
        <div className="bg-primary/80 border border-primary-700 rounded-2xl p-6 shadow-2xl">
          <div className="rounded-xl bg-primary-700 p-5 space-y-4">
            <div className="flex justify-between"><span>عملية شراء</span><span className="text-accent-gold">450 ر.س</span></div>
            <div className="flex justify-between"><span>المكافأة المتوقعة</span><span className="text-accent-green">45 ر.س</span></div>
            <div className="h-2 bg-primary rounded-full"><div className="h-2 bg-accent-gold rounded-full w-2/3" /></div>
            <p className="text-xs text-gray-400">قيد المراجعة من الشريك</p>
          </div>
        </div>
      </div>
    </section>
  );
}
