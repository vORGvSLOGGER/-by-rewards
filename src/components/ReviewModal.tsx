interface ReviewModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export default function ReviewModal({ open, title, onClose, onApprove, onReject }: ReviewModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-primary border border-primary-700 rounded-md p-6 max-w-lg w-full">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-sm text-gray-300 mb-6">راجع الإيصال، رقم الطلب، المبلغ، وتاريخ الشراء قبل اتخاذ القرار.</p>
        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-md border border-primary-600">إغلاق</button>
          <button onClick={onReject} className="px-4 py-2 rounded-md bg-red-600">رفض</button>
          <button onClick={onApprove} className="px-4 py-2 rounded-md bg-accent-green text-white">اعتماد</button>
        </div>
      </div>
    </div>
  );
}
