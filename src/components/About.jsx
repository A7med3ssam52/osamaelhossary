import { doctor } from "../data/doctor";
import IdCard from "./IdCard";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="about-text reveal">
          <span className="eyebrow">عن الدكتور</span>
          <h2>د. أسامة محمد الحصري</h2>
          <p className="about-bio">{doctor.bio}</p>
          <a href="#services" className="about-link">
            تعرّف على الخدمات
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <IdCard />
      </div>
    </section>
  );
}
