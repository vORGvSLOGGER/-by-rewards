import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsCard from '@/components/StatsCard';
import OfferCard from '@/components/OfferCard';
import PartnerCard from '@/components/PartnerCard';
import Link from 'next/link';

const steps = [
  { number: '01', title: 'اختر العرض المناسب', desc: 'تصفح العروض المتاحة من شركائنا واختر ما يناسب مشترياتك.' },
  { number: '02', title: 'اشترِ من المتجر', desc: 'أكمل عملية الشراء من المتجر أو الشريك المعتمد كالمعتاد.' },
  { number: '03', title: 'ارفع الإثبات', desc: 'أرسل رقم الطلب أو الفاتورة عبر نموذج واضح وسهل.' },
  { number: '04', title: 'استلم المكافأة', desc: 'بعد المراجعة يتم تحويل المكافأة إلى محفظتك داخل المنصة.' },
];

const stats = [
  { title: 'مستخدمون نشطون', value: '10K+' },
  { title: 'شركاء وتجّار', value: '200+' },
  { title: 'مكافآت مصروفة', value: '500K+' },
  { title: 'متوسط وقت المراجعة', value: '24 ساعة' },
];

const offers = [
  { id: '1', image: '/images/rewards-shopping.svg', storeName: 'متجر التقنية', title: 'مكافأة على الإلكترونيات والمنتجات التقنية', rewardValue: '10% حتى 150 ر.س', expiry: '31/12/2026' },
  { id: '2', image: '/images/hero-rewards.svg', storeName: 'متجر أسلوب', title: 'استرجاع قيمة راجعة بعد التحقق', rewardValue: '20 ر.س', expiry: '30/11/2026' },
  { id: '3', image: '/images/rewards-shopping.svg', storeName: 'متجر المنزل', title: 'عروض موسمية مع مكافآت إلى محفظتك', rewardValue: '2x نقاط', expiry: '15/10/2026' },
];

const partners = [
  { id: '1', name: 'متجر التقنية', logo: '/images/partner-growth.svg', verified: true },
  { id: '2', name: 'متجر الأسلوب', logo: '/images/rewards-shopping.svg', verified: true },
  { id: '3', name: 'متجر المنزل', logo: '/images/hero-rewards.svg', verified: false },
];

const featureCards = [
  { title: 'محفظة ذكية', desc: 'رصيد متاح، رصيد معلق، وسجل كامل لكل حركة داخل المنصة.' },
  { title: 'مراجعة منظمة', desc: 'كل طلب يمر بمراحل واضحة: إرسال، مراجعة، قبول أو رفض مع سبب واضح.' },
  { title: 'ربط مع الشركاء', desc: 'واجهة جاهزة للتكامل مستقبلًا مع المتاجر والشركاء عبر API.' },
  { title: 'ثقة وشفافية', desc: 'لا قروض ولا تمويل، فقط مكافآت بعد تحقق حقيقي من الشراء.' },
  { title: 'تنبيهات ذكية', desc: 'إشعارات لحالة الطلب، العروض الجديدة، والمكافآت والسحوبات.' },
  { title: 'جاهزة للتوسع', desc: 'بنية MVP احترافية قابلة لتوسعة المزايا والإطلاق التجاري.' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <section className="section-shell p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">كيف تعمل المنصة؟</h2>
              <p className="mt-2 text-slate-400">مسار واضح وبسيط حتى لا يضيع المستخدم بين الشراء والمكافأة.</p>
            </div>
            <Link href="/how-it-works" className="btn-secondary !self-start">عرض التفاصيل</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.number} className="glass-card card-hover rounded-[26px] p-5">
                <div className="text-3xl font-black text-indigo-300">{step.number}</div>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.05fr_.95fr] gap-6">
          <div className="section-shell overflow-hidden p-6 md:p-8">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">تجربة استخدام أوضح</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-white">واجهة حية، أسرع، وأكثر ثقة للمستخدم والشريك.</h2>
            <p className="mt-3 leading-8 text-slate-400">طورنا الواجهة لتكون أعمق بصريًا: أزرار أكثر حياة، خلفيات أغنى، بطاقات أوضح، وصور مخصصة تدعم الهوية الحديثة للمنصة.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-shell overflow-hidden">
            <img src="/images/partner-growth.svg" alt="صورة توضح نمو الشراكات" className="h-full w-full object-cover" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">قسم الثقة</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => <StatsCard key={s.title} title={s.title} value={s.value} />)}
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">العروض المميزة</h2>
              <p className="mt-2 text-slate-400">بطاقات عروض أوضح وأغنى بصريًا مع دعوات إجراء أقوى.</p>
            </div>
            <Link href="/offers" className="btn-secondary hidden sm:inline-flex">كل العروض</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {offers.map((offer) => <OfferCard key={offer.id} {...offer} />)}
          </div>
        </section>

        <section className="grid lg:grid-cols-[.92fr_1.08fr] gap-6">
          <div className="section-shell overflow-hidden">
            <img src="/images/rewards-shopping.svg" alt="مشهد مكافآت وتسوق" className="h-full w-full object-cover" />
          </div>
          <div className="section-shell p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black text-white">شركاؤنا المميزون</h2>
            <p className="mt-3 text-slate-400 leading-8">نمنح الشركاء مساحة عرض احترافية داخل المنصة مع حملات ومؤشرات أداء ونموذج نتائج واضح.</p>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {partners.map((partner) => <PartnerCard key={partner.id} {...partner} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
