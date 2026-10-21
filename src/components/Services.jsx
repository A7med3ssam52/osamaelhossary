import { services } from "../data/services";
import { doctor, whatsappLink } from "../data/doctor";

const icons = {
  whitening: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5.5c-1.7 0-2.8 1-3.5 1.7-.4.4-1 .6-1.5.4-.9-.3-1.8.3-2 1.2-.2.8.2 1.5.4 2.3.3 1.4.2 2.8.7 4.8.3 1.1.8 2 1.5 2 .8 0 1.2-1 1.4-2 .2-.8.5-1.4 1.2-1.4h.6c.7 0 1 .6 1.2 1.4.2 1 .6 2 1.4 2 .7 0 1.2-.9 1.5-2 .5-2 .4-3.4.7-4.8.2-.8.6-1.5.4-2.3-.2-.9-1.1-1.5-2-1.2-.5.2-1.1 0-1.5-.4C14.8 6.5 13.7 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19.2 2.8l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z" fill="currentColor" />
      <circle cx="4.8" cy="4.2" r=".8" fill="currentColor" opacity=".7" />
    </svg>
  ),
  exam: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 16.5l1.6 1.6 3-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cleaning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5.5c-1.7 0-2.8 1-3.5 1.7-.4.4-1 .6-1.5.4-.9-.3-1.8.3-2 1.2-.2.8.2 1.5.4 2.3.3 1.4.2 2.8.7 4.8.3 1.1.8 2 1.5 2 .8 0 1.2-1 1.4-2 .2-.8.5-1.4 1.2-1.4h.6c.7 0 1 .6 1.2 1.4.2 1 .6 2 1.4 2 .7 0 1.2-.9 1.5-2 .5-2 .4-3.4.7-4.8.2-.8.6-1.5.4-2.3-.2-.9-1.1-1.5-2-1.2-.5.2-1.1 0-1.5-.4C14.8 6.5 13.7 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18.5 3.2l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z" fill="currentColor" />
      <circle cx="4.8" cy="4.2" r=".8" fill="currentColor" opacity=".7" />
    </svg>
  ),
  rootCanal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5c-3 0-5 2-5 4.7 0 1.8.7 3.2 1.8 4.2.8.8 1.2 1.9 1.2 3.1V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 3.5c3 0 5 2 5 4.7 0 1.8-.7 3.2-1.8 4.2-.8.8-1.2 1.9-1.2 3.1V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 20.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1.5 2" />
    </svg>
  ),
  fillings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5.5c-1.7 0-2.8 1-3.5 1.7-.4.4-1 .6-1.5.4-.9-.3-1.8.3-2 1.2-.2.8.2 1.5.4 2.3.3 1.4.2 2.8.7 4.8.3 1.1.8 2 1.5 2 .8 0 1.2-1 1.4-2 .2-.8.5-1.4 1.2-1.4h.6c.7 0 1 .6 1.2 1.4.2 1 .6 2 1.4 2 .7 0 1.2-.9 1.5-2 .5-2 .4-3.4.7-4.8.2-.8.6-1.5.4-2.3-.2-.9-1.1-1.5-2-1.2-.5.2-1.1 0-1.5-.4C14.8 6.5 13.7 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="13.7" cy="11.6" r="2.4" fill="currentColor" opacity=".16" />
      <circle cx="13.7" cy="11.6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13.7 10.5v2.2M12.6 11.6h2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  crowns: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.8 9.6c2.1-2.6 5.1-4 8.2-4s6.1 1.4 8.2 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 9.8h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 11v4.2A1.8 1.8 0 0 0 7.8 17h.2a1.8 1.8 0 0 0 1.8-1.8V12M12 10.8v7.4M14.2 12v3.2a1.8 1.8 0 0 0 1.8 1.8h.2a1.8 1.8 0 0 0 1.8-1.8V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <header className="section-head reveal services-head">
          <span className="eyebrow">الخدمات</span>
          <h2>رعاية متكاملة لابتسامتك</h2>
          <p className="section-sub">
            ستة علاجات أساسية، بخطة واضحة وتشخيص دقيق لكل حالة.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, i) => (
            <article
              className="service-card reveal"
              key={service.id}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="service-top">
                <span className="service-icon">{icons[service.icon]}</span>
                <span className="service-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>

        <div className="services-cta reveal">
          <span className="services-cta-glow" aria-hidden="true" />
          <div className="services-cta-copy">
            <span className="services-cta-eyebrow">استشارة أولية</span>
            <p className="services-cta-title">محتاج مساعدة في اختيار العلاج؟</p>
            <p className="services-cta-sub">
              ابعت استفسارك على واتساب، وهنساعدك تحدد الخطوة الأولى.
            </p>
          </div>
          <a
            href={whatsappLink}
            className="btn btn-cta-light"
            target={doctor.whatsapp ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            احجز استشارة
          </a>
        </div>
      </div>
    </section>
  );
}
