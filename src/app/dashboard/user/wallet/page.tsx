import UserSidebar from '@/components/UserSidebar';
import WalletBalanceCard from '@/components/WalletBalanceCard';
import DataTable from '@/components/DataTable';

const rows = [
  { type: 'reward_approved', amount: '45 ر.س', status: 'completed', created_at: '2026-06-12' },
  { type: 'payout_requested', amount: '100 ر.س', status: 'pending', created_at: '2026-06-10' }
];

export default function UserWalletPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><UserSidebar /><section className="space-y-6"><h1 className="text-2xl font-bold">المحفظة</h1><WalletBalanceCard available="240 ر.س" pending="95 ر.س" paid="380 ر.س" /><DataTable columns={[{ key: 'type', label: 'النوع' }, { key: 'amount', label: 'المبلغ' }, { key: 'status', label: 'الحالة' }, { key: 'created_at', label: 'التاريخ' }]} rows={rows} /></section></main>;
}
