'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import { supabase } from '@/lib/supabaseClient';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return setMessage(error.message);
    if (data.user) {
      await supabase.from('profiles').insert({ user_id: data.user.id, full_name: fullName });
    }
    setMessage('تم إنشاء الحساب. تحقق من بريدك إذا كان التفعيل مفعلاً.');
  }

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-6">إنشاء حساب</h1>
        {message && <Toast message={message} type={message.includes('تم') ? 'success' : 'error'} />}
        <form onSubmit={handleSubmit} className="space-y-4 bg-primary/80 border border-primary-700 rounded-md p-6">
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="الاسم الكامل" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="كلمة المرور" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-accent-gold text-primary rounded-md py-3 font-bold">تسجيل</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
