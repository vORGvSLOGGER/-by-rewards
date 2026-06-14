import AdminSidebar from '@/components/AdminSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { flag_type: 'duplicate_order', severity: 4, user: 'user@example.com', status: 'open' },
  { flag_type: 'suspicious_receipt', severity: 3, user: 'buyer@example.com', status: 'reviewing' }
];

export default function AdminFraudPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section><h1 className="text-2xl font-bold mb-6">مراقبة الاحتيال</h1><DataTable columns={[{ key: 'flag_type', label: 'نوع الإشارة' }, { key: 'severity', label: 'الخطورة' }, { key: 'user', label: 'المستخدم' }, { key: 'status', label: 'الحالة' }]} rows={rows} /></section></main>;
}
