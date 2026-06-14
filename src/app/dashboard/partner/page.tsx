import PartnerSidebar from '@/components/PartnerSidebar';
import DashboardCard from '@/components/DashboardCard';
import DataTable from '@/components/DataTable';

const rows = [
  { id: 'REQ-55', user: 'user@example.com', amount: '300 ر.س', status: 'submitted' },
  { id: 'REQ-56', user: 'buyer@example.com', amount: '120 ر.س', status: 'approved' }
];

export default function PartnerDashboardPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><PartnerSidebar /><section className="space-y-6"><h1 className="text-2xl font-bold">لوحة الشريك</h1><div className="grid md:grid-cols-3 gap-4"><DashboardCard title="العروض النشطة" value="8" /><DashboardCard title="طلبات جديدة" value="24" /><DashboardCard title="قيمة المبيعات المثبتة" value="48,200 ر.س" /></div><DataTable columns={[{ key: 'id', label: 'الطلب' }, { key: 'user', label: 'المستخدم' }, { key: 'amount', label: 'المبلغ' }, { key: 'status', label: 'الحالة' }]} rows={rows} /></section></main>;
}
