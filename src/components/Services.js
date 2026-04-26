"use client";
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const services = [
  {
    title: "Software Engineering",
    tag: "Tech Dept",
    desc: "Full-stack Next.js systems & robust backends.",
    icon: "Code",
    fallback: "⚙️",
  },
  {
    title: "AI & Automation",
    tag: "AI Dept",
    desc: "Custom AI solutions and workflow optimization.",
    icon: "Cpu",
    fallback: "🤖",
  },
  {
    title: "Digital Growth",
    tag: "Business Dept",
    desc: "Data-driven marketing and performance scaling.",
    icon: "TrendingUp",
    fallback: "📈",
  },
  {
    title: "Design & UX",
    tag: "Design",
    desc: "High-fidelity interfaces and motion-driven experiences.",
    icon: "Feather",
    fallback: "🎨",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-blue-400">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Services</h2>
      </div>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((s, i) => {
          const IconComp = LucideIcons[s.icon];
          return (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="service-icon text-blue-500 flex-shrink-0">
                  {IconComp ? (
                    <IconComp size={20} strokeWidth={1.6} />
                  ) : (
                    <span className="text-2xl">{s.fallback}</span>
                  )}
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-blue-400">{s.tag}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{s.title}</h3>
                </div>
              </div>

              <p className="text-slate-400 mt-3 text-sm">{s.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
