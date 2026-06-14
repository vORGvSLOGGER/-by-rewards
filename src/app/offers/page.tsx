'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfferCard from '@/components/OfferCard';
import FilterBar from '@/components/FilterBar';
import { supabase } from '@/lib/supabaseClient';

export default function OffersPage() {
  const [offers, setOffers] = useState<any[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('offers').select('id, title, image_url, reward_value, reward_type, end_date, partners(business_name)').eq('status', 'active');
      setOffers(data || []);
    }
    load();
  }, []);

  const filtered = offers.filter((offer) => offer.title?.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">العروض المتاحة</h1>
          <p className="text-gray-300 mt-2">اختر العرض، اشتر من الشريك، ثم ارفع الإثبات لتحصل على المكافأة.</p>
        </div>
        <FilterBar search={query} onSearch={setQuery} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((offer) => {
            const partner = Array.isArray(offer.partners) ? offer.partners[0] : offer.partners;
            return (
              <OfferCard
                key={offer.id}
                id={offer.id}
                title={offer.title}
                image={offer.image_url || '/placeholder_light_gray_block.svg'}
                storeName={partner?.business_name || 'شريك معتمد'}
                rewardValue={`${offer.reward_value}${offer.reward_type === 'percentage' ? '%' : ' ر.س'}`}
                expiry={new Date(offer.end_date).toLocaleDateString('ar-EG')}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
