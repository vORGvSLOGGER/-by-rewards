import AdminSidebar from '@/components/AdminSidebar';
import DashboardCard from '@/components/DashboardCard';
import DataTable from '@/components/DataTable';

const rows = [
  { event: 'طلب مكافأة جديد', user: 'user@example.com', time: 'قبل 5 دقائق' },
  { event: 'شريك جديد', user: 'store@example.com', time: 'قبل ساعة' }
];

export default function AdminDashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6">
      <AdminSidebar />
      <section className="space-y-6">
        <h1 className="text-2xl font-bold">لوحة الإدارة</h1>
        <div className="grid md:grid-cols-4 gap-4">
          <DashboardCard title="إجمالي المستخدمين" value="12,450" />
          <DashboardCard title="الشركاء" value="86" />
          <DashboardCard title="طلبات قيد المراجعة" value="142" />
          <DashboardCard title="مكافآت مصروفة" value="284,000 ر.س" />
        </div>
        <DataTable columns={[{ key: 'event', label: 'الحدث' }, { key: 'user', label: 'الطرف' }, { key: 'time', label: 'الوقت' }]} rows={rows} />
      </section>
    </main>
  );
}
