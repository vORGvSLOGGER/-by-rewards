import PartnerSidebar from '@/components/PartnerSidebar';

export default function PartnerSettingsPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><PartnerSidebar /><section className="bg-primary/80 border border-primary-700 rounded-md p-6"><h1 className="text-2xl font-bold mb-4">إعدادات الشريك</h1><p className="text-gray-300">معلومات المتجر، روابط الشراء، إعدادات الإشعارات، ومفاتيح API المستقبلية.</p></section></main>;
}
