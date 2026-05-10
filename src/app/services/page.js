"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ShoppingCart, Megaphone, Monitor, Code, Palette, 
  Smartphone, Globe, Database, Cloud, Shield, 
  Zap, BarChart3, Users, Layers, ArrowRight
} from "lucide-react";

const CARD_THEMES = [
  { accent: "#60a5fa", glow: "rgba(37,99,235,0.45)", border: "rgba(96,165,250,0.5)", bg: "rgba(59,130,246,0.08)" },
  { accent: "#a78bfa", glow: "rgba(109,40,217,0.45)", border: "rgba(167,139,250,0.5)", bg: "rgba(139,92,246,0.08)" },
  { accent: "#34d399", glow: "rgba(5,150,105,0.45)", border: "rgba(52,211,153,0.5)", bg: "rgba(16,185,129,0.08)" },
  { accent: "#f472b6", glow: "rgba(236,72,153,0.45)", border: "rgba(244,114,182,0.5)", bg: "rgba(236,72,153,0.08)" },
  { accent: "#fbbf24", glow: "rgba(217,119,6,0.45)", border: "rgba(251,191,36,0.5)", bg: "rgba(217,119,6,0.08)" },
  { accent: "#22d3ee", glow: "rgba(8,145,178,0.45)", border: "rgba(34,211,238,0.5)", bg: "rgba(8,145,178,0.08)" },
];

// ── ARRANGEMENT AND IDs UPDATED HERE ──
const services = [
  {
    id: "e-commerce",
    title: "E-Commerce Solutions",
    desc: "End-to-end online store development with secure payment processing, real-time inventory management, and conversion-optimized storefronts.",
    icon: <ShoppingCart size={28} />,
    stat: "100+ Stores",
    details: ["Shopify & WooCommerce", "Payment Gateway Integration", "Inventory & Order Management", "Conversion Rate Optimization", "Headless Commerce", "Mobile-First Design", "Abandoned Cart Recovery", "Multi-Currency Support"],
    highlights: [
      { label: "Revenue Growth", value: "Avg 45%" },
      { label: "Load Time", value: "< 1.5s" },
      { label: "Checkout Rate", value: "+32%" }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies spanning paid acquisition, organic growth, and brand positioning to drive qualified traffic and sustainable growth.",
    icon: <Megaphone size={28} />,
    stat: "3× ROI Avg",
    details: ["Google & Meta PPC Campaigns", "Social Media Management", "Marketing Automation & Email", "Brand Strategy & Positioning", "SEO & Content Marketing", "Conversion Tracking", "Influencer Partnerships", "A/B Testing & CRO"],
    highlights: [
      { label: "Traffic Increase", value: "200%" },
      { label: "Lead Quality", value: "+60%" },
      { label: "Cost Per Lead", value: "-40%" }
    ]
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    desc: "Comprehensive brand development from positioning to visual identity, ensuring your business stands out in crowded markets.",
    icon: <Layers size={28} />,
    stat: "35+ Brands",
    details: ["Brand Positioning", "Visual Identity", "Brand Guidelines", "Market Research", "Competitor Analysis", "Messaging Framework", "Rebranding", "Brand Audit"],
    highlights: [
      { label: "Recognition", value: "+65%" },
      { label: "Trust Score", value: "4.9★" },
      { label: "Growth", value: "2.5×" }
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications that deliver smooth performance and engaging user experiences on iOS and Android.",
    icon: <Smartphone size={28} />,
    stat: "30+ Apps",
    details: ["React Native & Flutter", "iOS Native Development", "Android Native Development", "App Store Optimization", "Push Notifications", "Offline Functionality", "Biometric Auth", "Real-time Sync"],
    highlights: [
      { label: "App Rating", value: "4.8★" },
      { label: "Retention", value: "+42%" },
      { label: "Crash Rate", value: "< 0.1%" }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    desc: "Modern, high-performance web applications powered by AI integrations like smart chatbots, built with scalable cloud architecture and enterprise-grade security.",
    icon: <Monitor size={28} />,
    stat: "50+ Projects",
    details: ["AI-Powered Web Apps", "Smart Chatbot Integrations", "REST & GraphQL APIs", "Cloud Architecture & DevOps", "Responsive & Accessible Design", "Microservices & Serverless", "LLM Integration (OpenAI/Claude)", "Security Audits"],
    highlights: [
      { label: "Performance", value: "98+" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Dev Velocity", value: "2× Faster" }
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    desc: "Intelligent automation featuring AI Voice Calling Agents, custom LLMs, and smart chatbots to streamline your operations and deliver next-gen customer experiences.",
    icon: <Zap size={28} />,
    stat: "25+ Models",
    details: ["AI Voice Calling Agents", "Custom LLM Development", "Smart Chatbots & Assistants", "Natural Language Processing", "Business Process Automation", "Predictive Analytics", "Computer Vision", "AI Strategy & Consulting"],
    highlights: [
      { label: "Efficiency", value: "+80%" },
      { label: "Accuracy", value: "97.5%" },
      { label: "Cost Saved", value: "60%" }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    desc: "Human-centered design that blends aesthetics with functionality. From wireframes to pixel-perfect interfaces that users love.",
    icon: <Palette size={28} />,
    stat: "40+ Designs",
    details: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Mobile App UI", "Web Interface Design", "Brand Identity", "Motion Design", "Accessibility Compliance"],
    highlights: [
      { label: "User Satisfaction", value: "96%" },
      { label: "Engagement", value: "+55%" },
      { label: "Conversion", value: "+28%" }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with custom dashboards, predictive analytics, and automated reporting.",
    icon: <BarChart3 size={28} />,
    stat: "15+ Dashboards",
    details: ["Custom Dashboards", "Predictive Analytics", "Data Visualization", "ETL Pipelines", "Real-time Reporting", "Business Intelligence", "Machine Learning", "Data Warehousing"],
    highlights: [
      { label: "Data Processed", value: "10TB+" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Decision Speed", value: "3×" }
    ]
  },
  {
    id: "api-development",
    title: "API Development",
    desc: "Robust, well-documented APIs that power seamless integrations between your systems, partners, and third-party services.",
    icon: <Code size={28} />,
    stat: "100+ APIs",
    details: ["RESTful APIs", "GraphQL APIs", "API Documentation", "Rate Limiting", "Authentication (OAuth/JWT)", "Versioning Strategy", "SDK Development", "API Gateways"],
    highlights: [
      { label: "Response Time", value: "< 50ms" },
      { label: "Uptime", value: "99.95%" },
      { label: "Adoption", value: "50+ Partners" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure and automated deployment pipelines that keep your applications running smoothly 24/7.",
    icon: <Cloud size={28} />,
    stat: "20+ Migrations",
    details: ["AWS & GCP & Azure", "Docker & Kubernetes", "CI/CD Automation", "Infrastructure as Code", "Monitoring & Logging", "Auto-scaling", "Disaster Recovery", "Cost Optimization"],
    highlights: [
      { label: "Uptime", value: "99.99%" },
      { label: "Deploy Speed", value: "-70%" },
      { label: "Cost Savings", value: "35%" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    desc: "Enterprise-grade security solutions to protect your data, users, and infrastructure from evolving digital threats.",
    icon: <Shield size={28} />,
    stat: "0 Breaches",
    details: ["Penetration Testing", "Security Audits", "Compliance (GDPR/HIPAA)", "Vulnerability Management", "Incident Response", "Data Encryption", "Access Control", "Security Training"],
    highlights: [
      { label: "Threats Blocked", value: "100%" },
      { label: "Audit Score", value: "A+" },
      { label: "Response Time", value: "< 1hr" }
    ]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#020617", color: "#f1f5f9", minHeight: "100vh", paddingTop: "80px", paddingBottom: "80px" }}>

      {/* Header */}
      <section style={{ textAlign: "center", padding: "40px 24px 60px", maxWidth: "700px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.1)", padding: "8px 20px", borderRadius: "9999px", marginBottom: "20px" }}>
            What We Offer
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 16px" }}>
            Our <span style={{ color: "#60a5fa" }}>Services</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            Comprehensive digital solutions tailored to accelerate your growth and transform your business.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
        {services.map((s, i) => {
          const theme = CARD_THEMES[i % CARD_THEMES.length];
          return (
            <motion.div
              key={i}
              id={s.id || `service-${i}`} // ── ID ASSIGNED HERE FOR SCROLLING ──
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "32px",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                scrollMarginTop: "100px", // Scrolling theek jagah par rokne ke liye taake Navbar card ke upar na aaye
              }}
            >
              {/* Accent glow */}
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "180px", height: "180px", borderRadius: "9999px", background: `radial-gradient(circle, ${theme.bg} 0%, transparent 70%)`, filter: "blur(40px)", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ color: theme.accent, padding: "12px", background: theme.bg, borderRadius: "14px", border: `1px solid ${theme.border}` }}>
                    {s.icon}
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: theme.accent, background: theme.bg, padding: "6px 14px", borderRadius: "99px", border: `1px solid ${theme.border}` }}>
                    {s.stat}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 10px", color: "#ffffff" }}>{s.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 20px" }}>{s.desc}</p>

                {/* Highlights */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
                  {s.highlights.map((h, idx) => (
                    <div key={idx} style={{ padding: "8px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px" }}>
                      <div style={{ fontSize: "0.65rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h.label}</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: "bold", color: theme.accent }}>{h.value}</div>
                    </div>
                  ))}
                </div>

                {/* Details list */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "24px" }}>
                  {s.details.map((d, idx) => (
                    <div key={idx} style={{ fontSize: "0.78rem", color: "#64748b", padding: "6px 0", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: theme.accent, flexShrink: 0 }} />
                      {d}
                    </div>
                  ))}
                </div>

                {/* Hire Us Button */}
                <Link href="/contact" style={{ textDecoration: "none", display: "block", marginTop: "auto" }}>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: `0 0 20px ${theme.glow}` }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      borderRadius: "12px",
                      background: theme.bg,
                      color: theme.accent,
                      border: `1px solid ${theme.border}`,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s",
                    }}
                  >
                    Hire Us <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section style={{ maxWidth: "700px", margin: "80px auto 0", padding: "0 24px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7 }}
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(109,40,217,0.05) 100%)",
            borderRadius: "24px",
            padding: "48px 32px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 12px" }}>Ready to Start?</h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", margin: "0 0 24px", lineHeight: 1.6 }}>
            Let&apos;s discuss how we can help transform your digital presence.
          </p>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#2563eb",
                color: "#ffffff",
                padding: "16px 40px",
                borderRadius: "99px",
                border: "none",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 0 24px rgba(37,99,235,0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Start Project <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}