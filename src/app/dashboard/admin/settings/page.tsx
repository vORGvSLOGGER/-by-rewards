import AdminSidebar from '@/components/AdminSidebar';

export default function AdminSettingsPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar /><section className="bg-primary/80 border border-primary-700 rounded-md p-6"><h1 className="text-2xl font-bold mb-4">إعدادات المنصة</h1><div className="space-y-3 text-gray-300"><p>الحد الأدنى للسحب: 50 ر.س</p><p>مدة مراجعة الطلبات: 24 - 72 ساعة</p><p>حالة المنصة: نشطة</p></div></section></main>;
}
