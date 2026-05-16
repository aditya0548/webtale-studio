"use client";

import { motion } from "framer-motion";

export default function ImmersiveShowcase() {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#050500] flex flex-col items-center justify-center text-center px-[24px] py-[120px] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Large circle */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[rgba(201,168,76,0.04)]" />
        {/* Smaller circle inside */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-[rgba(201,168,76,0.04)] opacity-50" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 flex flex-col items-center max-w-[800px]"
      >
        <div className="font-inter text-[10px] tracking-[0.6em] text-[rgba(201,168,76,0.4)]">
          THE EXPERIENCE
        </div>

        <h2 className="font-cormorant text-[80px] md:text-[120px] italic leading-[0.9] mt-[24px] flex flex-col items-center">
          <span className="text-white">Not worn.</span>
          <span className="text-[#c9a84c]">Experienced.</span>
        </h2>

        <p className="font-inter text-[15px] text-silver/40 mt-[40px] max-w-[400px]">
          Étheréa is the space between presence and memory.
        </p>
      </motion.div>
    </section>
  );
}
