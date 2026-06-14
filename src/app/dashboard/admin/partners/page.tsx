import AdminSidebar from '@/components/AdminSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { name: 'متجر التقنية', status: 'verified', offers: 8 },
  { name: 'متجر العطور', status: 'pending', offers: 2 }
];

export default function AdminPartnersPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section><h1 className="text-2xl font-bold mb-6">الشركاء</h1><DataTable columns={[{ key: 'name', label: 'الشريك' }, { key: 'status', label: 'الحالة' }, { key: 'offers', label: 'العروض' }]} rows={rows} /></section></main>;
}
