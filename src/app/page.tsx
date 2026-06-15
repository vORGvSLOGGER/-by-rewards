import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsCard from '@/components/StatsCard';
import Link from 'next/link';

const processSteps = [
  { number: '01', title: 'شراء منتج فعلي', desc: 'العميل يشتري منتجًا حقيقيًا من متجر شريك، بدون تدخل من المنصة قبل الشراء.' },
  { number: '02', title: 'الاستلام والتوثيق', desc: 'بعد استلام المنتج يتم توثيق العملية داخل المنصة عبر رابط واحد مخصص لكل عملية.' },
  { number: '03', title: 'التحقق التشغيلي', desc: 'تتم مراجعة العملية والتأكد من اكتمال الشراء وعدم وجود خطوة مفتوحة أو غير موثقة.' },
  { number: '04', title: 'تسليم المكافأة', desc: 'بعد التحقق يحصل العميل على مكافأته في محفظته، ثم تتم أرشفة العملية.' },
];

const products = [
  { name: 'عطر بيلا', store: 'متجر كلوفر', price: '٥٢٥', status: 'منتج حالي داخل المنصة' },
  { name: 'عطر سقنتشر', store: 'متجر كلوفر', price: '١٥٧٥', status: 'منتج حالي داخل المنصة' },
];

const rules = [
  'لا مكافأة قبل الاستلام',
  'التوثيق إلزامي',
  'رابط واحد لكل عملية',
  'أرشفة بعد تسليم المكافأة',
];

const valueCards = [
  { title: 'للعميل', items: ['مكافأة نقدية بعد الشراء', 'تجربة واضحة بدون التزامات مالية', 'الشراء يتم كما هو معتاد'] },
  { title: 'للمتاجر والتجار', items: ['مبيعات حقيقية ومكتملة', 'عملاء جادّون', 'قناة تسويق وتحفيز إضافية'] },
  { title: 'للمنصة', items: ['تحكم كامل في مسار العملية', 'ربح ثابت لكل معاملة', 'نموذج قابل للأتمتة والتوسع'] },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <section className="section-shell p-6 md:p-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">ما هي المنصة؟</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-white">منصة تشغيل ذكية لمكافآت بعد الشراء فقط.</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            بواسطة المكافآت ليست تمويلًا وليست سيولة. هي نظام مكافآت بعد الشراء قائم على عملية شراء حقيقية، موثقة، ومكتملة من متجر شريك. المنصة لا تغيّر نموذج بيع المتجر، ولا تتدخل قبل الشراء، بل تضبط ما بعد الشراء: الاستلام، التوثيق، التحقق، ثم تسليم المكافأة.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StatsCard title="تمويل أو قروض" value="0" />
          <StatsCard title="مكافأة قبل الاستلام" value="0" />
          <StatsCard title="خطوات غير موثقة" value="0" />
        </section>

        <section className="section-shell p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">كيف تعمل المنصة؟</h2>
              <p className="mt-2 text-slate-400">كل عملية لها بداية واضحة ونهاية مغلقة.</p>
            </div>
            <Link href="/how-it-works" className="btn-secondary !self-start">عرض التفاصيل</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div key={step.number} className="glass-card card-hover rounded-[26px] p-5">
                <div className="text-3xl font-black text-indigo-300">{step.number}</div>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[.9fr_1.1fr] gap-6">
          <div className="section-shell p-6 md:p-8">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">المنتجات الحالية</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-white">منتجات مرتبطة بمسار تشغيلي ثابت.</h2>
            <p className="mt-3 leading-8 text-slate-400">
              كل منتج داخل المنصة يكون مرتبطًا بمتجر شريك، وسعر واضح، ومسار موثق لا يتغير: شراء، استلام، توثيق، تحقق، مكافأة، أرشفة.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {products.map((product) => (
              <div key={product.name} className="glass-card card-hover rounded-[28px] p-6">
                <p className="text-sm text-indigo-200">{product.store}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{product.name}</h3>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-400">سعر المنتج</p>
                  <p className="mt-1 text-3xl font-black text-white">{product.price}</p>
                </div>
                <p className="mt-4 text-sm text-emerald-300">{product.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          {valueCards.map((card) => (
            <div key={card.title} className="glass-card card-hover rounded-[28px] p-6">
              <h3 className="text-xl font-black text-white">ماذا تقدم {card.title}؟</h3>
              <div className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-indigo" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="section-shell p-6 md:p-8">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-6 items-start">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">التشغيل</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-white">مختصر وحاسم.</h2>
              <p className="mt-3 leading-8 text-slate-400">
                المنصة مبنية على ضبط العملية، وليس على الوعود المفتوحة. لا توجد مكافأة قبل الاستلام، ولا خطوة خارج التوثيق.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {rules.map((rule) => (
                <div key={rule} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white font-bold">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white">الخلاصة</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
            بواسطة المكافآت ليست تمويلًا وليست سيولة. بل نظام مكافآت بعد الشراء قائم على شراء حقيقي، موثّق، ومنضبط تشغيليًا.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
