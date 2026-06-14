import UserSidebar from '@/components/UserSidebar';

export default function UserProfilePage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><UserSidebar /><section className="bg-primary/80 border border-primary-700 rounded-md p-6"><h1 className="text-2xl font-bold mb-4">الملف الشخصي</h1><p className="text-gray-300">تحديث الاسم، رقم الجوال، المدينة، وبيانات السحب.</p></section></main>;
}
