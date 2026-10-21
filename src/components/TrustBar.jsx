const items = [
  {
    title: "طبيب إمتياز",
    desc: "مستشفى كلية طب الأسنان",
    meta: "جامعة قناة السويس",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3 6 6 .8-4.5 4.2 1.2 6.2L12 16l-5.7 3.2 1.2-6.2L3 8.8 9 8l3-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "جامعة قناة السويس",
    desc: "كلية طب الأسنان",
    meta: "Suez Canal University",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-6 9 6-9 6-9-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M5 11v6c0 1.5 3.1 3 7 3s7-1.5 7-3v-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "حالات موثقة",
    desc: "قبل / بعد",
    meta: "نتائج حقيقية",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 15l5-5 4 4 4-6 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "رعاية ودودة",
    desc: "تركيز على المريض",
    meta: "تجربة مريحة",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.2 8.5 21.5 12 19 16.5 12 21 12 21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="trust-section" aria-label="مميزات">
      <div className="container">
        <div className="trust-bento">
          {items.map((it, i) => (
            <article className={`trust-card ${i === 0 ? "is-primary" : ""}`} key={it.title}>
              <span className="trust-index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="trust-icon">{it.icon}</div>
              <div className="trust-copy">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <span className="trust-meta">{it.meta}</span>
              </div>
              <span className="trust-glow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
