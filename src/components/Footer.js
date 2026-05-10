"use client";
import Link from "next/link";

/* ── Inline SVG Icons ── */
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function FooterLinkList({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
      {items.map(item => (
        <li key={item.label}>
          <Link href={item.href} style={{ textDecoration: "none" }}>
            <span
              style={{ display: "inline-block", fontSize: "0.78rem", fontWeight: 500, color: "#64748b", padding: "4px 0", cursor: "pointer", transition: "color 0.2s", letterSpacing: "0.01em" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#94a3b8"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; }}
            >
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const sectionTitle = {
    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em",
    textTransform: "uppercase", color: "#60a5fa", margin: "0 0 16px 0",
  };

  const iconBox = {
    width: "32px", height: "32px", display: "flex", alignItems: "center",
    justifyContent: "center", borderRadius: "8px",
    background: "rgba(96,165,250,0.06)", border: "1px solid rgba(96,165,250,0.12)",
    color: "#60a5fa", flexShrink: 0,
  };

  // ── PROJECTS LINK ADDED IN MAIN PAGES ──
  const mainPages = [
    { label: "Intro", href: "/" },
    { label: "Projects", href: "/projects" }, 
    { label: "Team", href: "/#team" },
    { label: "Why Elite", href: "/#why-us" },
  ];

  const otherPages = [
    { label: "Tech", href: "/tech" },
    { label: "E-business", href: "/e-business" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ];

  const pricing = [
    { label: "Starter Package", href: "/contact" },
    { label: "Growth Package", href: "/contact" },
    { label: "Enterprise Plan", href: "/contact" },
    { label: "Custom Projects", href: "/contact" },
    { label: "Request a Quote", href: "/contact" },
  ];

  const socials = [
    { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon /> },
    { label: "GitHub", href: "https://github.com", icon: <GitHubIcon /> },
  ];

  return (
    <>
      <footer style={{ margin: "0 24px 32px", position: "relative", zIndex: 10 }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto", padding: "48px 36px 28px",
          borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(2, 6, 23, 0.88)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(96,165,250,0.12)",
        }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: "28px", marginBottom: "40px", alignItems: "start" }}>

            {/* Col 1 — Brand */}
            <div>
              <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "12px" }}>
                <span style={{ fontSize: "1.35rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#ffffff" }}>
                  AltairEx<span style={{ color: "#60a5fa" }}>.</span>
                </span>
              </Link>
              <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.65, maxWidth: "260px", margin: "0 0 20px" }}>
                Engineering the next generation of elite digital experiences.
              </p>

              {/* Contact CTA */}
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#60a5fa",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: "1px solid rgba(96,165,250,0.2)",
                    background: "rgba(96,165,250,0.06)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(96,165,250,0.12)";
                    e.currentTarget.style.borderColor = "rgba(96,165,250,0.35)";
                    e.currentTarget.style.color = "#93c5fd";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(96,165,250,0.06)";
                    e.currentTarget.style.borderColor = "rgba(96,165,250,0.2)";
                    e.currentTarget.style.color = "#60a5fa";
                  }}
                >
                  For more queries, type here
                  <ArrowRightIcon size={14} />
                </span>
              </Link>
            </div>

            {/* Col 2 — Pages */}
            <div>
              <p style={sectionTitle}>Pages</p>
              <FooterLinkList items={mainPages} />
            </div>

            {/* Col 3 — Other */}
            <div>
              <p style={sectionTitle}>Other</p>
              <FooterLinkList items={otherPages} />
            </div>

            {/* Col 3 — Pricing */}
            <div>
              <p style={sectionTitle}>Pricing</p>
              <FooterLinkList items={pricing} />
            </div>

            {/* Col 4 — Follow */}
            <div>
              <p style={sectionTitle}>Follow</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.82rem", fontWeight: 500, color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ffffff"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    <span style={iconBox}>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }} className="footer-bottom">
            <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#334155" }}>
              © 2021 AltairEx STUDIO — ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-bottom { flex-direction: column !important; text-align: center; justify-content: center !important; }
        }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}