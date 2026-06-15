import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        <section className="section-shell p-6 md:p-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">عن by_REWARDS</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-black text-white">منصة مكافآت بعد الشراء.</h1>
          <p className="mt-4 text-slate-300 leading-8">
            بواسطة المكافآت هي منصة تشغيل ذكية تقدم مكافآت نقدية بعد الشراء، مرتبطة حصريًا بعملية شراء حقيقية، موثقة، ومكتملة من متجر شريك.
          </p>
          <p className="mt-4 text-slate-300 leading-8">
            الفكرة الأساسية هي تحويل الشراء إلى مكافأة بعد الاستلام ضمن إطار تشغيلي واضح، منضبط، وقابل للتوسع.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="glass-card rounded-2xl p-5 text-center font-bold text-white">ليست تمويلًا</div>
          <div className="glass-card rounded-2xl p-5 text-center font-bold text-white">ليست سيولة</div>
          <div className="glass-card rounded-2xl p-5 text-center font-bold text-white">ليست مكافأة قبل الاستلام</div>
        </section>

        <section className="section-shell p-6 md:p-8">
          <h2 className="text-2xl font-black text-white">الانضباط التشغيلي</h2>
          <p className="mt-3 text-slate-300 leading-8">
            كل عملية داخل المنصة لها بداية واضحة ونهاية مغلقة: شراء، استلام، توثيق، تحقق، تسليم مكافأة، ثم أرشفة. لا توجد خطوة غير موثقة أو مفتوحة.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
