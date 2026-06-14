import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfferCard from '@/components/OfferCard';
import { createClient } from '@supabase/supabase-js';

interface Props {
  params: { id: string };
}

export default async function PartnerDetailPage({ params }: Props) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key');
  const { data: partner, error } = await supabase
    .from('partners')
    .select('id, business_name, business_type, website_url, store_url, contact_email, contact_phone, verified_at')
    .eq('id', params.id)
    .single();
  if (error || !partner) return notFound();
  const { data: offers } = await supabase
    .from('offers')
    .select('id, title, image_url, reward_value, end_date')
    .eq('partner_id', params.id)
    .eq('status', 'active');
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-primary/80 p-6 rounded-md border border-primary-700">
          <h1 className="text-3xl font-bold mb-2">{partner.business_name}</h1>
          <p className="text-sm text-gray-300 mb-1">نوع النشاط: {partner.business_type || 'غير محدد'}</p>
          <p className="text-sm text-gray-300 mb-1">البريد: {partner.contact_email || 'غير متوفر'}</p>
          <p className="text-sm text-gray-300 mb-1">الجوال: {partner.contact_phone || 'غير متوفر'}</p>
          {partner.website_url && <p className="text-sm text-gray-300 mb-1">الموقع الإلكتروني: <a href={partner.website_url} className="text-accent-gold underline" target="_blank">{partner.website_url}</a></p>}
          {partner.store_url && <p className="text-sm text-gray-300">رابط المتجر: <a href={partner.store_url} className="text-accent-gold underline" target="_blank">{partner.store_url}</a></p>}
          <p className="text-sm text-gray-300 mt-2">حالة التوثيق: {partner.verified_at ? 'موثّق' : 'غير موثّق'}</p>
        </div>
        <section>
          <h2 className="text-2xl font-bold mb-4">العروض الحالية</h2>
          {offers && offers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer: any) => (
                <OfferCard
                  key={offer.id}
                  id={offer.id}
                  image={offer.image_url || '/placeholder_light_gray_block.svg'}
                  storeName={partner.business_name}
                  title={offer.title}
                  rewardValue={`${offer.reward_value}`}
                  expiry={new Date(offer.end_date).toLocaleDateString('ar-EG')}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400">لا توجد عروض لهذا الشريك حالياً.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
