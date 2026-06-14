const notifications = [
  { title: 'تم قبول طلبك', body: 'تم اعتماد مكافأة طلب ORD-101.' },
  { title: 'طلب بحاجة لمعلومة', body: 'يرجى إرفاق فاتورة أوضح.' }
];

export default function NotificationDropdown() {
  return (
    <div className="bg-primary/80 border border-primary-700 rounded-md p-4 space-y-3">
      {notifications.map((item) => (
        <div key={item.title} className="border-b border-primary-700 pb-3 last:border-0">
          <p className="font-bold text-sm">{item.title}</p>
          <p className="text-xs text-gray-400 mt-1">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
