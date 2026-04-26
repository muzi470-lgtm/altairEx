"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fader = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#071126] to-[#00050a] pt-40 px-6 text-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div {...fader} className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">
            Let's <span className="text-blue-500 italic">Connect.</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Ready to scale your digital presence? Tell us about your vision.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          {...fader} 
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 mb-20"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Email Address</label>
                <input type="email" placeholder="john@agency.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Project Brief</label>
              <textarea rows="5" placeholder="Tell us about your goals..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg shadow-blue-600/20">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}