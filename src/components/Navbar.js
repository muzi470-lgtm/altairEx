"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Active State Helper ── */
  const isActive = (href) => {
    const basePath = href.split("#")[0] || "/";
    return pathname === basePath;
  };

  /* ── Nav Configuration with Dropdowns ── */
  const links = [
    {
      label: "Home",
      href: "/",
      dropdown: [
        { label: "Team", href: "/#team" },
        { label: "Mission", href: "/#mission" },
        { label: "Why us?", href: "/#why-us" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      // ── TAMAM 11 SERVICES EXACT ORDER KE SATH ──
      dropdown: [
        { label: "E-Commerce Solutions", href: "/services#e-commerce" },
        { label: "Digital Marketing", href: "/services#digital-marketing" },
        { label: "Brand Strategy", href: "/services#brand-strategy" },
        { label: "Mobile App Development", href: "/services#mobile-app" },
        { label: "Web Development", href: "/services#web-development" },
        { label: "AI & Automation", href: "/services#ai-automation" },
        { label: "UI/UX Design", href: "/services#ui-ux" },
        { label: "Data Analytics", href: "/services#data-analytics" },
        { label: "API Development", href: "/services#api-development" },
        { label: "Cloud & DevOps", href: "/services#cloud-devops" },
        { label: "Cybersecurity", href: "/services#cybersecurity" },
      ],
    },
    {
      label: "Tech",
      href: "/tech",
      dropdown: [
        { label: "Specialties", href: "/tech#specialties" },
        { label: "Our Stack", href: "/tech#stack" },
        { label: "How We Work", href: "/tech#process" },
      ],
    },
   {
      label: "E-business",
      href: "/e-business",
      dropdown: [
        { label: "Social Media Management", href: "/e-business#social-media" },
        { label: "Paid Advertising", href: "/e-business#paid-ads" },
        { label: "Content Creation", href: "/e-business#content-creation" },
        { label: "Analytics & Reporting", href: "/e-business#analytics" },
        { label: "SEO & Content Marketing", href: "/e-business#seo" },
        { label: "Email Marketing", href: "/e-business#email-marketing" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        padding: "12px 24px",
        boxSizing: "border-box",
      }}>
        <motion.header
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
            borderRadius: "14px",
            border: scrolled
              ? "1px solid rgba(96,165,250,0.22)"
              : "1px solid rgba(255,255,255,0.08)",
            background: scrolled
              ? "rgba(2, 6, 23, 0.88)"
              : "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(59,130,246,0.05)"
              : "0 2px 12px rgba(0,0,0,0.2)",
            transition: "background 0.4s, box-shadow 0.4s, border-color 0.4s",
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{
              fontSize: "1.2rem",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}>
              AltairEx<span style={{ color: "#60a5fa" }}>.</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav className="desktop-nav">
            <ul style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}>
              {links.map((link) => (
                <li
                  key={link.label}
                  style={{ position: "relative", listStyle: "none" }}
                  onMouseEnter={() => link.dropdown && setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link href={link.href} style={{ textDecoration: "none" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "7px 14px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "color 0.2s, background 0.2s",
                        color: isActive(link.href) ? "#60a5fa" : "#64748b",
                        background: isActive(link.href) ? "rgba(96,165,250,0.1)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#60a5fa";
                        e.currentTarget.style.background = "rgba(96,165,250,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(link.href)) {
                          e.currentTarget.style.color = "#64748b";
                          e.currentTarget.style.background = "transparent";
                        } else {
                          e.currentTarget.style.color = "#60a5fa";
                          e.currentTarget.style.background = "rgba(96,165,250,0.1)";
                        }
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>

                  {/* ── Hover Dropdown (Glassmorphism) ── */}
                  <AnimatePresence>
                    {link.dropdown && hoveredLink === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          paddingTop: "8px",
                          zIndex: 50,
                        }}
                      >
                        {/* ── SCROLLABLE DROPDOWN MENU ── */}
                        <div style={{
                          width: "260px",
                          maxHeight: "65vh",
                          overflowY: "auto",
                          scrollbarWidth: "none", // For Firefox
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                          borderRadius: "16px",
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(2, 6, 23, 0.97)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          padding: "12px",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                        }}>
                          {/* Webkit scrollbar hide inline style hack */}
                          <style>{`
                            div::-webkit-scrollbar {
                              display: none;
                            }
                          `}</style>
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              style={{ textDecoration: "none" }}
                            >
                              <span
                                style={{
                                  display: "block",
                                  padding: "10px 16px",
                                  borderRadius: "12px",
                                  fontSize: "0.85rem",
                                  fontWeight: 500,
                                  color: "#94a3b8",
                                  cursor: "pointer",
                                  transition: "color 0.2s, background 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "#fff";
                                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "#94a3b8";
                                  e.currentTarget.style.background = "transparent";
                                }}
                              >
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── CTA Button (Desktop) ── */}
<Link href="/projects" style={{ textDecoration: "none" }} className="desktop-nav">            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#2563eb",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.85rem",
                padding: "9px 20px",
                borderRadius: "9999px",
                cursor: "pointer",
                boxShadow: "0 0 18px rgba(37,99,235,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "#3b82f6";
                e.currentTarget.style.boxShadow = "0 0 28px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#2563eb";
                e.currentTarget.style.boxShadow = "0 0 18px rgba(37,99,235,0.35)";
              }}
            >
            Our Projects <span>→</span>
            </span>
          </Link>

          {/* ── Hamburger (Mobile) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "#fff", borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "#fff", borderRadius: "2px", transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "#fff", borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>
        </motion.header>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "76px",
              left: "16px",
              right: "16px",
              zIndex: 49,
              background: "rgba(2, 6, 23, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              maxHeight: "80vh", // Prevent mobile menu from being too tall
              overflowY: "auto",
            }}
          >
            {links.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  style={{ textDecoration: "none" }}
                  onClick={() => !link.dropdown && setMenuOpen(false)}
                >
                  <span
                    style={{
                      display: "block",
                      padding: "11px 16px",
                      color: isActive(link.href) ? "#60a5fa" : "#94a3b8",
                      fontWeight: isActive(link.href) ? 700 : 500,
                      fontSize: "0.95rem",
                      borderRadius: "10px",
                      transition: "color 0.2s, background 0.2s",
                      cursor: "pointer",
                      background: isActive(link.href) ? "rgba(96,165,250,0.1)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.color = "#94a3b8";
                        e.currentTarget.style.background = "transparent";
                      } else {
                        e.currentTarget.style.color = "#60a5fa";
                        e.currentTarget.style.background = "rgba(96,165,250,0.1)";
                      }
                    }}
                  >
                    {link.label}
                  </span>
                </Link>

                {/* Mobile nested dropdown links */}
                {link.dropdown && (
                  <div style={{ marginLeft: "16px", marginTop: "4px", marginBottom: "4px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid rgba(255,255,255,0.06)", paddingLeft: "12px" }}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{ textDecoration: "none" }}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span style={{
                          display: "block",
                          padding: "8px 12px",
                          fontSize: "0.9rem",
                          color: "#64748b",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#94a3b8"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          {/* Mobile Menu ka end button */}
<Link href="/projects" style={{ textDecoration: "none", marginTop: "8px" }} onClick={() => setMenuOpen(false)}>
  <span style={{
    display: "block",
    textAlign: "center",
    background: "#2563eb",
    color: "#ffffff",
    fontWeight: 700,
    padding: "13px",
    borderRadius: "12px",
    fontSize: "0.95rem",
  }}>
    View Projects →
  </span>
</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}