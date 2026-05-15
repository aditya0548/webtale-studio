"use client";

import { motion } from "framer-motion";
import AIOrb from "@/components/projects/veltrix/AIOrb";

export default function VeltrixAIPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* SECTION 1 — Cinematic Orb */}
      <section className="relative w-full">
        <AIOrb />
      </section>

      {/* SECTION 2 — Holographic Dashboard UI */}
      <section className="relative w-full py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px] mx-auto border border-[#3b82f6]/15 bg-[#0a0a1a]/80 backdrop-blur-md p-8 flex flex-col md:flex-row gap-8"
        >
          {/* LEFT: Metrics */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Metric 1 */}
            <div className="bg-[#0a0a1a]/90 border border-[#3b82f6]/10 p-5">
              <div className="text-[10px] text-silver/40 tracking-[0.2em] uppercase mb-2">
                Neural Load
              </div>
              <div className="text-[28px] text-[#3b82f6]">
                84.2%
              </div>
            </div>
            {/* Metric 2 */}
            <div className="bg-[#0a0a1a]/90 border border-[#3b82f6]/10 p-5">
              <div className="text-[10px] text-silver/40 tracking-[0.2em] uppercase mb-2">
                Active Agents
              </div>
              <div className="text-[28px] text-[#3b82f6]">
                1,247
              </div>
            </div>
            {/* Metric 3 */}
            <div className="bg-[#0a0a1a]/90 border border-[#3b82f6]/10 p-5">
              <div className="text-[10px] text-silver/40 tracking-[0.2em] uppercase mb-2">
                Data Streams
              </div>
              <div className="text-[28px] text-[#3b82f6]">
                48.3TB
              </div>
            </div>
            {/* Metric 4 */}
            <div className="bg-[#0a0a1a]/90 border border-[#3b82f6]/10 p-5">
              <div className="text-[10px] text-silver/40 tracking-[0.2em] uppercase mb-2">
                Uptime
              </div>
              <div className="text-[28px] text-[#3b82f6]">
                99.97%
              </div>
            </div>
          </div>

          {/* RIGHT: Agent Log */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="text-[10px] tracking-[0.4em] text-silver/40 uppercase">
              LIVE AGENT FEED
            </div>
            <div className="flex flex-col gap-3 text-[12px] text-silver/60">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Agent-01 &middot; Task complete &middot; 0.2s</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#3b82f6]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                />
                <span>Agent-07 &middot; Processing stream &middot; Active</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Agent-12 &middot; Anomaly detected &middot; Warning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-silver" />
                <span>Agent-03 &middot; Idle</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
                <span>Agent-19 &middot; Initializing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — Tagline Closer */}
      <section className="relative w-full py-[120px] flex flex-col items-center justify-center text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-[72px] italic text-white leading-tight">
          Intelligence. Elevated.
        </h2>
        <p className="mt-4 text-[13px] text-silver/50">
          Veltrix AI &mdash; The operating system of tomorrow.
        </p>
      </section>
    </main>
  );
}
