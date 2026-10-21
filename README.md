# بورتفوليو د. أسامة محمد الحصري

One Page (React + Vite) يُفتح عبر QR Code، Mobile-First ويبدو جيداً على الديسكتوب.
يعرض معرض صور لأعمال وحالات طب الأسنان.

## تشغيل محلي
```bash
npm install
npm run dev
```
ثم افتح http://localhost:5173

## بناء للإنتاج
```bash
npm run build
```
المخرجات في `dist/` — استضفها على GitHub Pages / Netlify / Vercel، ووجّه QR Code إلى الرابط.

## تخصيص المحتوى

### معلومات الدكتور
عدّل `src/data/doctor.js`:
- الاسم، المسمى، مكان العمل، النبذة، التخصصات، الموقع، ساعات العمل.
- `whatsapp`: ضع رقم WhatsApp (بدون + أو مسافات)، مثال `9647XXXXXXXXX`. عند تركه فارغاً يبقى الزر placeholder.
- `instagram`: رابط (اختياري).

### إضافة/تعديل صور الأعمال
1. ضع الصور في `public/cases/`.
2. عدّل `src/data/cases.js` وأضف عنصراً داخل `gallery`:
   ```js
   { id: 18, src: "/cases/my-photo.jpg", title: "وصف الحالة", width: 960, height: 1280 }
   ```
   `width` و`height` هما أبعاد الصورة الأصلية (لمنع اهتزاز التخطيط أثناء التحميل).

### صور Doctor
استبدل `doctor.avatar` في `src/data/doctor.js` (رابط أو path في `public/`).

## ملاحظات
- صور المعرض محلية بالكامل من `public/cases/` — لا تحتاج إنترنت.
- لتحسين الأداء: استخدم WebP/AVIF، قياس ≤1200px.
- دعم RTL مفعّل (lang="ar" dir="rtl").
