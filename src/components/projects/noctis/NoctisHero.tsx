"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NoctisHero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-[#0a0602]">
      {/* Background Layer 1: Radial Gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(200, 129, 58, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Background Layer 2: Image */}
      <div className="absolute inset-0 w-full h-full opacity-20 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80"
          alt="Coffee texture background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Steam Elements */}
      {[
        { left: "48%", delay: 0 },
        { left: "50%", delay: 0.6 },
        { left: "52%", delay: 1.2 },
      ].map((steam, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[35%] w-[1px] h-[60px]"
          style={{
            left: steam.left,
            background: "linear-gradient(to top, rgba(200, 129, 58, 0.4), transparent)",
            filter: "blur(2px)",
          }}
          initial={{ y: 0, opacity: 0.4 }}
          animate={{ y: -80, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay: steam.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[24px]">
        {/* Label */}
        <div
          className="uppercase font-sans mb-[32px] text-[10px]"
          style={{
            letterSpacing: "0.6em",
            color: "rgba(200, 129, 58, 0.6)",
          }}
        >
          OPEN SINCE MIDNIGHT
        </div>

        {/* H1 Title Lines */}
        <div className="flex flex-col items-center justify-center">
          {[
            { text: "Where", color: "#f5ede0" },
            { text: "the night", color: "#f5ede0" },
            { text: "tastes like coffee.", color: "#c8813a" },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className="italic font-light leading-none whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(64px, 9vw, 120px)",
                  color: line.color,
                }}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-[40px] h-[1px] mx-auto my-[40px]"
          style={{ backgroundColor: "rgba(200, 129, 58, 0.4)" }}
        />

        {/* Tagline */}
        <div
          className="font-sans text-[13px]"
          style={{
            color: "rgba(245, 237, 224, 0.5)",
            letterSpacing: "0.2em",
          }}
        >
          Tokyo · 2AM · Table for one.
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-[40px] left-1/2 -translate-x-1/2 font-sans text-[16px]"
        style={{ color: "rgba(200, 129, 58, 0.4)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}
