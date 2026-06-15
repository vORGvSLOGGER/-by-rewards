import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    id: 'bella',
    name: 'عطر بيلا',
    store: 'متجر كلوفر',
    price: '٥٢٥',
    note: 'مكافأة بعد الشراء والاستلام والتوثيق',
  },
  {
    id: 'signature',
    name: 'عطر سقنتشر',
    store: 'متجر كلوفر',
    price: '١٥٧٥',
    note: 'عملية موثقة برابط واحد ثم أرشفة بعد تسليم المكافأة',
  },
];

const operationPath = ['شراء المنتج', 'استلام المنتج', 'توثيق العملية', 'التحقق', 'تسليم المكافأة'];

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        <section className="section-shell p-6 md:p-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">المنتجات الحالية</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-black text-white">منتجات مرتبطة بمكافأة بعد الشراء.</h1>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            هذه ليست عروض كاش باك عامة. كل منتج هنا يدخل في مسار تشغيلي محدد: شراء من متجر شريك، استلام، توثيق، تحقق، ثم مكافأة في المحفظة.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="glass-card card-hover rounded-[30px] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-indigo-200">{product.store}</p>
                  <h2 className="mt-2 text-3xl font-black text-white">{product.name}</h2>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">منتج حالي</span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs text-slate-400">سعر المنتج</p>
                <p className="mt-1 text-4xl font-black text-white">{product.price}</p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">{product.note}</p>

              <div className="mt-6 grid grid-cols-1 gap-3">
                {operationPath.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-300">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-indigo text-xs font-bold text-white">{index + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
