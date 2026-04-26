"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Services from "../components/Services";

export default function Home() {
  

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#020617",
      color: "#f1f5f9",
    }}>

      {/* Mesh Lights */}
      <div aria-hidden="true" style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          top: "-100px", right: "-80px",
          width: "600px", height: "600px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-100px", left: "-80px",
          width: "500px", height: "500px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px", height: "400px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
      </div>

      {/* Hero Section */}
      <section style={{
        position: "relative",
        zIndex: 1,
        paddingTop: "100px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <span style={{
            display: "inline-block",
            marginBottom: "24px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#60a5fa",
            border: "1px solid rgba(59,130,246,0.35)",
            background: "rgba(59,130,246,0.1)",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderRadius: "9999px",
          }}>
            Elite Digital Agency
          </span>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginTop: 0,
            marginBottom: "24px",
            marginLeft: 0,
            marginRight: 0,
            color: "#ffffff",
          }}>
            ELITE DIGITAL{" "}
            <span style={{ color: "#60a5fa" }}>EXPERIENCES.</span>
          </h1>

          {/* Subtext */}
          <p style={{
            color: "#94a3b8",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginTop: 0,
            marginBottom: "40px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            A multi-disciplinary team dedicated to scaling your business with
            precision and creativity.
          </p>

          {/* Button */}
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                background: "#2563eb",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1rem",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "40px",
                paddingRight: "40px",
                borderRadius: "9999px",
                boxShadow: "0 0 40px rgba(37,99,235,0.45)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(37,99,235,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(37,99,235,0.45)";
              }}
            >
              Discuss Your Vision →
            </span>
          </Link>
        </motion.div>
      </section>

      {/* Services Section (modular component) */}
      <Services />
    </div>
  );
}