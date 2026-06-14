import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-3xl font-bold">من نحن</h1>
        <p className="text-gray-300 leading-loose">
          بواسطة المكافآت هي منصة عربية تساعد المستخدمين على الاستفادة من عمليات الشراء الحقيقية
          عبر مكافآت مالية أو رقمية بعد التحقق من عملية الشراء. المنصة ليست تمويلاً ولا قرضاً،
          وإنما نموذج مكافآت مبني على الشراكات التجارية والتسويق بالأداء.
        </p>
        <p className="text-gray-300 leading-loose">
          الفكرة تجمع بين تجربة المستخدم البسيطة، لوحة تحكم للشركاء، ولوحة رقابية للإدارة
          من أجل مراجعة العمليات، حماية المنظومة من الاحتيال، وإدارة المحافظ والمكافآت.
        </p>
        <p className="text-gray-400 text-sm leading-loose">
          تجارياً، تعتمد المنصة على منطق برامج المكافآت والولاء الحديثة التي تساعد العلامات على
          رفع التفاعل والإنفاق والاحتفاظ بالعملاء عندما تكون تجربة الاستفادة واضحة وسهلة.
        </p>
      </main>
      <Footer />
    </>
  );
}
