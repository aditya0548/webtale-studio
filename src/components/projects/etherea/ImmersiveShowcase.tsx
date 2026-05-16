"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImmersiveShowcase() {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#000000] flex flex-col items-center justify-center text-center px-[24px] py-[120px] overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1590736969596-1b70b1b7eda2?w=1920&q=80"
          alt="Immersive atmosphere"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        {/* Radial Glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
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

        <h2
          className="font-cormorant text-[clamp(80px,12vw,160px)] italic leading-[0.9] mt-[24px] flex flex-col items-center"
          style={{ letterSpacing: "-0.02em" }}
        >
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
