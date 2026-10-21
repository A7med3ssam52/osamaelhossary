import { useEffect, useRef } from "react";
import { gallery } from "../data/cases";

export default function Lightbox({ item, onClose, onPrev, onNext, onSelect }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const thumbRefs = useRef([]);
  const touchStart = useRef(null);
  const isOpen = Boolean(item);
  const index = item ? gallery.findIndex((photo) => photo.id === item.id) : -1;

  // Lock body scroll and restore focus when the viewer closes.
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  // Keyboard navigation and focus trap.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onNext?.();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onPrev?.();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  // Keep the active thumbnail centered in the strip.
  useEffect(() => {
    if (!isOpen) return;
    thumbRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [isOpen, index]);

  if (!item) return null;

  const current = String(index + 1).padStart(2, "0");
  const total = String(gallery.length).padStart(2, "0");

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="معرض أعمال د. أسامة محمد الحصري"
      onClick={onClose}
    >
      <div
        className="lightbox-panel"
        ref={panelRef}
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
        <div className="lb-top">
          <div className="lb-heading">
            <span className="lb-badge">معرض الأعمال</span>
            <span className="lb-name">د. أسامة محمد الحصري</span>
          </div>
          <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label="إغلاق المعرض">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="lb-stage">
          <img
            key={item.id}
            src={item.src}
            alt={`صورة ${index + 1} من أعمال د. أسامة الحصري`}
            width={item.width}
            height={item.height}
            decoding="async"
          />
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

        <div className="lb-bottom">
          <div className="lb-counter" dir="ltr" aria-live="polite">
            <span className="lb-current">{current}</span>
            <span className="lb-sep">/</span>
            <span className="lb-total">{total}</span>
          </div>
          <div className="lb-thumbs" aria-label="صور المعرض">
            {gallery.map((photo, i) => (
              <button
                key={photo.id}
                ref={(el) => { thumbRefs.current[i] = el; }}
                type="button"
                className={`lb-thumb${i === index ? " is-active" : ""}`}
                aria-label={`الصورة ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => onSelect?.(photo)}
              >
                <img src={photo.thumb} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
