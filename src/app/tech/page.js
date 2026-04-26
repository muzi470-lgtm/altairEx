"use client";
import { motion } from "framer-motion";

export default function TechPage() {
  const fader = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#071126] to-[#00050a] pt-40 px-6 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <motion.div {...fader} className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">
            Tech <span className="text-blue-500">&</span> AI <br/>Engineering
          </h1>
          <p className="text-slate-400 max-w-2xl text-xl leading-relaxed">
            Scalable architecture and custom software logic. We turn complex 
            problems into seamless digital products.
          </p>
        </motion.div>

        {/* Technical Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fader} transition={{ delay: 0.2 }} className="glass-card p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 glass-icon flex items-center justify-center text-blue-400 font-black text-lg">JS</div>
              <div>
                <h3 className="text-blue-500 font-mono text-xs mb-2 uppercase tracking-widest">Development</h3>
                <h4 className="text-2xl font-bold text-white mb-0">Modern Full-Stack</h4>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Building with Next.js 15 for speed, SEO, and ultimate performance.</p>
          </motion.div>

          <motion.div {...fader} transition={{ delay: 0.3 }} className="glass-card p-10 border-blue-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 glass-icon flex items-center justify-center text-blue-400 font-black text-lg">AI</div>
              <div>
                <h3 className="text-blue-500 font-mono text-xs mb-2 uppercase tracking-widest">Intelligence</h3>
                <h4 className="text-2xl font-bold text-white mb-0">AI Integration</h4>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Custom LLM implementation and automated business workflows.</p>
          </motion.div>
        </div>

      </div>
    </main>
  );
}