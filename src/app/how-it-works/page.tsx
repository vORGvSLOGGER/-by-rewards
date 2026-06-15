import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  ['1', 'شراء منتج فعلي', 'العميل يشتري من متجر شريك كمتجر كلوفر. المنصة لا تتدخل قبل الشراء.'],
  ['2', 'الاستلام أولًا', 'لا تبدأ المكافأة قبل اكتمال الاستلام وتأكيد أن العملية حقيقية.'],
  ['3', 'توثيق العملية', 'يتم توثيق العملية داخل المنصة عبر رابط واحد مخصص لكل عملية.'],
  ['4', 'التحقق التشغيلي', 'تتم مراجعة الشراء والاستلام والإثباتات قبل اعتماد المكافأة.'],
  ['5', 'تسليم المكافأة والأرشفة', 'بعد التحقق تُسلّم المكافأة في المحفظة ثم تُغلق العملية وتُؤرشف.'],
];

const rules = ['لا مكافأة قبل الاستلام', 'التوثيق إلزامي', 'لا توجد خطوات مفتوحة', 'كل عملية لها بداية ونهاية'];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <section className="section-shell p-6 md:p-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">كيف تعمل؟</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-black text-white">مسار مكافأة بعد الشراء، وليس قبل الشراء.</h1>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            المنصة تضبط ما بعد الشراء فقط: استلام، توثيق، تحقق، ثم مكافأة. لا تمويل، لا قروض، ولا التزام مالي إضافي على العميل.
          </p>
        </section>

        <section className="grid gap-4">
          {steps.map(([num, title, desc]) => (
            <div key={num} className="glass-card card-hover rounded-[26px] p-6 flex gap-4 items-start">
              <span className="w-11 h-11 shrink-0 rounded-2xl bg-accent-indigo text-white font-bold flex items-center justify-center">{num}</span>
              <div>
                <h2 className="font-black text-lg text-white">{title}</h2>
                <p className="text-slate-400 mt-2 leading-7">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rules.map((rule) => (
            <div key={rule} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center font-bold text-white">
              {rule}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
