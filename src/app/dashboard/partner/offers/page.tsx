import PartnerSidebar from '@/components/PartnerSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { title: 'استرجاع 10%', reward: '10%', status: 'active' },
  { title: 'مكافأة ثابتة', reward: '25 ر.س', status: 'draft' }
];

export default function PartnerOffersPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><PartnerSidebar /><section><h1 className="text-2xl font-bold mb-6">عروضي</h1><DataTable columns={[{ key: 'title', label: 'العنوان' }, { key: 'reward', label: 'المكافأة' }, { key: 'status', label: 'الحالة' }]} rows={rows} /></section></main>;
}
