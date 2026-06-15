import Link from 'next/link';

const operatingRules = [
  { label: 'قبل الاستلام', value: 'لا توجد مكافأة' },
  { label: 'التوثيق', value: 'إلزامي' },
  { label: 'لكل عملية', value: 'رابط واحد' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-ring right-[-90px] top-[-60px] h-72 w-72 bg-accent-indigo" />
      <div className="glow-ring left-[-120px] bottom-[-100px] h-80 w-80 bg-cyan-500" />
      <div className="mesh-bg absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="glass-card relative overflow-hidden rounded-[32px] p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_25%)]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-indigo-200">
                by_REWARDS — منصة مكافآت بعد الشراء
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.15]">
                  نظام تشغيل
                  <span className="block text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 via-indigo-300 to-indigo-500">
                    لمكافآت بعد شراء حقيقي موثّق.
                  </span>
                </h1>
                <p className="max-w-2xl text-base md:text-lg leading-8 text-slate-300">
                  بواسطة المكافآت تقدّم مكافأة بعد الشراء فقط، مرتبطة بعملية شراء فعلية ومكتملة من متجر شريك. المسار يبدأ بعد الشراء، ثم الاستلام، ثم التوثيق، ثم التحقق، ثم تسليم المكافأة.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offers" className="btn-primary">استعرض المنتجات الحالية</Link>
                <Link href="/join-partner" className="btn-secondary">انضم كمتجر شريك</Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {operatingRules.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <div className="text-xl font-black text-white">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-tr from-accent-indigo/25 to-cyan-400/10 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/10 bg-slate-950/40 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="rounded-[24px] border border-white/10 bg-[#071126] p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-slate-400">عملية موثّقة</p>
                      <h3 className="mt-1 text-xl font-black text-white">منتج من متجر كلوفر</h3>
                    </div>
                    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-bold text-indigo-200">بعد الاستلام</span>
                  </div>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex items-center justify-between"><span>شراء من متجر شريك</span><span className="text-emerald-300">مكتمل</span></div>
                    <div className="flex items-center justify-between"><span>استلام المنتج</span><span className="text-emerald-300">موثّق</span></div>
                    <div className="flex items-center justify-between"><span>تسليم المكافأة</span><span className="text-indigo-300">بعد التحقق</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
