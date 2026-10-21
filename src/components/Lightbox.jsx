import { useEffect, useRef } from "react";
import { gallery } from "../data/cases";

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  const touchStart = useRef(null);
  const index = item ? gallery.findIndex((photo) => photo.id === item.id) : -1;

  useEffect(() => {
    if (!item) {
      document.body.style.overflow = "";
      return;
    }
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNext?.();
      if (e.key === "ArrowRight") onPrev?.();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div
        className="lightbox-panel"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStart.current == null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(dx) > 50) {
            if (dx > 0) onPrev?.(); else onNext?.();
          }
          touchStart.current = null;
        }}
      >
        <div className="lb-stage">
          <img src={item.src} alt={item.title} width={item.width} height={item.height} decoding="async" />
          <button type="button" className="lb-close" onClick={onClose} aria-label="إغلاق">
            ×
          </button>
          <button type="button" className="lb-arrow lb-prev" onClick={onPrev} aria-label="الصورة السابقة">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" className="lb-arrow lb-next" onClick={onNext} aria-label="الصورة التالية">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="lb-meta">
          <div className="lb-meta-copy">
            <span className="lb-badge">معرض الأعمال</span>
            <h3>{item.title}</h3>
          </div>
          <span className="lb-count" dir="ltr">
            {index + 1} / {gallery.length}
          </span>
        </div>
      </div>
    </div>
  );
}
