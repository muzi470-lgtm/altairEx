"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Zoom modal state
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomForm, setZoomForm] = useState({ name: "", number: "", email: "", message: "" });
  const [zoomSent, setZoomSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleZoomSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const waText = encodeURIComponent(
      `Hi, I want to schedule a Zoom meeting with you.\n\nName: ${zoomForm.name}\nEmail: ${zoomForm.email}\nPhone: ${zoomForm.number}\nMessage: ${zoomForm.message}`
    );

    // Build email body
    const emailSubject = encodeURIComponent("Zoom Meeting Request - " + zoomForm.name);
    const emailBody = encodeURIComponent(
      `Hello Team,\n\nI would like to schedule a Zoom meeting with you.\n\nName: ${zoomForm.name}\nEmail: ${zoomForm.email}\nPhone: ${zoomForm.number}\nMessage: ${zoomForm.message}\n\nBest regards,\n${zoomForm.name}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/923390100470?text=${waText}`, "_blank");

    // Open Email
    window.open(`mailto:muzammiln411@gmail.com?subject=${emailSubject}&body=${emailBody}`, "_blank");

    setZoomSent(true);
  };

  const closeZoomModal = () => {
    setZoomOpen(false);
    setZoomSent(false);
    setZoomForm({ name: "", number: "", email: "", message: "" });
  };

  const socials = [
    { label: "Instagram", href: "https://instagram.com", icon: <CameraIcon /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <BriefcaseIcon /> },
    { label: "GitHub", href: "https://github.com", icon: <GitHubIcon /> },
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#020617", color: "#f9f1f4" }}>

      {/* Mesh Lights */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-80px", width: "600px", height: "600px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "500px", height: "500px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* Header */}
      <section style={{ position: "relative", zIndex: 1, paddingTop: "80px", paddingBottom: "40px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span style={{ display: "inline-block", marginBottom: "20px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.1)", padding: "8px 20px", borderRadius: "9999px" }}>
            Get In Touch
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#ffffff", margin: "0 0 16px" }}>
            Let&apos;s Build Something{" "}
            <span style={{ color: "#60a5fa" }}>Great.</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, margin: "0 auto", maxWidth: "480px" }}>
            Have a project in mind? Fill out the form or reach out directly.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section style={{ position: "relative", zIndex: 1, paddingTop: "20px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "1000px", marginLeft: "auto", marginRight: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "start" }}>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", padding: "32px" }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <CheckIcon />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", margin: "0 0 8px" }}>Message Sent!</h3>
              <p style={{ color: "#94a3b8", margin: 0 }}>We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: "0 0 24px" }}>Send a Message</h2>

              {/* Name */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>Your Name</label>
                <input type="text" placeholder="Your name here" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>Email Address</label>
                <input type="email" placeholder="your.email@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", resize: "vertical", transition: "border-color 0.2s", fontFamily: "inherit" }}
                  onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              <button onClick={handleSubmit}
                style={{ width: "100%", background: "#2563eb", color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", borderRadius: "10px", border: "none", cursor: "pointer", boxShadow: "0 0 24px rgba(37,99,235,0.4)", transition: "transform 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.background = "#3b82f6"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#2563eb"; }}
              >
                Send Message →
              </button>
            </>
          )}
        </motion.div>

        {/* Info + Socials + Zoom */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          {/* Zoom Meeting Card */}
          <div style={{ borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", padding: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", filter: "blur(30px)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "12px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(59,130,246,0.25)", color: "#60a5fa" }}>
                <VideoIcon />
              </span>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>Let&apos;s Meet on Zoom</h3>
                <p style={{ fontSize: "0.75rem", color: "#64748b", margin: "2px 0 0" }}>Schedule a 15-min call</p>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.6, margin: "0 0 16px" }}>
              Prefer a face-to-face conversation? Book a quick Zoom call with our team and discuss your project in real time.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setZoomOpen(true)}
              style={{ width: "100%", background: "rgba(37,99,235,0.15)", color: "#60a5fa", fontWeight: 700, fontSize: "0.9rem", padding: "12px 0", borderRadius: "10px", border: "1px solid rgba(59,130,246,0.3)", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,99,235,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(37,99,235,0.15)"; }}
            >
              Request Zoom Meeting →
            </motion.button>
          </div>

          {/* Direct Contact — Email + WhatsApp */}
          <div style={{ borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", padding: "28px" }}>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#60a5fa", margin: "0 0 20px" }}>
              Direct Contact
            </h3>

            {/* Email row */}
            <a href="mailto:muzammiln411@gmail.com" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "opacity 0.2s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.75"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                <span style={{ display: "flex", alignItems: "center", color: "#60a5fa" }}><MailIcon /></span>
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" }}>Email</p>
                  <p style={{ fontSize: "0.95rem", color: "#e2e8f0", fontWeight: 500, margin: 0 }}>muzammiln411@gmail.com</p>
                </div>
              </div>
            </a>

            {/* WhatsApp row */}
            <a
              href="https://wa.me/923390100470"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 0", borderRadius: "10px", transition: "all 0.2s", cursor: "pointer", marginTop: "4px" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,197,94,0.06)"; e.currentTarget.style.paddingLeft = "8px"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.paddingLeft = "0"; }}
              >
                <span style={{ display: "flex", alignItems: "center", color: "#22c55e" }}><WhatsAppIcon /></span>
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" }}>WhatsApp</p>
                  <p style={{ fontSize: "0.95rem", color: "#e2e8f0", fontWeight: 500, margin: 0 }}>+92 339 0100470</p>
                </div>
                <span style={{ marginLeft: "auto", fontSize: "0.7rem", fontWeight: 700, color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", padding: "3px 10px", borderRadius: "9999px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                  Open Chat →
                </span>
              </div>
            </a>
          </div>

          {/* Socials */}
          <div style={{ borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", padding: "28px" }}>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#60a5fa", margin: "0 0 20px" }}>
              Follow Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", transition: "background 0.2s, border-color 0.2s", cursor: "pointer" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(96,165,250,0.08)"; e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                  >
                    <span style={{ display: "flex", alignItems: "center", color: "#60a5fa" }}>{s.icon}</span>
                    <span style={{ color: "#e2e8f0", fontWeight: 500, fontSize: "0.9rem" }}>{s.label}</span>
                    <span style={{ marginLeft: "auto", color: "#475569", fontSize: "0.8rem" }}>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── ZOOM MODAL ── */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(2,6,23,0.95)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "100%", maxWidth: "520px", background: "#0f172a", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", padding: "40px", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeZoomModal}
                style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", width: "36px", height: "36px", borderRadius: "10px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <CloseIcon />
              </motion.button>

              {zoomSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: "center", padding: "20px 0" }}
                >
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#22c55e" }}>
                    <CheckIconSmall />
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", margin: "0 0 10px" }}>Response Sent!</h3>
                  <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                    Your request has been received. Our team will contact you soon to schedule the Zoom meeting.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={closeZoomModal}
                    style={{ marginTop: "28px", background: "#2563eb", color: "#ffffff", fontWeight: 700, fontSize: "0.9rem", padding: "12px 32px", borderRadius: "10px", border: "none", cursor: "pointer" }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(59,130,246,0.25)", color: "#60a5fa" }}>
                      <VideoIcon />
                    </span>
                    <div>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>Request Zoom Meeting</h3>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Fill in your details below</p>
                    </div>
                  </div>

                  <form onSubmit={handleZoomSubmit} style={{ marginTop: "24px" }}>
                    {/* Name */}
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={zoomForm.name}
                        onChange={e => setZoomForm({ ...zoomForm, name: e.target.value })}
                        style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>

                    {/* Phone Number */}
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="Your WhatsApp number"
                        value={zoomForm.number}
                        onChange={e => setZoomForm({ ...zoomForm, number: e.target.value })}
                        style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={zoomForm.email}
                        onChange={e => setZoomForm({ ...zoomForm, email: e.target.value })}
                        style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>Message</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="What would you like to discuss?"
                        value={zoomForm.message}
                        onChange={e => setZoomForm({ ...zoomForm, message: e.target.value })}
                        style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#ffffff", fontSize: "0.95rem", padding: "12px 16px", outline: "none", resize: "vertical", transition: "border-color 0.2s", fontFamily: "inherit" }}
                        onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ width: "100%", background: "#2563eb", color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", borderRadius: "10px", border: "none", cursor: "pointer", boxShadow: "0 0 24px rgba(37,99,235,0.4)", transition: "background 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#3b82f6"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; }}
                    >
                      Send Request →
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Icons ── */
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CheckIconSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}