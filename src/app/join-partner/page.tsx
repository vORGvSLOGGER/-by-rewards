'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import Toast from '@/components/Toast';

export default function JoinPartnerPage() {
  const [form, setForm] = useState({ business_name: '', business_type: '', website_url: '', contact_email: '', contact_phone: '', message: '' });
  const [notice, setNotice] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('partner_applications').insert(form);
    setNotice(error ? 'تعذر إرسال الطلب. تحقق من إعداد قاعدة البيانات.' : 'تم إرسال طلب الانضمام بنجاح.');
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">انضم كشريك</h1>
        <p className="text-gray-300 mb-8">أضف متجرك إلى منظومة المكافآت واربط عروضك بجمهور يبحث عن قيمة حقيقية بعد الشراء.</p>
        {notice && <Toast message={notice} type={notice.includes('بنجاح') ? 'success' : 'error'} />}
        <form onSubmit={handleSubmit} className="space-y-4 bg-primary/80 border border-primary-700 rounded-md p-6">
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="اسم النشاط" onChange={(e) => setForm({ ...form, business_name: e.target.value })} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="نوع النشاط" onChange={(e) => setForm({ ...form, business_type: e.target.value })} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="رابط الموقع أو المتجر" onChange={(e) => setForm({ ...form, website_url: e.target.value })} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="البريد الإلكتروني" onChange={(e) => setForm({ ...form, contact_email: e.target.value })} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="رقم التواصل" onChange={(e) => setForm({ ...form, contact_phone: e.target.value })} />
          <textarea className="w-full bg-primary-700 rounded-md p-3 min-h-32" placeholder="رسالة مختصرة" onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="bg-accent-gold text-primary px-6 py-3 rounded-md font-bold">إرسال الطلب</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
