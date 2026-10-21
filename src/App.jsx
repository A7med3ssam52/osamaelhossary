import { useState, useEffect, useCallback } from "react";
import { gallery } from "./data/cases";
import { doctor, whatsappLink } from "./data/doctor";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Values from "./components/Values";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Ensure scroll is never locked on load
  useEffect(() => { document.body.style.overflow = ""; }, []);

  // Reveal on scroll (with safety fallback so content never stays hidden)
  useEffect(() => {
    const els = [...document.querySelectorAll(".reveal")];
    const reveal = (el) => { el.dataset.visible = "true"; };
    let fired = false;

    const io = new IntersectionObserver(
      (entries) => {
        fired = true;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: if the observer never fires (hidden tab, etc.), show content.
    const fallback = setTimeout(() => { if (!fired) els.forEach(reveal); }, 2500);
    const onVisibility = () => {
      if (!document.hidden) els.forEach(reveal);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Scroll spy
  useEffect(() => {
    const ids = ["home", "about", "services", "cases", "contact"];
    const onScroll = () => {
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openLightbox = useCallback((item) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);
  const navigate = useCallback((dir) => {
    setLightboxItem((prev) => {
      if (!prev) return prev;
      const idx = gallery.findIndex((photo) => photo.id === prev.id);
      const nextIdx = (idx + dir + gallery.length) % gallery.length;
      return gallery[nextIdx];
    });
  }, []);
  const goPrev = useCallback(() => navigate(-1), [navigate]);
  const goNext = useCallback(() => navigate(1), [navigate]);

  const navLinks = [
    { href: "#home", id: "home", label: "الرئيسية" },
    { href: "#about", id: "about", label: "عن الدكتور" },
    { href: "#services", id: "services", label: "الخدمات" },
    { href: "#cases", id: "cases", label: "الحالات" },
    { href: "#contact", id: "contact", label: "تواصل" },
  ];

  return (
    <>
      <div className="dental-bg" aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <span className="brand-mark">أس</span>
            <span>د. أسامة</span>
          </a>
          <button
            type="button"
            className={`menu-btn ${menuOpen ? "is-open" : ""}`}
            aria-label="القائمة"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="الرئيسية">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={activeSection === l.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Values />
        <Gallery onOpen={openLightbox} />
        <Contact />
      </main>
      <Footer />

      {doctor.whatsapp && (
        <a
          href={whatsappLink}
          className="fab-wa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}

      <Lightbox
        item={lightboxItem}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
}
