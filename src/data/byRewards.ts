export type OrderStatus =
  | 'draft'
  | 'link_issued'
  | 'purchased'
  | 'delivered'
  | 'proof_submitted'
  | 'under_review'
  | 'approved'
  | 'rejected'
  | 'paid'
  | 'closed';

export const orderStatusLabels: Record<OrderStatus, string> = {
  draft: 'مسودة',
  link_issued: 'تم إصدار الرابط',
  purchased: 'تم الشراء',
  delivered: 'تم الاستلام',
  proof_submitted: 'تم رفع الإثبات',
  under_review: 'تحت المراجعة',
  approved: 'معتمد',
  rejected: 'مرفوض',
  paid: 'تم صرف المكافأة',
  closed: 'مغلق',
};

export const orderFlow: Array<{ status: OrderStatus; title: string; description: string }> = [
  { status: 'draft', title: 'إنشاء الطلب', description: 'اختيار الباقة والمتجر الشريك.' },
  { status: 'link_issued', title: 'إرسال الرابط', description: 'رابط واحد فقط لكل عملية.' },
  { status: 'purchased', title: 'إتمام الشراء', description: 'إدخال رقم الطلب وتثبيت العملية.' },
  { status: 'delivered', title: 'تأكيد الاستلام', description: 'لا توجد مكافأة قبل الاستلام.' },
  { status: 'proof_submitted', title: 'رفع الإثبات', description: 'فاتورة، صورة المنتج، أو تتبع الشحنة.' },
  { status: 'under_review', title: 'مراجعة العمليات', description: 'فحص مطابق للشروط ومكافحة الاحتيال.' },
  { status: 'approved', title: 'اعتماد الطلب', description: 'الطلب مؤهل لصرف المكافأة.' },
  { status: 'paid', title: 'صرف المكافأة', description: 'إضافة المكافأة لمحفظة العميل.' },
  { status: 'closed', title: 'إغلاق وأرشفة', description: 'حفظ سجل تدقيق كامل للعملية.' },
];

export const packages = [
  {
    id: 'pkg-200',
    name: 'باقة 200',
    price: 200,
    rewardAmount: 200,
    opsFee: 25,
    linkExpiryHours: 12,
    maxPerUserPerMonth: 2,
    description: 'باقة تشغيل سريعة لمنتج محدد، مكافأتها تصرف بعد الشراء والاستلام والتوثيق.',
    requirements: ['فاتورة الشراء', 'رقم الطلب', 'إثبات الاستلام', 'صورة المنتج'],
  },
  {
    id: 'pkg-700',
    name: 'باقة 700',
    price: 700,
    rewardAmount: 700,
    opsFee: 65,
    linkExpiryHours: 12,
    maxPerUserPerMonth: 1,
    description: 'باقة أعلى بقواعد تحقق أقوى وأولوية مراجعة من فريق العمليات.',
    requirements: ['فاتورة الشراء', 'رقم الطلب', 'إثبات الاستلام', 'صورة المنتج', 'تتبع الشحنة'],
  },
];

export const partners = [
  { id: 'partner-1', name: 'متجر التقنية', category: 'إلكترونيات', status: 'نشط', sla: '24 ساعة' },
  { id: 'partner-2', name: 'متجر المنزل', category: 'منتجات منزلية', status: 'نشط', sla: '36 ساعة' },
  { id: 'partner-3', name: 'متجر أسلوب', category: 'منتجات نمط حياة', status: 'تجريبي', sla: '48 ساعة' },
];

export const operationRules = [
  'لا تحويل قبل الاستلام والتوثيق.',
  'رابط واحد فقط لكل عملية وينتهي بعد أول استخدام أو انتهاء المدة.',
  'إثباتات إلزامية: فاتورة، رقم طلب، إثبات استلام، وصورة المنتج.',
  'أي اختلاف في رقم الطلب أو تكرار بيانات العملية يؤدي للإيقاف الفوري.',
  'كل تغيير حالة يجب أن يسجل في Audit Log.',
  'تجنب استخدام كلمة سيولة في الواجهة؛ الصياغة الرسمية: مكافآت بعد الشراء.',
];

export const reviewQueue = [
  {
    id: 'RW-1024',
    customer: 'عميل تجريبي',
    packageName: 'باقة 200',
    partner: 'متجر التقنية',
    status: 'under_review' as OrderStatus,
    reward: 200,
    fraudScore: 12,
    submittedAt: 'اليوم 02:15 م',
  },
  {
    id: 'RW-1025',
    customer: 'عميل جديد',
    packageName: 'باقة 700',
    partner: 'متجر المنزل',
    status: 'proof_submitted' as OrderStatus,
    reward: 700,
    fraudScore: 37,
    submittedAt: 'اليوم 01:40 م',
  },
  {
    id: 'RW-1026',
    customer: 'عميل موثّق',
    packageName: 'باقة 200',
    partner: 'متجر أسلوب',
    status: 'approved' as OrderStatus,
    reward: 200,
    fraudScore: 6,
    submittedAt: 'أمس 09:10 م',
  },
];

export const kpis = [
  { label: 'طلبات تحت المراجعة', value: '18', hint: '+4 اليوم' },
  { label: 'مكافآت جاهزة للصرف', value: '9', hint: 'بعد اعتماد العمليات' },
  { label: 'متوسط المراجعة', value: '21 ساعة', hint: 'ضمن SLA' },
  { label: 'تنبيهات احتيال', value: '3', hint: 'تحتاج قرار' },
];
