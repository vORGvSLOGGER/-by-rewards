'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import DataTable from '@/components/DataTable';
import ReviewModal from '@/components/ReviewModal';

const rows = [
  { id: 'REQ-101', user: 'user@example.com', partner: 'متجر التقنية', amount: '450 ر.س', status: 'under_review' },
  { id: 'REQ-102', user: 'buyer@example.com', partner: 'متجر العطور', amount: '230 ر.س', status: 'submitted' }
];

export default function AdminRequestsPage() {
  const [open, setOpen] = useState(false);
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6">
      <AdminSidebar />
      <section>
        <div className="flex items-center justify-between mb-6"><h1 className="text-2xl font-bold">طلبات المكافآت</h1><button onClick={() => setOpen(true)} className="bg-accent-gold text-primary rounded-md px-4 py-2">فتح المراجعة</button></div>
        <DataTable columns={[{ key: 'id', label: 'رقم الطلب' }, { key: 'user', label: 'المستخدم' }, { key: 'partner', label: 'الشريك' }, { key: 'amount', label: 'المبلغ' }, { key: 'status', label: 'الحالة' }]} rows={rows} />
        <ReviewModal open={open} title="مراجعة طلب مكافأة" onClose={() => setOpen(false)} onApprove={() => setOpen(false)} onReject={() => setOpen(false)} />
      </section>
    </main>
  );
}
