import Link from 'next/link';
import { kpis, operationRules, orderFlow, orderStatusLabels, reviewQueue } from '@/data/byRewards';

function FraudBadge({ score }: { score: number }) {
  const level = score >= 35 ? 'مرتفع' : score >= 15 ? 'متوسط' : 'منخفض';
  const className = score >= 35
    ? 'border-red-400/40 bg-red-500/10 text-red-200'
    : score >= 15
      ? 'border-amber-400/40 bg-amber-500/10 text-amber-200'
      : 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200';

  return <span className={`rounded-full border px-3 py-1 text-xs ${className}`}>{level} · {score}%</span>;
}

export default function OpsDashboardPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="section-shell relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,.10),transparent_28%)]" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-200">Operations Command Center</span>
              <h1 className="mt-5 text-3xl font-black md:text-5xl">لوحة عمليات by_REWARDS</h1>
              <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                مركز مراجعة الطلبات، التحقق من الإثباتات، منع الاحتيال، واعتماد مكافآت بعد الشراء فقط. لا يوجد تحويل قبل الاستلام والتوثيق.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/orders/new" className="btn-primary">إنشاء طلب تجريبي</Link>
              <Link href="/" className="btn-secondary">العودة للرئيسية</Link>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <div key={item.label} className="glass-card card-hover rounded-3xl p-5">
              <p className="text-sm text-slate-400">{item.label}</p>
              <strong className="mt-3 block text-3xl font-black">{item.value}</strong>
              <p className="mt-2 text-sm text-indigo-200">{item.hint}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
          <div className="section-shell overflow-hidden p-5 md:p-6">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-black">قائمة المراجعة</h2>
                <p className="mt-1 text-sm text-slate-400">كل عملية تمر بمراجعة واضحة قبل صرف المكافأة.</p>
              </div>
              <div className="flex gap-2 text-xs text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">كل الحالات</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">الأحدث</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-separate border-spacing-y-3 text-right">
                <thead className="text-xs text-slate-400">
                  <tr>
                    <th className="px-4">رقم العملية</th>
                    <th className="px-4">العميل</th>
                    <th className="px-4">الباقة</th>
                    <th className="px-4">الشريك</th>
                    <th className="px-4">الحالة</th>
                    <th className="px-4">المخاطر</th>
                    <th className="px-4">المكافأة</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewQueue.map((order) => (
                    <tr key={order.id} className="rounded-3xl bg-white/[0.04] text-sm shadow-lg">
                      <td className="rounded-r-2xl px-4 py-4 font-bold text-indigo-100">{order.id}</td>
                      <td className="px-4 py-4 text-slate-200">{order.customer}<span className="block text-xs text-slate-500">{order.submittedAt}</span></td>
                      <td className="px-4 py-4">{order.packageName}</td>
                      <td className="px-4 py-4">{order.partner}</td>
                      <td className="px-4 py-4"><span className="rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-100">{orderStatusLabels[order.status]}</span></td>
                      <td className="px-4 py-4"><FraudBadge score={order.fraudScore} /></td>
                      <td className="rounded-l-2xl px-4 py-4 font-black">{order.reward} ر.س</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="section-shell p-5 md:p-6">
              <h2 className="text-xl font-black">قواعد التشغيل الصارمة</h2>
              <div className="mt-4 space-y-3">
                {operationRules.map((rule) => (
                  <div key={rule} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300">{rule}</div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="section-shell p-5 md:p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-black">State Machine</h2>
            <p className="mt-2 text-sm text-slate-400">منع القفز بين الحالات هو حماية المشروع من النزيف التشغيلي.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {orderFlow.map((step, index) => (
              <div key={step.status} className="glass-card rounded-3xl p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-black text-indigo-300">{String(index + 1).padStart(2, '0')}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{orderStatusLabels[step.status]}</span>
                </div>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
