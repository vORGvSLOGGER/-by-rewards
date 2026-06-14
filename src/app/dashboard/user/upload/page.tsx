import UserSidebar from '@/components/UserSidebar';
import UploadReceiptForm from '@/components/UploadReceiptForm';

export default function UserUploadPage() {
  return <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[240px_1fr] gap-6"><UserSidebar /><section><h1 className="text-2xl font-bold mb-6">رفع إثبات شراء</h1><UploadReceiptForm userId="" offerId="" partnerId="" /></section></main>;
}
