# PROMPT (Base44 Vibe Coding) — بواسطة المكافآت | by_REWARDS

ابنِ تطبيق ويب SaaS عربي RTL باسم **by_REWARDS | بواسطة المكافآت**.

## الفكرة
منصة تشغيل ذكية تقدم **مكافآت نقدية بعد الشراء** مرتبطة بعملية شراء حقيقية وموثقة من متجر شريك. الصياغة الرسمية: مكافآت بعد الشراء. تجنب أي صياغة تجعل المنتج يبدو كقرض أو تمويل.

## القواعد غير القابلة للكسر
- لا مكافأة قبل الاستلام.
- لا مكافأة قبل اكتمال الإثباتات.
- رابط واحد فقط لكل عملية.
- أرشفة كاملة لكل إجراء.
- أي عملية غير مطابقة تغلق فورًا.

## الأدوار
- Admin: إدارة كاملة.
- Ops Manager: مراجعة واعتماد العمليات.
- Verifier: تدقيق الإثباتات.
- Partner Store: متابعة طلبات المتجر.
- Customer: إنشاء طلب، رفع إثبات، متابعة المكافأة.

## المسار الأساسي
تسجيل → اختيار باقة → إصدار رابط واحد → شراء → استلام → توثيق → مراجعة → اعتماد → إضافة المكافأة للمحفظة → إغلاق.

## الباقات
- باقة 200: منتج محدد، مكافأة محددة، متطلبات توثيق أساسية.
- باقة 700: منتج محدد، مكافأة أعلى، تحقق أقوى.

## الصفحات المطلوبة
### Public
- Landing Page فخمة.
- كيف تعمل المنصة.
- الشروط والسياسات.
- تواصل.

### Customer
- لوحة العميل.
- إنشاء طلب جديد.
- تفاصيل الطلب مع Stepper.
- رفع إثباتات.
- محفظة المكافآت.

### Ops
- Dashboard KPIs.
- Review Queue.
- Verification Screen.
- Audit Log.
- Fraud Flags.

### Admin
- Packages CRUD.
- Partners CRUD.
- Users & Roles.
- Rules & Proof Requirements.

### Partner
- طلبات المتجر.
- تحديثات الشحن والاستلام.
- إعدادات المتجر.

## نموذج البيانات
- users_profile
- partners
- reward_packages
- reward_orders
- order_proofs
- wallets
- wallet_transactions
- audit_logs
- fraud_flags

## State Machine
`draft → link_issued → purchased → delivered → proof_submitted → under_review → approved | rejected → paid → closed`

لا تسمح بالقفز بين الحالات.

## UI Style
- RTL كامل.
- Dark premium interface.
- Indigo/Cyan accents.
- Cards + glassmorphism + Stepper.
- جداول احترافية وفلاتر واضحة.
- أزرار حية وحالات واضحة.

## MVP Acceptance Criteria
- العميل ينشئ طلبًا.
- النظام يصدر رابطًا واحدًا.
- العميل يرفع إثباتات بعد الاستلام.
- العمليات تراجع وتقبل أو ترفض.
- عند القبول تضاف المكافأة إلى المحفظة.
- كل خطوة تسجل في Audit Log.

ابدأ البناء مباشرة. عند الغموض اختر الخيار الأكثر تحفظًا تشغيليًا وأمنيًا.
