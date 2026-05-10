"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, X, Brain, Layers, Zap, Globe, Database, Cloud, CheckCircle2 } from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────


const TECH_CARDS = [
  {
    title: "Tech Specialties",
    icon: <Zap size={20} />,
    badge: "What We Do",
    shortDesc: "Cutting-edge tools applied to real business problems.",
    accent: "#60a5fa",
    modalTitle: "Our Core Tech Specialties",
    modalDesc:
      "We specialize in building digital products that are fast, reliable, and built to last. From public-facing websites to complex internal tools — we handle every layer of the build.",
    modalPoints: [
      { label: "Web Applications", detail: "Custom web apps that work smoothly on all devices and load in under 2 seconds." },
      { label: "E-commerce Stores", detail: "Online stores with payment integration, inventory management, and order tracking." },
      { label: "Admin Dashboards", detail: "Control panels that give your team full visibility and control over business data." },
      { label: "API Development", detail: "Connecting your app with third-party tools like payment gateways, maps, and more." },
      { label: "Performance Optimization", detail: "Making existing slow websites fast — better SEO, better user experience." },
      { label: "Mobile-First Design", detail: "Every product we build works perfectly on phones, tablets, and desktops." },
    ],
  },
  {
    title: "Tech Experience",
    icon: <Globe size={20} />,
    badge: "Track Record",
    shortDesc: "Years of shipping products clients are proud of.",
    accent: "#34d399",
    modalTitle: "Our Experience Speaks",
    modalDesc:
      "We've worked across industries — from retail and education to logistics and healthcare. Every project has sharpened our ability to deliver on time and on budget.",
    modalPoints: [
      { label: "Startup MVPs", detail: "Helped early-stage founders go from idea to live product in under 8 weeks." },
      { label: "Business Portals", detail: "Built internal tools and portals used daily by 100+ person teams." },
      { label: "SaaS Platforms", detail: "Developed subscription-based software with user management and billing." },
      { label: "Data Dashboards", detail: "Real-time reporting systems that turned raw data into clear business insights." },
      { label: "Migration Projects", detail: "Moved legacy systems to modern tech stacks without losing any data." },
      { label: "Long-term Clients", detail: "70% of our clients return for a second project within 6 months." },
    ],
  },
  {
    title: "About the Team",
    icon: <Layers size={20} />,
    badge: "Who We Are",
    shortDesc: "A small, focused team that cares about your outcome.",
    accent: "#f472b6",
    modalTitle: "The People Behind the Work",
    modalDesc:
      "We're a dedicated Pakistan-based team of developers, designers, and AI engineers. Small enough to give you real attention, experienced enough to deliver at scale.",
    modalPoints: [
      { label: "Direct Communication", detail: "You talk directly to the person building your product — no middlemen, no confusion." },
      { label: "Transparent Process", detail: "Weekly updates, live demos, and always-open Slack/WhatsApp access." },
      { label: "Global Standards", detail: "We follow international development standards used by top tech companies." },
      { label: "Fast Turnaround", detail: "Most features are delivered within 3–5 business days of approval." },
      { label: "Honest Pricing", detail: "We give clear quotes upfront — no hidden costs, no surprise invoices." },
      { label: "Post-Launch Care", detail: "We don't disappear after delivery. Bugs, updates, support — all covered." },
    ],
  },
  {
    title: "Tech Architecture",
    icon: <Database size={20} />,
    badge: "The Foundation",
    shortDesc: "A solid digital structure your business can grow on.",
    accent: "#a78bfa",
    modalTitle: "Building on Solid Ground",
    modalDesc:
      "Think of tech architecture as the blueprint of a building. A well-designed foundation means your product stays fast, secure, and easy to expand — even as your business grows 10x.",
    modalPoints: [
      { label: "Scalable Structure", detail: "Systems designed to handle 10x your current traffic without rebuilding." },
      { label: "Security First", detail: "Built-in protection against data breaches, unauthorized access, and attacks." },
      { label: "Cloud-Ready", detail: "Deployed on AWS or Vercel for 99.9% uptime and global speed." },
      { label: "Clean Codebase", detail: "Well-organized code that any developer can maintain or extend easily." },
      { label: "Database Design", detail: "Structured data storage that keeps your information safe and instantly accessible." },
      { label: "Backup Systems", detail: "Automated backups so you never lose important business data." },
    ],
  },
  {
    title: "AI Integrations",
    icon: <Brain size={20} />,
    badge: "Smart Automation",
    shortDesc: "Making your business work smarter, not harder.",
    accent: "#fbbf24",
    modalTitle: "AI That Works for Your Business",
    modalDesc:
      "We integrate AI features that solve real problems — not just trendy add-ons. The goal is always the same: save your team time, reduce manual work, and improve customer experience.",
    modalPoints: [
      { label: "Smart Chatbots", detail: "Customer support bots that answer FAQs, book appointments, and qualify leads — 24/7." },
      { label: "Document Processing", detail: "AI that reads invoices, contracts, or forms and extracts key data automatically." },
      { label: "Content Generation", detail: "Auto-generate product descriptions, reports, or emails based on your data." },
      { label: "Recommendation Engine", detail: "Show customers the right product or content at the right time." },
      { label: "Voice Assistants", detail: "Voice-powered tools for hands-free data entry or customer interaction." },
      { label: "Workflow Automation", detail: "Connect your tools so tasks happen automatically — no manual triggers needed." },
    ],
  },
  {
    title: "Cloud Infrastructure",
    icon: <Cloud size={20} />,
    badge: "Deployment",
    shortDesc: "Secure, fast, and scalable cloud hosting solutions.",
    accent: "#38bdf8",
    modalTitle: "Enterprise Cloud Hosting",
    modalDesc:
      "We deploy applications on highly available cloud architectures ensuring your digital product stays online 24/7 without any performance drops.",
    modalPoints: [
      { label: "AWS Integration", detail: "Expertise in EC2, S3, RDS, and serverless Lambda functions." },
      { label: "Docker Containers", detail: "Isolated environments for bug-free, consistent releases." },
      { label: "CI/CD Pipelines", detail: "Automated testing and continuous delivery for rapid updates." },
      { label: "Zero Downtime", detail: "Rolling updates and load balancing to prevent offline time." },
      { label: "Security Groups", detail: "Advanced firewall rules, SSL, and data encryption." },
      { label: "Cost Management", detail: "Optimized resource allocation to save on server costs." },
    ],
  }
];

const STACK_CATEGORIES = [
  {
    category: "Frontend Development",
    desc: "Building highly responsive, SEO-friendly, and interactive user interfaces.",
    tools: [
      { label: "Next.js", color: "#60a5fa" },
      { label: "React", color: "#7dd3fc" },
      { label: "TypeScript", color: "#a78bfa" }
    ]
  },
  {
    category: "Backend & Databases",
    desc: "Robust APIs, secure authentication, and scalable data storage logic.",
    tools: [
      { label: "Node.js", color: "#34d399" },
      { label: "Python", color: "#fbbf24" },
      { label: "PostgreSQL", color: "#60a5fa" },
      { label: "MongoDB", color: "#34d399" }
    ]
  },
  {
    category: "AI & Cloud Infrastructure",
    desc: "Intelligent model integration and secure, automated cloud deployments.",
    tools: [
      { label: "OpenAI API", color: "#a78bfa" },
      { label: "LangChain", color: "#f472b6" },
      { label: "AWS", color: "#fbbf24" },
      { label: "Docker", color: "#60a5fa" },
      { label: "Vercel", color: "#e2e8f0" }
    ]
  }
];

const PROCESS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "Tumhara problem samajhna, goals define karna, aur roadmap banana — sirf ek call mein.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Tech stack choose karna, database design, aur scalable system blueprint tayyar karna.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Weekly demos ke saath agile development — tum hamesha loop mein rehte ho.",
  },
  {
    num: "04",
    title: "Deploy & Support",
    desc: "Production launch, monitoring setup, aur ongoing maintenance — sab covered.",
  },
];

function CardModal({ card, onClose }) {
  const router = useRouter();
  if (!card) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999, background: "rgba(2,6,23,0.88)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex",
        alignItems: "center", justifyContent: "center", padding: "24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 32 }}
        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "740px", maxHeight: "88vh", overflowY: "auto", borderRadius: "26px",
          border: `1px solid ${card.accent}30`, background: "linear-gradient(160deg, rgba(15,23,42,0.99) 0%, rgba(2,6,23,1) 100%)",
          boxShadow: `0 48px 120px rgba(0,0,0,0.75), 0 0 0 1px ${card.accent}18`, position: "relative", scrollbarWidth: "none",
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "9999px", background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`, filter: "blur(50px)", pointerEvents: "none" }}
        />
        <div style={{ padding: "36px 36px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "16px", border: `1px solid ${card.accent}35`, background: `${card.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: card.accent, fontWeight: 900, flexShrink: 0 }}>
              {card.icon}
            </div>
            <div>
              <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: card.accent, display: "block", marginBottom: "5px" }}>
                {card.badge}
              </span>
              <h2 style={{ fontSize: "clamp(1.15rem, 3vw, 1.5rem)", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "-0.03em" }}>
                {card.modalTitle}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ width: "38px", height: "38px", borderRadius: "11px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#475569", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.18s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            <X size={18} />
          </button>
        </div>
        <div style={{ padding: "22px 36px 0" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.82, color: "#94a3b8", margin: 0 }}>
            {card.modalDesc}
          </p>
        </div>
        <div style={{ margin: "26px 36px", height: "1px", background: `linear-gradient(90deg, ${card.accent}35, transparent 80%)` }} />
        <div style={{ padding: "0 36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: "12px" }}>
          {card.modalPoints.map((point, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + idx * 0.055 }} style={{ borderRadius: "14px", border: `1px solid ${card.accent}1a`, background: `${card.accent}07`, padding: "16px 18px", display: "flex", gap: "13px", alignItems: "flex-start" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "9999px", background: card.accent, flexShrink: 0, marginTop: "7px" }} />
              <div>
                <p style={{ fontSize: "0.83rem", fontWeight: 800, color: "#ffffff", margin: "0 0 5px" }}>{point.label}</p>
                <p style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.65, margin: 0 }}>{point.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ padding: "28px 36px 36px" }}>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => router.push("/contact")}
            style={{ width: "100%", padding: "17px 24px", borderRadius: "14px", background: `linear-gradient(135deg, ${card.accent}20 0%, ${card.accent}0d 100%)`, border: `1px solid ${card.accent}40`, color: card.accent, fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.05em", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", transition: "box-shadow 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 36px ${card.accent}20`; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            Hire Us <span style={{ fontSize: "20px", lineHeight: 1 }}>→</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TechClient() {
  const [activeModal, setActiveModal] = useState(null);
  const router = useRouter();

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#020617", color: "#f1f5f9", overflowX: "hidden" }}>
      <AnimatePresence>
        {activeModal !== null && <CardModal card={TECH_CARDS[activeModal]} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>

      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-80px", width: "600px", height: "600px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "500px", height: "500px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <section style={{ position: "relative", zIndex: 1, padding: "140px 24px 60px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ display: "inline-block", marginBottom: "24px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.1)", padding: "8px 20px", borderRadius: "9999px" }}>
            Tech & AI Department
          </motion.span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "24px", color: "#ffffff" }}>
            Tech <span style={{ color: "#60a5fa" }}>&</span> AI<br />Engineering
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
            Scalable architecture aur custom software logic — hum complex problems ko seamless digital products mein convert karte hain.
          </p>
        </motion.div>
      </section>

      {/* ── PROCESS SECTION (ID ADDED) ── */}
      <section id="process" style={{ position: "relative", zIndex: 1, padding: "0 24px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#475569", marginBottom: "48px" }}>
          How We Work
        </motion.p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {PROCESS.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ borderRadius: "18px", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", padding: "28px 24px" }}>
              <span style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)", fontWeight: 900, color: "rgba(255,255,255,0.05)", letterSpacing: "-0.04em", lineHeight: 1, display: "block", marginBottom: "12px" }}>
                {step.num}
              </span>
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff", margin: "0 0 10px" }}>{step.title}</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#64748b", margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SPECIALTIES SECTION (ID ADDED) ── */}
      <section id="specialties" style={{ position: "relative", zIndex: 1, padding: "0 24px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#475569", marginBottom: "40px" }}>
          What We Bring to the Table
        </motion.p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", rowGap: "50px", columnGap: "32px" }}>
          {TECH_CARDS.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }} style={{ borderRadius: "24px", minHeight: "260px", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", overflow: "hidden", transition: "all 0.3s ease" }}>
              <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "26px", lineHeight: 1, color: card.accent, fontWeight: 900, display: "inline-block", padding: "12px", background: `${card.accent}15`, borderRadius: "12px", border: `1px solid ${card.accent}30` }}>
                    {card.icon}
                  </span>
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: card.accent, border: `1px solid ${card.accent}40`, background: `${card.accent}12`, padding: "6px 14px", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                    {card.badge}
                  </span>
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>{card.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>{card.shortDesc}</p>
                <div style={{ marginTop: "auto", paddingTop: "24px" }}>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setActiveModal(i)} style={{ width: "100%", background: `${card.accent}15`, border: `1px solid ${card.accent}30`, color: card.accent, fontWeight: 700, fontSize: "0.9rem", padding: "14px 0", borderRadius: "12px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.2s" }}>
                    View Details <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STACK CATEGORIES SECTION (ID ADDED) ── */}
      <section id="stack" style={{ position: "relative", zIndex: 1, padding: "0 24px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#475569", marginBottom: "32px" }}>
          Our Stack Categories
        </motion.p>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {STACK_CATEGORIES.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} style={{ width: "100%", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", padding: "36px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", margin: "0 0 8px 0" }}>{category.category}</h3>
                <p style={{ fontSize: "0.95rem", color: "#94a3b8", margin: 0 }}>{category.desc}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
                {category.tools.map((tool, i) => (
                  <span key={i} style={{ fontSize: "0.85rem", fontWeight: 700, color: tool.color, border: `1px solid ${tool.color}30`, background: `${tool.color}10`, padding: "10px 20px", borderRadius: "9999px", letterSpacing: "0.04em" }}>
                    {tool.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ position: "relative", zIndex: 1, padding: "0 24px 100px", maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ borderRadius: "24px", border: "1px solid rgba(96,165,250,0.2)", background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(109,40,217,0.1) 100%)", backdropFilter: "blur(24px)", padding: "clamp(40px, 6vw, 60px) clamp(28px, 5vw, 60px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "16px" }}>Ready to Build?</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "#ffffff", margin: "0 auto 16px", maxWidth: "500px", letterSpacing: "-0.03em" }}>Let&apos;s turn your idea into a real product.</h2>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "#2563eb", color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", padding: "15px 36px", borderRadius: "9999px", cursor: "pointer", boxShadow: "0 0 40px rgba(37,99,235,0.35)", marginTop:"20px" }}>
              Hire Us →
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}