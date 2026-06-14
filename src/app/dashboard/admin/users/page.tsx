import AdminSidebar from '@/components/AdminSidebar';
import DataTable from '@/components/DataTable';

const rows = [
  { name: 'أحمد', email: 'ahmad@example.com', role: 'user', status: 'active' },
  { name: 'سارة', email: 'sarah@example.com', role: 'partner', status: 'active' }
];

export default function AdminUsersPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section><h1 className="text-2xl font-bold mb-6">المستخدمون</h1><DataTable columns={[{ key: 'name', label: 'الاسم' }, { key: 'email', label: 'البريد' }, { key: 'role', label: 'الدور' }, { key: 'status', label: 'الحالة' }]} rows={rows} /></section></main>;
}
