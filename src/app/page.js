"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const fader = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
  <main className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#071126] to-[#00050a] text-slate-100 overflow-hidden">
      <div className="hero-mesh" />
      <div className="bottom-mesh" />

      {/* Hero: Focused on Experience */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center py-32">
        <motion.div {...fader}>
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-tight leading-[1.02] mb-8">
            ELITE DIGITAL <br />
            <span className="text-aesthetic-accent">EXPERIENCES.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12">
            A multi-disciplinary team of Full-Stack Developers, AI Engineers, and 
            Growth Strategists dedicated to scaling your business.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all">
            Discuss Your Vision
          </Link>
        </motion.div>
      </section>

      {/* Expertise Grid: Showing the Team's Power */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Software Engineering", desc: "Full-stack Next.js systems & robust backends.", dept: "Tech Dept" },
            { title: "AI & Automation", desc: "Custom AI solutions and workflow optimization.", dept: "AI Dept" },
            { title: "Digital Growth", desc: "Data-driven marketing and performance scaling.", dept: "Business Dept" }
          ].map((item, i) => (
            <motion.div key={i} {...fader} transition={{ delay: i * 0.1 }} className="glass-card p-10 hover:border-blue-500/30 transition-all">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4 block">{item.dept}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Links Section: Pure Professional Links (glass container) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="glass-card rounded-[3rem] p-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Experience</h2>
            <p className="text-slate-400">Direct links to our successfully deployed projects and case studies.</p>
          </div>

          <div className="space-y-4">
            {[
              { name: "Enterprise E-Commerce Architecture", type: "Full Stack", link: "/projects/one" },
              { name: "AI-Powered Customer Support Logic", type: "AI Development", link: "/projects/two" },
              { name: "Performance Marketing Strategy", type: "Digital Growth", link: "/projects/three" }
            ].map((project, i) => (
              <Link key={i} href={project.link} className="flex items-center justify-between p-8 hover:bg-white/10 transition-all group rounded-lg">
                <div>
                  <span className="text-blue-500 text-xs font-mono mb-1 block uppercase">{project.type}</span>
                  <h4 className="text-xl font-bold group-hover:translate-x-2 transition-transform">{project.name}</h4>
                </div>
                <div className="text-2xl">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 5. INTERACTIVE STATS - The Scale of Impact */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass-card p-12 md:p-20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px]" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Global Clients", value: "12" },
              { label: "Tech Stack Tools", value: "25+" },
              { label: "Lines of Code", value: "1M+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <h4 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}
                </h4>
                <p className="text-blue-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 6. TEAM SECTION - The Visionaries */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic">
              The <span className="text-blue-500">Visionaries.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              The minds behind the architecture and campaigns. A collective of top-tier engineers and growth strategists.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Muzammil", role: "Founder & Lead Engineer", desc: "Architecting scalable Next.js systems and overseeing full-stack digital development." },
            { name: "Growth Lead", role: "Head of Marketing", desc: "Scaling brands through data-driven Meta ads and aesthetic content strategies." },
            { name: "AI Architect", role: "Machine Learning Dept", desc: "Building custom logic and automating business workflows for elite clients." }
          ].map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all"
            >
              {/* Circular Initial Avatar (glassy) */}
              <div className="w-20 h-20 rounded-full glass-icon mb-6 flex items-center justify-center text-blue-400 font-black text-3xl">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}