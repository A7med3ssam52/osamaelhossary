import { useState } from "react";
import { doctor } from "../data/doctor";

function Seal({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1.4 2.6" opacity="0.65" />
      <path
        d="M32 15c-4.4 0-7.6 2-9.8 4.8-2.4 3-2.8 7-2.1 10.8.7 3.7 2.5 6.4 4.2 8.9 1.5 2.2 2.3 4.4 2.3 7.1 0 3.4.8 5.9 2.3 5.9 1.7 0 1.7-3.4 1.9-6.2.2-2.6.6-4.6 1.2-5.6.6 1 1 3 1.2 5.6.2 2.8.2 6.2 1.9 6.2 1.5 0 2.3-2.5 2.3-5.9 0-2.7.8-4.9 2.3-7.1 1.7-2.5 3.5-5.2 4.2-8.9.7-3.8.3-7.8-2.1-10.8C39.6 17 36.4 15 32 15Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M22 50.5h20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function FlipIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 11a8 8 0 0 0-14.3-4.9M4 13a8 8 0 0 0 14.3 4.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M5 3v4h4M19 21v-4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 21V7l8-4 8 4v14M2 21h20M9 21v-5h6v5M8.5 9h2m3 0h2M12 7.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function IdCard() {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((value) => !value);
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`idc-area reveal${flipped ? " is-flipped" : ""}`} style={{ transitionDelay: "120ms" }}>
      <div
        className={`idc-scene${flipped ? " is-flipped" : ""}`}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={flipped ? "عرض الوجه الأمامي لبطاقة الدكتور" : "قلب البطاقة لعرض مكان العمل والمواعيد"}
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        <div className="idc">
          <div className="idc-face idc-front" aria-hidden={flipped || undefined}>
            <header className="idc-head">
              <Seal className="idc-seal" />
              <span className="idc-country">
                <span className="idc-country-ar">جمهورية مصر العربية</span>
                <span className="idc-country-en">Arab Republic of Egypt</span>
              </span>
              <span className="idc-type">بطاقة طبيب</span>
            </header>

            <div className="idc-body">
              <div className="idc-details">
                <span className="idc-kicker">INTERN DENTIST</span>
                <h3 className="idc-name">{doctor.name}</h3>
                <span className="idc-role">{doctor.title}</span>
                <p className="idc-work">
                  {doctor.workplace}
                  <span>{doctor.university}</span>
                </p>
              </div>
              <div className="idc-photo">
                <img src={doctor.avatar} alt={doctor.name} width="240" height="320" loading="lazy" />
              </div>
            </div>

            <footer className="idc-foot">
              <span className="idc-flip">
                <FlipIcon />
                اضغط للقلب
              </span>
              <span className="idc-barcode" aria-hidden="true" />
            </footer>
          </div>

          <div className="idc-face idc-back" aria-hidden={!flipped || undefined}>
            <Seal className="idc-watermark" />
            <header className="idc-back-head">
              <span className="idc-back-eyebrow">بيانات العمل</span>
              <span className="idc-back-en">PROFESSIONAL DETAILS</span>
            </header>

            <div className="idc-list">
              <div className="idc-row">
                <span className="idc-row-icon"><HospitalIcon /></span>
                <span className="idc-row-text">
                  <span className="idc-label">مكان العمل</span>
                  <span className="idc-value">{doctor.workplace} — {doctor.university}</span>
                </span>
              </div>
              <div className="idc-row">
                <span className="idc-row-icon"><PinIcon /></span>
                <span className="idc-row-text">
                  <span className="idc-label">الموقع</span>
                  <span className="idc-value">{doctor.location}</span>
                </span>
              </div>
              <div className="idc-row">
                <span className="idc-row-icon"><ClockIcon /></span>
                <span className="idc-row-text">
                  <span className="idc-label">ساعات العمل</span>
                  <span className="idc-value">{doctor.hours}</span>
                </span>
              </div>
            </div>

            <footer className="idc-foot idc-foot-back">
              <span className="idc-sign">Osama El Hossary</span>
              <span className="idc-flip">
                <FlipIcon />
                اضغط للرجوع
              </span>
            </footer>
          </div>
        </div>
      </div>

      <p className="idc-hint" aria-live="polite">
        <FlipIcon className="idc-hint-icon" />
        {flipped ? "الوجه الخلفي — بيانات العمل والمواعيد" : "اضغط على البطاقة لعرض بيانات العمل والمواعيد"}
      </p>
    </div>
  );
}
