"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EthereaHero() {
  return (
    <section className="relative w-full h-[100vh] bg-[#0a0608] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=1920&q=80"
          alt="Dark perfume bottle atmospheric"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(10,6,8,0.65)]" />
      </div>

      {/* Noise/Grain Texture Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Background Layer 1: Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(125,40,64,0.12) 0%, rgba(192,57,43,0.04) 40%, transparent 70%)"
        }}
      />

      {/* Background Layer 2: Atmospheric layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(125,40,64,0.04) 40%, rgba(10,6,8,0.95) 100%)"
        }}
      />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[24px]">
        {/* Small label */}
        <div className="font-inter text-[12px] tracking-[0.6em] text-[#7d2840] mb-[32px] opacity-100">
          EAU DE PARFUM
        </div>

        {/* Main heading */}
        <h1
          className="flex flex-col items-center justify-center font-cormorant text-[clamp(72px,10vw,130px)] italic font-light leading-none"
          style={{ textShadow: "0 0 80px rgba(125,40,64,0.2)" }}
        >
          <motion.span
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, delay: 0, ease: "easeOut" }}
            className="text-[#f2ece6] pb-1"
          >
            The
          </motion.span>
          <motion.span
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="text-[#f2ece6] pb-1"
          >
            Scent
          </motion.span>
          <motion.span
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-[#c0392b] pb-1"
          >
            of Blood.
          </motion.span>
        </h1>

        {/* Thin divider */}
        <div className="w-[40px] h-[1px] bg-[rgba(125,40,64,0.5)] my-[40px]" />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-inter text-[16px] text-[rgba(242,236,230,0.6)] tracking-[0.15em]"
        >
          A fragrance born from stillness.
        </motion.p>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
        <span className="font-inter text-[10px] text-[rgba(242,236,230,0.35)] tracking-[0.4em] mb-[12px]">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-[48px] origin-top"
          style={{
            background: "linear-gradient(to bottom, rgba(125,40,64,0.6), transparent)"
          }}
          animate={{ scaleY: [0, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
