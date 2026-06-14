'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : 'تم تسجيل الدخول بنجاح.');
  }

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-6">تسجيل الدخول</h1>
        {message && <Toast message={message} type={message.includes('نجاح') ? 'success' : 'error'} />}
        <form onSubmit={handleSubmit} className="space-y-4 bg-primary/80 border border-primary-700 rounded-md p-6">
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full bg-primary-700 rounded-md p-3" placeholder="كلمة المرور" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-accent-gold text-primary rounded-md py-3 font-bold">دخول</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
