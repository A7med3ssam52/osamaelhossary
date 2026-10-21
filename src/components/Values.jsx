const items = [
  {
    title: "دقة في التشخيص",
    desc: "تقييم شامل وخطة علاج واضحة قبل البدء.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "مواد عالية الجودة",
    desc: "استخدام مواد موثوقة (زركون، composite، إلخ).",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "تجربة مريحة",
    desc: "بيئة هادئة وشرح كل خطوة للمريض.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section className="section section-alt">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">فلسفتنا</span>
          <h2>لماذا تختارنا</h2>
          <p className="section-sub">
            نركز على نتائج طبيعية وتجربة علاج مريحة وموثوقة.
          </p>
        </header>
        <div className="values-grid">
          {items.map((it, i) => (
            <article
              className={`value-card service-card reveal ${i === 0 ? "is-wide" : ""}`}
              key={it.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="service-top">
                <span className="service-icon">{it.icon}</span>
                <span className="service-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
