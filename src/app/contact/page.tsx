'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import Toast from '@/components/Toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [notice, setNotice] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('contact_requests').insert(form);
    setNotice(error ? 'تعذر إرسال الرسالة حالياً.' : 'تم إرسال رسالتك بنجاح.');
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">تواصل معنا</h1>
        {notice && <Toast message={notice} type={notice.includes('بنجاح') ? 'success' : 'error'} />}
        <form onSubmit={handleSubmit} className="space-y-4 bg-primary/80 border border-primary-700 rounded-md p-6">
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="الاسم" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="البريد الإلكتروني" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="الموضوع" onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          <textarea className="w-full bg-primary-700 rounded-md p-3 min-h-32" placeholder="الرسالة" onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="bg-accent-gold text-primary px-6 py-3 rounded-md font-bold">إرسال</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
