# بواسطة المكافآت | By REWARDS

منصة عربية RTL لمكافأة المستخدمين بعد عمليات شراء موثّقة.  الفكرة ليست قرضاً ولا تمويلاً ولا بيعاً بالتقسيط؛ هي منظومة مكافآت يحصل فيها المستخدم على مكافأة بعد إثبات عملية شراء حقيقية من شريك أو متجر معتمد.

## الفكرة التجارية

- المستخدم يشتري من متجر شريك.
- يرفع إثبات الشراء أو يتم التحقق عبر API مستقبلاً.
- الإدارة أو الشريك يراجع العملية.
- عند اعتماد العملية تنتقل المكافأة إلى المحفظة.
- دخل المنصة يأتي من العمولات، الشراكات، الحملات التسويقية، الخصومات، واشتراكات الشركاء.

## لماذا النموذج قوي؟

برامج المكافآت والولاء لم تعد مجرد خصومات، بل أصبحت أدوات استراتيجية لزيادة الإنفاق والاحتفاظ بالعملاء. تشير Deloitte إلى أن 72% من المستهلكين يصبحون أكثر ميلاً للشراء من علامة بسبب برنامج الولاء، وأن 56% يزيدون إنفاقهم بسبب هذه البرامج.  كما توصي Deloitte بأن تكون عملية الاستفادة من المكافآت سهلة، وأن تستخدم الأدوات الرقمية والإشعارات والعروض الشخصية.  وتوضح مصادر متخصصة مثل Comarch أن مصادر الدخل في برامج الولاء قد تشمل الرسوم، زيادة الإنفاق، الاحتفاظ بالعملاء، البيع المتقاطع، وخفض تكاليف التسويق.

## الصفحات العامة

- `/` الصفحة الرئيسية.
- `/how-it-works` كيف تعمل المنصة.
- `/offers` العروض.
- `/offers/[id]` تفاصيل العرض ورفع إثبات الشراء.
- `/partners` الشركاء.
- `/partners/[id]` صفحة الشريك.
- `/join-partner` طلب انضمام شريك.
- `/about` من نحن.
- `/contact` تواصل معنا.
- `/auth/login` تسجيل الدخول.
- `/auth/signup` إنشاء حساب.

## لوحات التحكم

### المستخدم

- `/dashboard/user`
- `/dashboard/user/wallet`
- `/dashboard/user/requests`
- `/dashboard/user/upload`
- `/dashboard/user/notifications`
- `/dashboard/user/profile`

### الشريك

- `/dashboard/partner`
- `/dashboard/partner/offers`
- `/dashboard/partner/reviews`
- `/dashboard/partner/settings`

### الإدارة

- `/dashboard/admin`
- `/dashboard/admin/users`
- `/dashboard/admin/partners`
- `/dashboard/admin/offers`
- `/dashboard/admin/requests`
- `/dashboard/admin/wallet`
- `/dashboard/admin/fraud`
- `/dashboard/admin/activity-log`
- `/dashboard/admin/settings`

## قاعدة البيانات

ملف المخطط موجود هنا:

```bash
/db/schema.sql
```

يشمل:

- Users
- Profiles
- Partners
- Offers
- Reward Requests
- Wallets
- Wallet Transactions
- Payout Requests
- Notifications
- Fraud Flags
- Activity Logs
- Settings

## التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح:

```bash
http://localhost:3000
```

## متغيرات البيئة

انسخ `.env.local.example` إلى `.env.local` وضع بيانات Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## النشر على Vercel

1. ارفع المشروع إلى GitHub.
2. اربطه مع Vercel.
3. أضف متغيرات البيئة في Vercel.
4. Deploy.

## ملاحظات أمنية مهمة

- يجب تفعيل Row Level Security في Supabase قبل الإطلاق.
- لا تستخدم مفاتيح Service Role في المتصفح.
- اقبل فقط ملفات إثبات شراء من نوع PDF/JPG/PNG/WebP.
- ضع حد حجم للملفات لتجنب إساءة الاستخدام.
- أضف فحص تكرار رقم الطلب والصورة لتقليل الاحتيال.
- اجعل صرف المكافآت بعد اعتماد يدوي أو تحقق API فقط.

## الحالة الحالية

هذه نسخة MVP قابلة للتوسع، وليست نسخة تشغيل إنتاجي نهائي.  تحتاج قبل الإطلاق الحقيقي إلى:

- إعداد Supabase فعلي.
- تفعيل RLS.
- إنشاء سياسات الصلاحيات.
- ربط بوابة دفع أو نظام تحويل.
- إضافة API للشركاء مستقبلاً.
- إضافة نظام تحقق آلي للطلبات.
