import { gallery } from "../data/cases";

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Gallery({ onOpen }) {
  return (
    <section id="cases" className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">معرض الأعمال</span>
          <h2>أبرز أعمالنا</h2>
          <p className="section-sub">
            لقطات من الحالات والعلاجات داخل العيادة — اضغط على أي صورة لعرضها بالحجم الكامل.
          </p>
        </header>

        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className="gallery-item reveal"
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              onClick={() => onOpen(item)}
              aria-label={`عرض صورة: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="gallery-shade" aria-hidden="true" />
              <span className="gallery-caption" aria-hidden="true">{item.title}</span>
              <span className="gallery-expand" aria-hidden="true">
                <ExpandIcon />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
