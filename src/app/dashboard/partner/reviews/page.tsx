'use client';
import { useState } from 'react';
import PartnerSidebar from '@/components/PartnerSidebar';
import DataTable from '@/components/DataTable';
import ReviewModal from '@/components/ReviewModal';

const rows = [
  { id: 'REQ-55', order: 'ORD-9988', amount: '300 ر.س', status: 'submitted' },
  { id: 'REQ-56', order: 'ORD-1020', amount: '120 ر.س', status: 'needs_user_action' }
];

export default function PartnerReviewsPage() {
  const [open, setOpen] = useState(false);
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><PartnerSidebar /><section><div className="flex items-center justify-between mb-6"><h1 className="text-2xl font-bold">مراجعة العمليات</h1><button onClick={() => setOpen(true)} className="bg-accent-gold text-primary px-4 py-2 rounded-md">فتح عملية</button></div><DataTable columns={[{ key: 'id', label: 'الطلب' }, { key: 'order', label: 'رقم الطلب' }, { key: 'amount', label: 'المبلغ' }, { key: 'status', label: 'الحالة' }]} rows={rows} /><ReviewModal open={open} title="مراجعة عملية شريك" onClose={() => setOpen(false)} onApprove={() => setOpen(false)} onReject={() => setOpen(false)} /></section></main>;
}
