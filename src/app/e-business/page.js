"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Smartphone, Target, PenTool, BarChart3, 
  Search, Mail, X, ArrowRight, Sparkles 
} from "lucide-react";

export default function Marketing() {
  // ── Modal State ──
  const [activeModal, setActiveModal] = useState(null);

  // Modal khulne par background scroll band karne ke liye
  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModal]);

  // ── Services Data (IDs Added for Scrolling) ──
  const services = [
    {
      id: "social-media", // 👈 Nayi ID
      icon: <Smartphone size={32} />,
      title: "Social Media Management",
      desc: "Content strategy and community management across platforms.",
      longDesc: "We don't just post; we build communities. Our team crafts authentic narratives that resonate with your audience, turning casual scrollers into loyal brand advocates. We handle everything from daily engagement to high-level aesthetic planning so you can focus on running your business.",
      tags: ["Instagram", "LinkedIn", "TikTok"],
    },
    {
      id: "paid-ads", // 👈 Nayi ID
      icon: <Target size={32} />,
      title: "Paid Advertising",
      desc: "Data-driven ad campaigns optimized for maximum ROI.",
      longDesc: "Stop wasting budget on guesswork. We engineer hyper-targeted campaigns that reach the right people at the right time. By constantly A/B testing and refining your funnels, we ensure every dollar spent brings measurable, scalable returns to your bottom line.",
      tags: ["Meta Ads", "Google Ads", "Retargeting"],
    },
    {
      id: "content-creation", // 👈 Nayi ID
      icon: <PenTool size={32} />,
      title: "Content Creation",
      desc: "High-quality visuals and copywriting tailored to your brand.",
      longDesc: "Words and visuals are the soul of your brand. We create compelling, high-converting content—from engaging Reels and TikToks to persuasive copywriting—that captures attention in a crowded feed and builds deep trust with your market.",
      tags: ["Reels", "Copywriting", "Graphics"],
    },
    {
      id: "analytics", // 👈 Nayi ID
      icon: <BarChart3 size={32} />,
      title: "Analytics & Reporting",
      desc: "Weekly performance reports with actionable growth insights.",
      longDesc: "Data without insight is just noise. We dive deep into your metrics to uncover hidden growth opportunities. You'll get crystal-clear, jargon-free reports that show exactly what's working, what's not, and our precise plan to scale your success.",
      tags: ["KPI Tracking", "ROI Analysis", "A/B Testing"],
    },
    {
      id: "seo", // 👈 Nayi ID
      icon: <Search size={32} />,
      title: "SEO & Content Marketing",
      desc: "Rank higher and build long-term digital authority.",
      longDesc: "Visibility is everything in the digital age. We use ethical, long-term SEO strategies to position your brand at the top of search results. By answering the exact questions your customers are asking, we make you the undisputed authority in your niche.",
      tags: ["On-Page SEO", "Link Building", "Blog Strategy"],
    },
    {
      id: "email-marketing", // 👈 Nayi ID
      icon: <Mail size={32} />,
      title: "Email Marketing",
      desc: "Automated flows that convert leads into loyal clients.",
      longDesc: "Your email list is your biggest owned asset. We design automated, personalized customer journeys that nurture leads over time. From welcome sequences to abandoned cart reminders, we drive repeat sales on autopilot using sophisticated segmentation.",
      tags: ["Automation", "Newsletters", "Retention"],
    },
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#020617", color: "#f1f5f9", overflowX: "hidden" }}>

      {/* ── Background Mesh Lights ── */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-80px", width: "600px", height: "600px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "500px", height: "500px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        
        {/* ── Header Section ── */}
        <section style={{ paddingTop: "100px", paddingBottom: "60px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.1)", padding: "8px 20px", borderRadius: "9999px" }}>
              <Sparkles size={14} /> E-business
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#ffffff", margin: "0 0 20px 0" }}>
              Scale Your Brand <span style={{ color: "#a78bfa" }}>Digitally.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.7, margin: "0 auto", maxWidth: "600px" }}>
              Tailored marketing strategies designed to amplify your message, capture high-quality leads, and drive sustainable revenue.
            </p>
          </motion.div>
        </section>

        {/* ── Services Grid ── */}
        <section style={{ padding: "0 24px 100px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
            {services.map((item, i) => (
              <motion.div
                key={i}
                id={item.id} // 👈 Navbar se link match karne ke liye ID laga di
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveModal(i)}
                style={{ 
                  borderRadius: "28px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", 
                  backdropFilter: "blur(20px)", padding: "40px", display: "flex", flexDirection: "column", 
                  gap: "20px", cursor: "pointer", transition: "all 0.3s ease",
                  scrollMarginTop: "100px", // 👈 Scroll hone par Navbar ke peechay chupne se rokega
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ color: "#a78bfa", background: "rgba(167,139,250,0.1)", width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#94a3b8", margin: 0 }}>{item.desc}</p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {item.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c4b5fd", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", padding: "5px 12px", borderRadius: "99px" }}>{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "20px" }}>
                  <Link href="/contact" onClick={(e) => e.stopPropagation()} style={{ textDecoration: "none" }}>
                    <button style={{ width: "100%", padding: "16px", borderRadius: "14px", background: "rgba(139,92,246,0.12)", color: "#c4b5fd", border: "1px solid rgba(139,92,246,0.3)", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "0.2s" }}>
                      Let's Talk <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} style={{ marginTop: "80px", textAlign: "center", padding: "60px 24px", background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, transparent 100%)", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px" }}>Ready to see real growth?</h2>
            <p style={{ color: "#94a3b8", marginBottom: "32px", fontSize: "1.1rem" }}>Join successful brands that trust us with their digital scale-up.</p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button style={{ padding: "18px 48px", borderRadius: "99px", background: "#7c3aed", color: "#fff", border: "none", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 10px 40px rgba(124,58,237,0.3)" }}>
                Start Growing Today
              </button>
            </Link>
          </motion.div>
        </section>
      </div>

      {/* ── Detailed Modal (Popup) ── */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={() => setActiveModal(null)} 
            style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(2,6,23,0.9)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()} 
              style={{ width: "100%", maxWidth: "650px", background: "#0f172a", borderRadius: "32px", padding: "48px", border: "1px solid rgba(139,92,246,0.4)", position: "relative", boxShadow: "0 30px 100px rgba(0,0,0,0.8)" }}
            >
              <button 
                onClick={() => setActiveModal(null)} 
                style={{ position: "absolute", top: "24px", right: "24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={24} />
              </button>

              <div style={{ color: "#a78bfa", background: "rgba(167,139,250,0.1)", width: "70px", height: "70px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                {services[activeModal].icon}
              </div>
              
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff", marginBottom: "20px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>{services[activeModal].title}</h2>
              
              <p style={{ color: "#cbd5e1", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "40px", fontWeight: 400 }}>
                {services[activeModal].longDesc}
              </p>

              <div style={{ display: "flex", gap: "16px" }}>
                <Link href="/contact" style={{ flex: 1, textDecoration: "none" }}>
                  <button style={{ width: "100%", padding: "20px", borderRadius: "18px", background: "#7c3aed", color: "#fff", border: "none", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 10px 30px rgba(124,58,237,0.3)" }}>
                    Start Your Campaign <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        body { -webkit-tap-highlight-color: transparent; }
      `}} />

    </div>
  );
}