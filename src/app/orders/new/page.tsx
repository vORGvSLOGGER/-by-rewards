import Link from 'next/link';
import { operationRules, packages, partners } from '@/data/byRewards';

export default function NewOrderPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="section-shell relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(99,102,241,.22),transparent_38%)]" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">Customer Flow</span>
              <h1 className="mt-5 text-3xl font-black md:text-5xl">طلب مكافأة بعد الشراء</h1>
              <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                واجهة تشغيلية لإنشاء طلب مكافأة: اختيار باقة، اختيار متجر شريك، إصدار رابط واحد، ثم متابعة الشراء والاستلام والتوثيق قبل اعتماد المكافأة.
              </p>
            </div>
            <Link href="/dashboard/ops" className="btn-secondary">لوحة العمليات</Link>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1fr_.7fr]">
          <div className="space-y-6">
            <div className="section-shell p-5 md:p-6">
              <h2 className="text-2xl font-black">1. اختر الباقة</h2>
              <p className="mt-2 text-sm text-slate-400">كل باقة لها قيمة مكافأة، رسوم تشغيل، حد استخدام، ومتطلبات توثيق.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="glass-card card-hover rounded-3xl p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-black">{pkg.name}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-400">{pkg.description}</p>
                      </div>
                      <span className="rounded-2xl bg-indigo-500/15 px-4 py-2 text-sm font-bold text-indigo-100">{pkg.rewardAmount} ر.س</span>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><span className="block text-slate-500">رسوم التشغيل</span><b>{pkg.opsFee} ر.س</b></div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><span className="block text-slate-500">صلاحية الرابط</span><b>{pkg.linkExpiryHours} ساعة</b></div>
                    </div>
                    <div className="mt-5">
                      <p className="mb-2 text-xs text-slate-500">الإثباتات المطلوبة</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.requirements.map((req) => <span key={req} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{req}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-shell p-5 md:p-6">
              <h2 className="text-2xl font-black">2. اختر المتجر الشريك</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {partners.map((partner) => (
                  <div key={partner.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="font-black">{partner.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{partner.category}</p>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">{partner.status}</span>
                      <span className="text-slate-400">SLA: {partner.sla}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-shell p-5 md:p-6">
              <h2 className="text-2xl font-black">3. بيانات الطلب</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-slate-300">رقم الجوال</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none ring-indigo-400/40 focus:ring" placeholder="05xxxxxxxx" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-300">البريد الإلكتروني</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none ring-indigo-400/40 focus:ring" placeholder="name@example.com" />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm text-slate-300">ملاحظات الطلب</span>
                  <textarea className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none ring-indigo-400/40 focus:ring" placeholder="أي ملاحظة تشغيلية مهمة..." />
                </label>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="btn-primary" type="button">إصدار رابط شراء واحد</button>
                <button className="btn-secondary" type="button">حفظ كمسودة</button>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="section-shell p-5 md:p-6">
              <h2 className="text-xl font-black">السياسة المختصرة</h2>
              <div className="mt-4 space-y-3">
                {operationRules.map((rule) => (
                  <div key={rule} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300">{rule}</div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <h2 className="text-xl font-black">تنبيه واجهة</h2>
              <p className="mt-3 leading-8 text-slate-300">
                الصياغة الرسمية داخل المنتج: <b>مكافآت بعد الشراء</b>. لا تستخدم أي صياغة تجعل النموذج يبدو كتمويل أو قرض.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
