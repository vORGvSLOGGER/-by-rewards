import UserSidebar from '@/components/UserSidebar';
import NotificationDropdown from '@/components/NotificationDropdown';

export default function UserNotificationsPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><UserSidebar /><section><h1 className="text-2xl font-bold mb-6">الإشعارات</h1><NotificationDropdown /></section></main>;
}
