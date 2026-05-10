"use client";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  ShoppingCart, Megaphone, Monitor, Rocket, Zap, 
  TrendingUp, Star, X, ArrowRight, Sparkles,
  ChevronLeft, ChevronRight, ExternalLink, CheckCircle2
} from "lucide-react";

/* ── Mesh Light Themes ── */
const CARD_THEMES = [
  { mesh1: "rgba(59,130,246,0.35)", mesh2: "rgba(99,102,241,0.2)", accent: "#60a5fa", glow: "rgba(37,99,235,0.45)", border: "rgba(96,165,250,0.5)" },
  { mesh1: "rgba(139,92,246,0.35)", mesh2: "rgba(236,72,153,0.18)", accent: "#a78bfa", glow: "rgba(109,40,217,0.45)", border: "rgba(167,139,250,0.5)" },
  { mesh1: "rgba(6,182,212,0.35)", mesh2: "rgba(16,185,129,0.2)", accent: "#34d399", glow: "rgba(5,150,105,0.45)", border: "rgba(52,211,153,0.5)" },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeCard, setActiveCard] = useState(0);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 5000], [0, -300]);
  const theme = CARD_THEMES[activeCard] || CARD_THEMES[0];

  // ── Extended Portfolio Data ──
  const portfolios = [
    { 
      id: 1, title: "Fintech Dashboard", 
      desc: "Real-time visualization and secure financial analytics.",
      longDesc: "High-fidelity dashboard managing $2M+ daily transactions. Focused on data precision, biometric security, and ultra-fast user interface.",
      metrics: "99.9% Uptime • 40% Increase in Retention",
      stack: ["Next.js", "Chart.js", "Tailwind"],
      image: "Fintech UI" 
    },
    { 
      id: 2, title: "AI Retail Agent", 
      desc: "Smart recommendation engine boosting retail sales.",
      longDesc: "ML-powered agent that predicts customer behavior. Integrated into a global fashion brand to personalize user journeys.",
      metrics: "35% Sales Boost • 150k Active Users",
      stack: ["Python", "TensorFlow", "React"],
      image: "AI Agent UI" 
    },
    { 
      id: 3, title: "MedSync Health", 
      desc: "Modern UI/UX for seamless patient management.",
      longDesc: "EHR platform connecting 50+ clinics. Streamlined scheduling, telehealth integration, and HIPAA-compliant data storage.",
      metrics: "50% Less Admin Work • Secure API",
      stack: ["Node.js", "PostgreSQL", "AWS"],
      image: "Medical UI" 
    },
    { 
      id: 4, title: "SaaS CRM System", 
      desc: "Enterprise level client management system.",
      longDesc: "B2B CRM solution focusing on lead automation and real-time sales pipeline tracking for small to medium enterprises.",
      metrics: "20% Faster Sales Cycle",
      stack: ["Svelte", "Firebase", "D3.js"],
      image: "CRM SaaS" 
    }
  ];

  const services = [
    { 
      title: "E-Commerce Solutions", 
      desc: "End-to-end online store development with secure payment processing, real-time inventory management, and conversion-optimized storefronts designed to maximize revenue.", 
      dept: "Shopify Experts", 
      icon: <ShoppingCart size={28} />, 
      stat: "100+ Stores", 
      details: ["Shopify & WooCommerce", "Payment Gateway Integration", "Inventory & Order Management", "Conversion Rate Optimization", "Headless Commerce Architecture", "Mobile-First Store Design", "Abandoned Cart Recovery", "Multi-Currency & Tax Automation"],
      highlights: [
        { label: "Revenue Growth", value: "Avg 45%" },
        { label: "Load Time", value: "< 1.5s" },
        { label: "Checkout Rate", value: "+32%" }
      ]
    },
    { 
      title: "Digital Marketing", 
      desc: "Data-driven marketing strategies spanning paid acquisition, organic growth, and brand positioning to drive qualified traffic and sustainable business growth.", 
      dept: "Marketing Dept", 
      icon: <Megaphone size={28} />, 
      stat: "3× ROI Avg", 
      details: ["Google & Meta PPC Campaigns", "Social Media Management", "Marketing Automation & Email", "Brand Strategy & Positioning", "SEO & Content Marketing", "Conversion Tracking & Analytics", "Influencer Partnerships", "A/B Testing & CRO"],
      highlights: [
        { label: "Traffic Increase", value: "200%" },
        { label: "Lead Quality", value: "+60%" },
        { label: "Cost Per Lead", value: "-40%" }
      ]
    },
    { 
      title: "Web Development", 
      desc: "Modern, high-performance web applications and websites built with cutting-edge technologies, scalable cloud architecture, and enterprise-grade security.", 
      dept: "Dev Dept", 
      icon: <Monitor size={28} />, 
      stat: "50+ Projects", 
      details: ["Custom Web Applications", "REST & GraphQL API Development", "Cloud Architecture & DevOps", "Responsive & Accessible Design", "Microservices & Serverless", "Database Design & Optimization", "CI/CD Pipeline Setup", "Security Audits & Hardening"],
      highlights: [
        { label: "Performance Score", value: "98+" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Dev Velocity", value: "2× Faster" }
      ]
    }
  ];

  const team = [
    { name: "Muzammil Naeem", role: "CEO & Visionary", dept: "Leadership", bio: "Founded in 2021 with a singular mission to accelerate your business growth, we have evolved into a powerhouse of 50+ elite developers dedicated to delivering excellence around the clock.", skills: ["Strategy", "Growth"], gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", avatar: "M" },
    { name: "Mudassir Naeem", role: "Engineering Lead", dept: "Tech Dept", bio: "Co-founded the agency in 2021 with a vision for technical excellence. I lead our global engineering powerhouse of 50+ developers, ensuring every line of code is optimized for your business growth.", skills: ["Cloud", "Security","System Architecture","Full-Stack Development"], gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)", avatar: "M" },
    { name: "Growth Head", role: "Marketing Director", dept: "Business Dept", bio: "Joined the leadership team to revolutionize brand scaling. As a marketing expert, I specialize in turning business objectives into high-converting digital funnels that guarantee measurable growth and unmatched ROI.", skills: ["SEO", "Analytics","Digital Marketing","Conversion Optimization (CRO)","Growth Strategy"], gradient: "linear-gradient(135deg, #701a75 0%, #d946ef 100%)", avatar: "G" }
  ];

  const bannerStats = [
    { stat: "50+", label: "Projects Delivered", icon: <Rocket size={34} />, color: "#60a5fa" },
    { stat: "10×", label: "Faster Execution", icon: <Zap size={34} />, color: "#a78bfa" },
    { stat: "3×", label: "Average ROI", icon: <TrendingUp size={34} />, color: "#34d399" },
    { stat: "100%", label: "Satisfaction", icon: <Star size={34} />, color: "#f472b6" },
  ];

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    document.body.style.overflow = (activeModal !== null || portfolioOpen) ? "hidden" : "unset";
  }, [activeModal, portfolioOpen]);

  // ── Portfolio Carousel Logic ──
  const CARD_WIDTH = 380;
  const CARD_GAP = 24;
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const maxIndex = portfolios.length - 1;

  const goToSlide = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentSlide(clamped);
    x.set(-clamped * (CARD_WIDTH + CARD_GAP));
  };

  const handleDragEnd = (event, info) => {
    const threshold = 60;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -threshold || velocity < -400) {
      goToSlide(currentSlide + 1);
    } else if (offset > threshold || velocity > 400) {
      goToSlide(currentSlide - 1);
    } else {
      goToSlide(currentSlide);
    }
  };

  // Reusable scroll animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div style={{ backgroundColor: "#020617", color: "#f1f5f9", overflowX: "hidden" }}>

      {/* ── Fixed Mesh Lights ── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <motion.div style={{ y: y1, position: "absolute", top: "-100px", right: "-80px" }}>
          <div style={{ width: "600px", height: "600px", background: `radial-gradient(circle, ${theme.mesh1} 0%, transparent 70%)`, filter: "blur(100px)" }} />
        </motion.div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── 1. HERO SECTION (Full Page) ── */}
        <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "24px" }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <motion.span 
              whileHover={{ scale: 1.05 }} 
              style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.1)", padding: "8px 24px", borderRadius: "99px" }}
            >
              AltairEx
            </motion.span>
            <h1 style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)", fontWeight: 900, lineHeight: 1, margin: "32px 0" }}>ELITE DIGITAL<br/><span style={{ color: theme.accent }}>EXPERIENCES.</span></h1>
            <p style={{ color: "#94a3b8", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 40px" }}>High-end digital engineering and marketing strategies designed for exponential growth.</p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: `0 0 60px ${theme.glow}` }} 
                whileTap={{ scale: 0.95 }}
                style={{ background: "#2563eb", color: "#fff", padding: "18px 48px", borderRadius: "99px", border: "none", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer", boxShadow: `0 0 40px ${theme.glow}` }}
              >
                Start Project →
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* ── 2. SERVICES SECTION (Full Page per service) ── */}
        <div id="services">
        {services.map((s, i) => (
          <section key={i} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01, y: -5 }}
              style={{ width: "100%", maxWidth: "1100px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "40px", padding: "50px", backdropFilter: "blur(20px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center", cursor: "pointer" }} 
              onClick={() => setActiveModal(i)}
            >
              <div>
                <motion.div style={{ color: CARD_THEMES[i].accent, marginBottom: "20px" }} whileHover={{ rotate: 5, scale: 1.1 }}>{s.icon}</motion.div>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1 }}>{s.title}</h2>
                <p style={{ color: "#94a3b8", fontSize: "1.05rem", margin: "20px 0" }}>{s.desc}</p>

                {/* Highlights */}
                <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                  {s.highlights.map((h, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ amount: 0.5 }}
                      transition={{ duration: 0.4 }}
                      style={{ padding: "10px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}
                    >
                      <div style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h.label}</div>
                      <div style={{ fontSize: "1rem", fontWeight: "bold", color: CARD_THEMES[i].accent }}>{h.value}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  style={{ display: "inline-block", color: CARD_THEMES[i].accent, border: "1px solid", padding: "8px 24px", borderRadius: "99px", fontWeight: "bold" }}
                >
                  {s.stat}
                </motion.div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {s.details.map((d, idx) => (
                  <motion.div 
                    key={d} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ background: "rgba(255,255,255,0.06)", scale: 1.02 }}
                    style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "16px", fontSize: "0.82rem", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <CheckCircle2 size={14} color={CARD_THEMES[i].accent} />
                    {d}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        ))}
        </div>

        {/* ── 3. PORTFOLIO SWIPE SECTION ── */}
        <section id="portfolio" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto 40px", width: "100%", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={fadeLeft} transition={{ duration: 0.7 }}>
              <span style={{ color: "#60a5fa", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem" }}>Case Studies</span>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, marginTop: "12px" }}>Selected Projects</h2>
            </motion.div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(currentSlide - 1)}
                disabled={currentSlide === 0}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: currentSlide === 0 ? "#334155" : "#fff", padding: "10px", borderRadius: "12px", cursor: currentSlide === 0 ? "not-allowed" : "pointer" }}
              >
                <ChevronLeft size={22} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(currentSlide + 1)}
                disabled={currentSlide === maxIndex}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: currentSlide === maxIndex ? "#334155" : "#fff", padding: "10px", borderRadius: "12px", cursor: currentSlide === maxIndex ? "not-allowed" : "pointer" }}
              >
                <ChevronRight size={22} />
              </motion.button>
              <p style={{ fontSize: "0.85rem", color: "#475569", marginLeft: "8px" }}>Swipe to explore</p>
            </div>
          </div>

          <div style={{ width: "100%", overflow: "hidden", paddingLeft: "max(24px, calc((100vw - 1100px) / 2))" }} ref={containerRef}>
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -(maxIndex * (CARD_WIDTH + CARD_GAP)) }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              style={{ x: springX, display: "flex", gap: `${CARD_GAP}px`, width: "max-content", cursor: "grab" }}
              whileTap={{ cursor: "grabbing" }}
            >
              {portfolios.map((p, idx) => (
                <motion.div 
                  key={p.id} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={fadeScale}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{ width: `${CARD_WIDTH}px`, flexShrink: 0, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "28px", padding: "28px", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column" }}
                  onClick={() => { setPortfolioOpen(true); setCurrentSlide(idx); }}
                >
                  <div style={{ height: "200px", background: "rgba(255,255,255,0.05)", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", color: "#334155", fontWeight: "bold", fontSize: "1.1rem" }}>{p.image}</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginTop: "20px" }}>{p.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", margin: "10px 0 16px", lineHeight: 1.5 }}>{p.desc}</p>

                  {p.metrics && (
                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
                      <Sparkles size={16} color="#60a5fa" />
                      <span style={{ fontSize: "0.8rem", color: "#60a5fa", fontWeight: "bold" }}>{p.metrics}</span>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                    <motion.button 
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.97 }}
                      style={{ flex: 1, padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", fontWeight: "bold", fontSize: "0.9rem" }}
                    >
                      Details
                    </motion.button>
                    <Link href="/contact" style={{ flex: 1 }} onClick={(e) => e.stopPropagation()}>
                      <motion.button 
                        whileHover={{ scale: 1.03, background: "rgba(37,99,235,0.25)" }} 
                        whileTap={{ scale: 0.97 }}
                        style={{ width: "100%", padding: "12px", borderRadius: "12px", background: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.3)", cursor: "pointer", fontWeight: "bold", fontSize: "0.9rem" }}
                      >
                        Hire Us
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "36px" }}>
            {portfolios.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: currentSlide === idx ? "32px" : "10px",
                  height: "10px",
                  borderRadius: "99px",
                  background: currentSlide === idx ? "#60a5fa" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease"
                }}
              />
            ))}
          </div>
        </section>

        {/* ── 4. TEAM SECTION (Full Page per Member) ── */}
        <div id="team">
        {team.map((m, i) => (
          <section key={i} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
              style={{ width: "100%", maxWidth: "1200px", display: "grid", gridTemplateColumns: "400px 1fr", gap: "80px", alignItems: "center" }}
            >
              <motion.div 
                whileHover={{ scale: 1.03, rotate: 1 }} 
                style={{ height: "500px", background: m.gradient, borderRadius: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8rem", fontWeight: 900, color: "rgba(255,255,255,0.4)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              >
                {m.avatar}
              </motion.div>
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: "#60a5fa", fontWeight: "bold", letterSpacing: "0.2em", textTransform: "uppercase", display: "inline-block" }}
                >
                  {m.dept}
                </motion.span>
                <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, margin: "16px 0", lineHeight: 1.1 }}>{m.name}</h2>
                <p style={{ fontSize: "1.3rem", color: "#94a3b8", marginBottom: "32px" }}>{m.role}</p>
                <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "32px", maxWidth: "600px" }}>{m.bio}</p>
                <div style={{ display: "flex", gap: "12px" }}>
                  {m.skills.map(s => (
                    <motion.span 
                      key={s} 
                      whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.08)"}}
                      style={{ padding: "12px 24px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", fontWeight: "bold", cursor: "default" }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
        ))}
        </div>

     {/* ── 5. VALUE BANNER (At the end) ── */}
        <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            style={{ 
              width: "100%", 
              maxWidth: "1100px", 
              background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(109,40,217,0.08) 100%)", 
              borderRadius: "40px", 
              padding: "80px 40px", 
              textAlign: "center", 
              border: "1px solid rgba(255,255,255,0.1)", 
              backdropFilter: "blur(30px)" 
            }}
          >
            {/* Heading */}
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "20px", color: "#fff" }}>
              Why AltairEx ?
            </h2>
            
            {/* ── TRUST-BUILDING HUMAN DESCRIPTION ── */}
            <p style={{ 
              color: "#cbd5e1", 
              fontSize: "1.15rem", 
              lineHeight: 1.8, 
              maxWidth: "750px", 
              margin: "0 auto 60px",
              fontWeight: 500
            }}>
              Trust is built on a foundation of proven results. With dozens of successfully delivered projects under our belt, 
              we continue to provide world-class digital services that don't demand a world-class price tag. 
              We bridge the gap between <span style={{color: '#60a5fa'}}>premium quality</span> and a <span style={{color: '#60a5fa'}}>smart budget</span>, 
              ensuring your vision is scaled with absolute excellence.
            </p>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
              {bannerStats.map((b, i) => (
                <div key={i}>
                  <div style={{ color: b.color, marginBottom: "20px", display: "flex", justifyContent: "center" }}>{b.icon}</div>
                  <div style={{ fontSize: "3.5rem", fontWeight: 900, color: b.color, lineHeight: 1 }}>{b.stat}</div>
                  <p style={{ color: "#94a3b8", marginTop: "12px", fontWeight: "bold", fontSize: "0.9rem", textTransform: 'uppercase', letterSpacing: '0.1em' }}>{b.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

      </div>

      {/* ── MODALS ── */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal} 
            style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(2,6,23,0.9)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          >
            <motion.div 
              initial={{ y: 60, opacity: 0, scale: 0.95 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()} 
              style={{ width: "100%", maxWidth: "700px", background: "#0f172a", borderRadius: "32px", padding: "48px", border: `1px solid ${CARD_THEMES[activeModal].border}`, position: "relative", maxHeight: "90vh", overflowY: "auto" }}
            >
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }} 
                whileTap={{ scale: 0.9 }}
                onClick={closeModal} 
                style={{ position: "absolute", top: "24px", right: "24px", color: "#fff", background: "none", border: "none", cursor: "pointer" }}
              >
                <X size={32}/>
              </motion.button>

              <div style={{ color: CARD_THEMES[activeModal].accent, marginBottom: "16px" }}>{services[activeModal].icon}</div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "16px" }}>{services[activeModal].title}</h2>
              <p style={{ color: "#94a3b8", fontSize: "1.05rem", marginBottom: "28px" }}>{services[activeModal].desc}</p>

              {/* Highlights in modal */}
              <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
                {services[activeModal].highlights.map((h, idx) => (
                  <div key={idx} style={{ flex: 1, padding: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                    <div style={{ fontSize: "1.3rem", fontWeight: "bold", color: CARD_THEMES[activeModal].accent }}>{h.value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>{h.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {services[activeModal].details.map((d, idx) => (
                  <motion.div 
                    key={d} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    style={{ padding: "14px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem" }}
                  >
                    <CheckCircle2 size={16} color={CARD_THEMES[activeModal].accent} />
                    {d}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {portfolioOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ position: "fixed", inset: 0, zIndex: 1100, background: "#020617", padding: "60px 24px", overflowY: "auto" }}
          >
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }} 
              whileTap={{ scale: 0.9 }}
              onClick={() => setPortfolioOpen(false)} 
              style={{ position: "fixed", top: "40px", right: "40px", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "15px", borderRadius: "50%", cursor: "pointer", zIndex: 1200 }}
            >
              <X size={32}/>
            </motion.button>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: "#60a5fa", fontWeight: "bold", textTransform: "uppercase", display: "inline-block" }}
              >
                Case Study
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 900, margin: "20px 0" }}
              >
                {portfolios[currentSlide].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                style={{ fontSize: "1.3rem", color: "#cbd5e1", lineHeight: 1.7, marginBottom: "40px" }}
              >
                {portfolios[currentSlide].longDesc}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                style={{ width: "100%", height: "450px", background: "rgba(255,255,255,0.03)", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#334155" }}
              >
                [ Project Showcase ]
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
              >
                <div style={{ padding: "28px", background: "rgba(255,255,255,0.02)", borderRadius: "20px" }}>
                  <p style={{ color: "#60a5fa", fontWeight: "bold", marginBottom: "8px" }}>Impact</p>
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{portfolios[currentSlide].metrics}</p>
                </div>
                <div style={{ padding: "28px", background: "rgba(255,255,255,0.02)", borderRadius: "20px" }}>
                  <p style={{ color: "#60a5fa", fontWeight: "bold", marginBottom: "8px" }}>Tech Stack</p>
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{portfolios[currentSlide].stack.join(", ")}</p>
                </div>
                <Link href="/contact" style={{ display: "flex" }}>
                  <motion.button 
                    whileHover={{ scale: 1.03 }} 
                    whileTap={{ scale: 0.97 }}
                    style={{ width: "100%", background: "#2563eb", borderRadius: "20px", color: "#fff", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "1.1rem" }}
                  >
                    Build My Project
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        @media (max-width: 1024px) {
          .team-page-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}} />

    </div>
  );
}