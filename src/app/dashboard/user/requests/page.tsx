import UserSidebar from '@/components/UserSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { id: 'REQ-001', store: 'متجر التقنية', status: 'under_review', created_at: '2026-06-14' },
  { id: 'REQ-002', store: 'متجر العطور', status: 'approved', created_at: '2026-06-12' }
];

export default function UserRequestsPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><UserSidebar /><section><h1 className="text-2xl font-bold mb-6">طلبات المكافآت</h1><DataTable columns={[{ key: 'id', label: 'رقم الطلب' }, { key: 'store', label: 'المتجر' }, { key: 'status', label: 'الحالة' }, { key: 'created_at', label: 'التاريخ' }]} rows={rows} /></section></main>;
}
