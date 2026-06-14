import AdminSidebar from '@/components/AdminSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { title: 'مكافأة 10%', partner: 'متجر التقنية', status: 'active' },
  { title: '25 ريال', partner: 'متجر العطور', status: 'pending_review' }
];

export default function AdminOffersPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section><h1 className="text-2xl font-bold mb-6">إدارة العروض</h1><DataTable columns={[{ key: 'title', label: 'العرض' }, { key: 'partner', label: 'الشريك' }, { key: 'status', label: 'الحالة' }]} rows={rows} /></section></main>;
}
