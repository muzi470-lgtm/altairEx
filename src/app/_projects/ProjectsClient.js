"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectsClients() {
  // ── 1. PROJECT DATA ──
  const PROJECTS = [
    {
      id: 1,
      title: "Fintech Dashboard Pro",
      category: "Web Application",
      desc: "A highly secure and scalable financial dashboard managing $2M+ daily transactions. Built with real-time data visualization and biometric auth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", 
      techStack: ["Next.js", "Tailwind", "PostgreSQL"],
      liveLink: "https://yourlink.com",
      accent: "#60a5fa"
    },
    {
      id: 2,
      title: "AI E-Commerce Engine",
      category: "Artificial Intelligence",
      desc: "Smart recommendation engine boosting retail sales by 35% through predictive user behavior modeling and automated funnels.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      techStack: ["React", "Python", "TensorFlow"],
      liveLink: "https://yourlink.com",
      accent: "#a78bfa"
    },
    {
      id: 3,
      title: "MedSync Health Portal",
      category: "Enterprise System",
      desc: "HIPAA-compliant patient management system connecting 50+ clinics. Streamlined scheduling and telehealth video integrations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173ff94031d?q=80&w=1000&auto=format&fit=crop",
      techStack: ["Node.js", "AWS", "WebRTC"],
      liveLink: "https://yourlink.com",
      accent: "#34d399"
    }
  ];

  return (
    // ── 2. MAIN CONTAINER ──
    <div 
      style={{ 
        height: "100vh", 
        width: "100%",
        overflowY: "auto", 
        overflowX: "hidden", 
        scrollSnapType: "y mandatory", 
        backgroundColor: "#020617", 
        color: "#f1f5f9",
        position: "relative"
      }}
    >
      {/* Background Mesh */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "20%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* ── 3. PROJECTS MAPPING ── */}
      {PROJECTS.map((project, index) => (
        <section 
          key={project.id} 
          style={{ 
            height: "100vh", 
            width: "100%", 
            scrollSnapAlign: "start", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            position: "relative", 
            zIndex: 1,
            padding: "24px"
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.4 }}
            style={{
              width: "100%",
              maxWidth: "1150px",
              height: "75vh",
              display: "flex",
              borderRadius: "32px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
              overflow: "hidden"
            }}
          >
            {/* Left Side - Image */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
              <motion.img 
                src={project.image} 
                alt={project.title}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
              />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, transparent, rgba(2,6,23,0.95))` }} />
            </div>

            {/* Right Side - Details */}
            <div style={{ flex: 1, padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center", background: "rgba(2, 6, 23, 0.4)" }}>
              <span style={{ color: project.accent, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "16px" }}>
                0{index + 1} — {project.category}
              </span>
              <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "20px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {project.title}
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "36px", paddingRight: "20px" }}>
                {project.desc}
              </p>
              
              {/* Tech Stack */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                {project.techStack.map(tech => (
                  <span key={tech} style={{ padding: "8px 16px", borderRadius: "99px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "0.8rem", fontWeight: "bold", color: "#cbd5e1" }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ marginTop: "auto" }}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <button style={{ padding: "16px 32px", background: project.accent, color: "#fff", border: "none", borderRadius: "14px", fontWeight: "bold", fontSize: "1rem", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", transition: "0.2s", boxShadow: `0 10px 30px ${project.accent}40` }}>
                    Live Project <ExternalLink size={18} />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      ))}

      {/* ── 4. EXTREME GLOBAL CSS TO KILL ALL SCROLLBARS ── */}
      {/* Yeh code chahay body ho, html ho, ya koi container, sab ke scrollbars ko force-hide kar dega */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Chrome, Safari, Edge ke liye universal hiding */
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }

        /* Firefox aur IE ke liye universal hiding */
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }

        /* Body ki extra height ki wajah se banne wala scrollbar band karna */
        html, body {
          overflow-x: hidden !important;
        }
      `}} />
      
    </div>
  );
}