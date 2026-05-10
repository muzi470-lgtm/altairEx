"use client";
import { motion } from "framer-motion";

export default function Services() {
  const servicesData = [
    {
      id: "01",
      category: "Engineering",
      title: "Custom Software Solutions",
      desc: "We architect scalable, high-performance web applications using modern frameworks like Next.js. Built for speed, security, and seamless user experiences."
    },
    {
      id: "02",
      category: "Intelligence",
      title: "AI & Workflow Automation",
      desc: "Integrating custom AI models and automated pipelines into your business to reduce manual tasks, optimize costs, and scale operations rapidly."
    },
    {
      id: "03",
      category: "Growth",
      title: "Data-Driven Marketing",
      desc: "Precision ad campaigns across Meta and Google. We focus on advanced analytics and aesthetic creatives to maximize your Return on Ad Spend (ROAS)."
    },
    {
      id: "04",
      category: "Design",
      title: "UI/UX & Brand Identity",
      desc: "Crafting premium, user-centric interfaces. From wireframes to glassmorphism aesthetics, we ensure your digital presence is elite and conversion-optimized."
    }
  ];

  return (
    <section style={{ position: "relative", zIndex: 10, padding: "120px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* 1. Header Section */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
             <span style={{ color: "#3b82f6", fontFamily: "monospace", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "12px", display: "block", marginBottom: "16px" }}>
               Our Capabilities
             </span>
             <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.05em", color: "#ffffff", marginBottom: "24px", margin: 0 }}>
               Premium <span style={{ color: "#3b82f6" }}>Services.</span>
             </h2>
             <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "24px auto 0", fontSize: "1.125rem", lineHeight: 1.7 }}>
               End-to-end digital transformation for businesses that demand excellence and scalable growth.
             </p>
         </motion.div>
      </div>

      {/* 2. Services Grid */}
      <div className="services-grid" style={{ display: "grid", gap: "32px" }}>
        {servicesData.map((s, i) => (
           <motion.div
             key={s.id}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className="service-card"
             style={{
               borderRadius: "24px",
               border: "1px solid rgba(255,255,255,0.05)",
               background: "rgba(255,255,255,0.03)",
               backdropFilter: "blur(10px)",
               WebkitBackdropFilter: "blur(10px)",
               padding: "48px",
               display: "flex",
               flexDirection: "column",
               transition: "all 0.4s ease",
               cursor: "pointer"
             }}
             // Hover Logic (Bypassing Tailwind's group-hover)
             onMouseEnter={(e) => {
               e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
               e.currentTarget.querySelector('.arrow-icon').style.transform = "translateX(8px)";
               e.currentTarget.querySelector('.action-btn').style.color = "#ffffff";
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
               e.currentTarget.querySelector('.arrow-icon').style.transform = "translateX(0)";
               e.currentTarget.querySelector('.action-btn').style.color = "#64748b";
             }}
           >
             {/* Card Top Bar */}
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px", marginBottom: "32px" }}>
               <span style={{ color: "#3b82f6", fontSize: "10px", fontFamily: "monospace", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.15em" }}>{s.category}</span>
               <span style={{ color: "#475569", fontFamily: "monospace", fontSize: "14px" }}>[{s.id}]</span>
             </div>
             
             {/* Card Content */}
             <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#ffffff", margin: "0 0 16px 0" }}>{s.title}</h3>
             <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 40px 0", flexGrow: 1 }}>{s.desc}</p>
             
             {/* Action Button */}
             <button className="action-btn" style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", display: "flex", alignItems: "center", gap: "12px", transition: "color 0.3s ease", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
               Discuss Project <span className="arrow-icon" style={{ color: "#3b82f6", transition: "transform 0.3s ease", fontSize: "16px" }}>→</span>
             </button>
           </motion.div>
        ))}
      </div>

      {/* 3. Responsive CSS (Bypassing Tailwind Grid) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
}