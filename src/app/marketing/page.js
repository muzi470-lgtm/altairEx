"use client";
import { motion } from "framer-motion";

export default function MarketingPage() {
  const fader = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#071126] to-[#00050a] pt-40 px-6 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <motion.div {...fader} className="mb-24">
          <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Creative Division</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase leading-[0.85]">
            Market <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">Domination.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-xl leading-relaxed">
            We don't just run campaigns; we engineer brand legacies. Fusing 
            data-driven ROI with high-end visual storytelling.
          </p>
        </motion.div>

        {/* Marketing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {[
            { 
              title: "Performance Scaling", 
              desc: "ROI-focused Meta & Google Ad campaigns designed to turn local brands into global leaders.",
              tag: "Revenue"
            },
            { 
              title: "Aesthetic Direction", 
              desc: "Creating Pinterest-worthy visual identities that demand attention and command higher prices.",
              tag: "Creative"
            },
            { 
              title: "Conversion Logic", 
              desc: "Optimizing customer journeys to ensure every click turns into a high-ticket sale.",
              tag: "Strategy"
            },
            { 
              title: "Retention Systems", 
              desc: "Building email and automation loops that keep your customers coming back forever.",
              tag: "Growth"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fader}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 hover:border-blue-500/40 group transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <span className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full text-slate-500 uppercase">{item.tag}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}