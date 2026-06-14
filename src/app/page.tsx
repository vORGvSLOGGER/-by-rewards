import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsCard from '@/components/StatsCard';

const steps = [
  { title: 'اشترِ من متجر شريك', desc: 'اختر عرضاً موثقاً وانتقل لمتجر الشريك لإتمام عملية الشراء.' },
  { title: 'ارفع إثبات الشراء', desc: 'أرسل رقم الطلب أو الفاتورة أو صورة الإيصال من حسابك.' },
  { title: 'استلم مكافأتك', desc: 'بعد المراجعة والموافقة تظهر المكافأة في محفظتك.' }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="rounded-md bg-primary/80 border border-primary-700 p-6">
              <h3 className="text-xl font-bold text-accent-gold">{step.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </section>
        <section className="max-w-7xl mx-auto px-4 pb-16 grid md:grid-cols-4 gap-4">
          <StatsCard label="طلبات مراجعة" value="+12K" />
          <StatsCard label="شركاء قابلين للتوسع" value="+80" />
          <StatsCard label="مكافآت مصروفة" value="+240K" />
          <StatsCard label="نموذج بلا ديون" value="0 قروض" />
        </section>
        <section className="max-w-5xl mx-auto px-4 pb-20 text-center">
          <h2 className="text-3xl font-bold mb-4">ليست منصة تمويل</h2>
          <p className="text-gray-300 leading-loose">
            بواسطة المكافآت لا تبيع ديناً ولا تمنح قرضاً. المستخدم يشتري من الشريك بقراره،
            ثم يحصل على مكافأة بعد التحقق من العملية وفق شروط العرض.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
