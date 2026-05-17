"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NoctisClosing() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#0a0602] flex flex-col items-center justify-center text-center px-[24px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-8 pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Radial Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200, 129, 58, 0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Quote */}
        <h2
          className="italic leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(48px, 6vw, 80px)",
            color: "#f5ede0",
          }}
        >
          <span className="block">Some places are felt</span>
          <span className="block" style={{ color: "#c8813a" }}>
            before they are found.
          </span>
        </h2>

        {/* Attribution */}
        <div
          className="mt-[24px] uppercase font-sans text-[12px]"
          style={{
            letterSpacing: "0.3em",
            color: "rgba(245, 237, 224, 0.3)",
          }}
        >
          — Noctis Café, Tokyo
        </div>

        {/* Button */}
        <button
          className="mt-[64px] px-[56px] py-[18px] uppercase font-sans text-[12px] transition-all duration-300"
          style={{
            border: "1px solid rgba(200, 129, 58, 0.4)",
            letterSpacing: "0.3em",
            color: "#f5ede0",
            backgroundColor: "transparent",
          }}
          data-cursor="hover"
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "rgba(200, 129, 58, 0.08)";
            (e.target as HTMLElement).style.borderColor = "rgba(200, 129, 58, 0.8)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "transparent";
            (e.target as HTMLElement).style.borderColor = "rgba(200, 129, 58, 0.4)";
          }}
        >
          Reserve a Table
        </button>
      </motion.div>
    </section>
  );
}
