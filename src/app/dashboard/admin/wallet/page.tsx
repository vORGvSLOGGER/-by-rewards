import AdminSidebar from '@/components/AdminSidebar';
import WalletBalanceCard from '@/components/WalletBalanceCard';
import DataTable from '@/components/DataTable';

const rows = [
  { id: 'PAY-1', user: 'user@example.com', amount: '120 ر.س', status: 'pending' },
  { id: 'PAY-2', user: 'buyer@example.com', amount: '80 ر.س', status: 'paid' }
];

export default function AdminWalletPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section className="space-y-6"><h1 className="text-2xl font-bold">المحافظ والسحوبات</h1><WalletBalanceCard available="530,000 ر.س" pending="42,000 ر.س" paid="284,000 ر.س" /><DataTable columns={[{ key: 'id', label: 'رقم السحب' }, { key: 'user', label: 'المستخدم' }, { key: 'amount', label: 'المبلغ' }, { key: 'status', label: 'الحالة' }]} rows={rows} /></section></main>;
}
