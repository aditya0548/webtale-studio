"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  { name: "Obsidian Coat", material: "Merino · Limited" },
  { name: "Chrome Drape", material: "Silk · Limited" },
  { name: "Void Shirt", material: "Cotton · Limited" },
  { name: "Fracture Trousers", material: "Wool · Limited" },
  { name: "Eclipse Blazer", material: "Blend · Limited" },
  { name: "Mirror Wrap", material: "Nylon · Limited" },
];

export default function ObsidianThreadsPage() {
  const brandStatementRef = useRef(null);
  const isBrandStatementInView = useInView(brandStatementRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16, borderColor: "rgba(255,255,255,0)" },
    visible: { opacity: 1, y: 0, borderColor: "rgba(255,255,255,0)", transition: { duration: 0.6, ease: "easeOut" as const } },
    hover: { borderColor: "rgba(255,255,255,0.15)", transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0.4 },
    visible: { opacity: 0.4 },
    hover: { opacity: 1, transition: { duration: 0.3 } }
  };

  const marqueeText = "OBSIDIAN THREADS · COLLECTION 01 · WINTER 2025 · ";

  return (
    <div className="min-h-screen bg-black">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          white-space: nowrap;
          width: max-content;
        }
      `}</style>

      {/* SECTION 1 — Editorial Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className={`relative w-full aspect-[3/4] border transition-colors duration-300 ${
              index % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#111111]"
            }`}
            data-cursor="hover"
          >
            {/* The overlay */}
            <div className="absolute bottom-0 left-0 w-full p-[20px] flex flex-col pointer-events-none">
              <motion.div variants={textVariants} className="text-white text-lg font-medium">
                {product.name}
              </motion.div>
              <motion.div variants={textVariants} className="font-sans text-[10px] text-[#c0c0c0] uppercase tracking-widest mt-1">
                {product.material}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* SECTION 2 — Statement Banner */}
      <section className="w-full border-y border-white/[0.06] overflow-hidden py-4 flex items-center">
        <div className="animate-marquee">
          <div className="flex font-sans text-[11px] text-[#c0c0c0] opacity-30 tracking-[0.5em] whitespace-nowrap uppercase">
            {/* Repeat the text multiple times for seamless scrolling */}
            {marqueeText.repeat(10)}
          </div>
          <div className="flex font-sans text-[11px] text-[#c0c0c0] opacity-30 tracking-[0.5em] whitespace-nowrap uppercase">
            {marqueeText.repeat(10)}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Brand Statement */}
      <section
        ref={brandStatementRef}
        className="w-full py-[160px] flex flex-col items-center justify-center px-6"
      >
        <motion.h2
          className="font-serif text-[80px] text-white italic leading-tight text-center"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isBrandStatementInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Wear the dark.
        </motion.h2>
        <motion.p
          className="font-sans text-[16px] text-[#c0c0c0] opacity-60 max-w-[420px] text-center mt-[24px]"
          initial={{ opacity: 0, y: 10 }}
          animate={isBrandStatementInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          A collection for those who move in shadow and dress in intention.
        </motion.p>
      </section>
    </div>
  );
}
