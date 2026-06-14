import AdminSidebar from '@/components/AdminSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { action: 'approve_reward', actor: 'admin@byrewards.sa', entity: 'reward_request', created_at: '2026-06-14 13:00' },
  { action: 'pause_offer', actor: 'manager@byrewards.sa', entity: 'offer', created_at: '2026-06-14 12:42' }
];

export default function AdminActivityLogPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section><h1 className="text-2xl font-bold mb-6">سجل النشاط</h1><DataTable columns={[{ key: 'action', label: 'الإجراء' }, { key: 'actor', label: 'المنفذ' }, { key: 'entity', label: 'الكيان' }, { key: 'created_at', label: 'الوقت' }]} rows={rows} /></section></main>;
}
