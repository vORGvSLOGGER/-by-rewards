import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UploadReceiptForm from '@/components/UploadReceiptForm';
import { createClient } from '@supabase/supabase-js';

interface Props {
  params: { id: string };
}

export default async function OfferDetailPage({ params }: Props) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key');
  const { data: offer, error } = await supabase
    .from('offers')
    .select('id, title, description, image_url, reward_value, reward_type, min_purchase_amount, max_reward_amount, start_date, end_date, terms, purchase_url, partners(id, business_name)')
    .eq('id', params.id)
    .single();
  if (error || !offer) {
    return notFound();
  }
  const partner = Array.isArray((offer as any).partners) ? (offer as any).partners[0] : (offer as any).partners;
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <img src={offer.image_url || '/placeholder_light_gray_block.svg'} alt={offer.title} className="w-full rounded-md object-cover" />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{offer.title}</h1>
            <p className="text-sm text-gray-300">الشريك: {partner?.business_name}</p>
            <p className="text-sm text-gray-300">قيمة المكافأة: {offer.reward_type === 'percentage' ? `${offer.reward_value}%` : `${offer.reward_value} ر.س`}</p>
            <p className="text-sm text-gray-300">الحد الأدنى للشراء: {offer.min_purchase_amount} ر.س</p>
            {offer.max_reward_amount && <p className="text-sm text-gray-300">الحد الأقصى للمكافأة: {offer.max_reward_amount} ر.س</p>}
            <p className="text-sm text-gray-300">مدة العرض: {new Date(offer.start_date).toLocaleDateString('ar-EG')} - {new Date(offer.end_date).toLocaleDateString('ar-EG')}</p>
            <p className="text-sm text-gray-300">الشروط والأحكام: {offer.terms}</p>
            <div className="flex gap-4 mt-4">
              <a href={offer.purchase_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent-gold text-primary rounded-md">انتقل للشراء</a>
              <a href="#upload" className="px-4 py-2 border border-accent-gold text-accent-gold rounded-md">رفع إثبات الشراء</a>
            </div>
            <p className="text-xs text-red-500">لا يتم صرف المكافأة إلا بعد التحقق من العملية.</p>
          </div>
        </div>
        <section id="upload" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">رفع إثبات الشراء</h2>
          <UploadReceiptForm userId="" offerId={offer.id} partnerId={partner?.id || ''} />
        </section>
      </main>
      <Footer />
    </>
  );
}
