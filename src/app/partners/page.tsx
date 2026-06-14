'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerCard from '@/components/PartnerCard';
import { supabase } from '@/lib/supabaseClient';

export default function PartnersPage() {
  const [partners, setPartners] = useState<any[]>([]);
  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('partners').select('id, business_name, business_type, verified_at').in('status', ['approved', 'verified']);
      setPartners(data || []);
    }
    load();
  }, []);
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">الشركاء</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => <PartnerCard key={partner.id} id={partner.id} name={partner.business_name} category={partner.business_type || 'متجر'} verified={Boolean(partner.verified_at)} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
