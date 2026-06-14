import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  ['1', 'اختر العرض', 'تصفح العروض النشطة واختر الشريك المناسب.'],
  ['2', 'اشترِ من الشريك', 'انتقل إلى متجر الشريك وأتم عملية الشراء.'],
  ['3', 'ارفع الإثبات', 'ارفع الفاتورة أو رقم الطلب من حسابك.'],
  ['4', 'انتظر المراجعة', 'تتم مراجعة العملية من الشريك أو الإدارة.'],
  ['5', 'استلم المكافأة', 'بعد الموافقة تظهر المكافأة في محفظتك.']
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">كيف تعمل بواسطة المكافآت؟</h1>
        <div className="grid gap-4">
          {steps.map(([num, title, desc]) => (
            <div key={num} className="bg-primary/80 border border-primary-700 rounded-md p-6 flex gap-4 items-start">
              <span className="w-10 h-10 rounded-full bg-accent-gold text-primary font-bold flex items-center justify-center">{num}</span>
              <div>
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-gray-300 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
