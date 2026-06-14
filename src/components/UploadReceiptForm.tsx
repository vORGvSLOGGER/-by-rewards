'use client';
import { useState } from 'react';
import Toast from './Toast';
import { supabase } from '@/lib/supabaseClient';

interface Props {
  userId: string;
  offerId: string;
  partnerId: string;
}

export default function UploadReceiptForm({ userId, offerId, partnerId }: Props) {
  const [orderNumber, setOrderNumber] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const allowed = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return setMessage('يرجى إرفاق إثبات الشراء.');
    if (!allowed.includes(file.type)) return setMessage('نوع الملف غير مدعوم.');
    if (file.size > 5 * 1024 * 1024) return setMessage('حجم الملف يجب ألا يتجاوز 5MB.');

    const filePath = `receipts/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from('receipts').upload(filePath, file);
    if (uploadError) return setMessage('تعذر رفع الملف. تأكد من إعداد Storage.');

    const { data: publicUrl } = supabase.storage.from('receipts').getPublicUrl(filePath);
    const { error } = await supabase.from('reward_requests').insert({
      user_id: userId || null,
      offer_id: offerId || null,
      partner_id: partnerId || null,
      order_number: orderNumber,
      purchase_amount: Number(purchaseAmount),
      purchase_date: purchaseDate,
      receipt_file_url: publicUrl.publicUrl,
      status: 'submitted'
    });
    setMessage(error ? 'تعذر إرسال الطلب.' : 'تم إرسال طلب المكافأة بنجاح.');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-primary/80 border border-primary-700 rounded-md p-6 space-y-4">
      {message && <Toast message={message} type={message.includes('نجاح') ? 'success' : 'error'} />}
      <input className="w-full bg-primary-700 rounded-md p-3" placeholder="رقم الطلب" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
      <input className="w-full bg-primary-700 rounded-md p-3" placeholder="مبلغ الشراء" value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} />
      <input className="w-full bg-primary-700 rounded-md p-3" type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
      <input className="w-full bg-primary-700 rounded-md p-3" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="bg-accent-gold text-primary px-6 py-3 rounded-md font-bold">إرسال الطلب</button>
    </form>
  );
}
