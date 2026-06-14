import UserSidebar from '@/components/UserSidebar';
import DashboardCard from '@/components/DashboardCard';
import DataTable from '@/components/DataTable';

const rows = [
  { id: 'REQ-001', store: 'متجر التقنية', amount: '450 ر.س', reward: '45 ر.س', status: 'under_review' },
  { id: 'REQ-002', store: 'متجر العطور', amount: '230 ر.س', reward: '20 ر.س', status: 'approved' }
];

export default function UserDashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6">
      <UserSidebar />
      <section className="space-y-6">
        <h1 className="text-2xl font-bold">لوحة المستخدم</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <DashboardCard title="الرصيد المتاح" value="240 ر.س" />
          <DashboardCard title="رصيد قيد المراجعة" value="95 ر.س" />
          <DashboardCard title="طلبات المكافآت" value="12" />
        </div>
        <DataTable columns={[{ key: 'id', label: 'رقم الطلب' }, { key: 'store', label: 'المتجر' }, { key: 'amount', label: 'المبلغ' }, { key: 'reward', label: 'المكافأة' }, { key: 'status', label: 'الحالة' }]} rows={rows} />
      </section>
    </main>
  );
}
