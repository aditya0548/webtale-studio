"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NoctisCafePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuInView = useInView(menuRef, { once: true, amount: 0.5 });
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Layer 1 (slowest, factor 0.1)
      gsap.to(layer1Ref.current, {
        y: () => -(containerRef.current?.offsetHeight || 0) * 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Layer 2 (medium, factor 0.25)
      gsap.to(layer2Ref.current, {
        y: () => -(containerRef.current?.offsetHeight || 0) * 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Layer 3 (fastest, factor 0.5)
      gsap.to(layer3Ref.current, {
        y: () => -(containerRef.current?.offsetHeight || 0) * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-black text-white overflow-hidden relative font-sans">
      {/* SECTION 1 — Atmosphere Header */}
      <section
        className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #1a0a00, #0d0500)' }}
      >
        <div className="text-center z-10 flex flex-col items-center justify-center gap-4">
          <p
            className="text-[14px] tracking-[0.3em] font-serif"
            style={{ color: 'rgba(201, 168, 76, 0.4)' }}
          >
            夜のカフェ
          </p>
          <h1 className="text-[96px] text-white italic font-serif leading-none">
            Noctis Café
          </h1>
          <p
            className="text-[16px] font-sans"
            style={{ color: 'rgba(192, 192, 192, 0.6)' }}
          >
            Where the night tastes like coffee.
          </p>
        </div>

        {/* Floating Steam Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[40px] bg-white rounded-full blur-[3px]"
              style={{
                marginLeft: `${(i - 1) * 100}px`, // space them out
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0, 0.2]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2 — Layered Parallax Scene */}
      <section ref={containerRef} className="relative w-full h-[200vh] overflow-hidden bg-black flex items-center justify-center">
        {/* Layer 1 (Slowest) */}
        <div
          ref={layer1Ref}
          className="absolute top-0 w-full h-[120vh] bg-[#0d0500]"
        />

        {/* Layer 2 (Medium) */}
        <div
          ref={layer2Ref}
          className="absolute flex gap-12"
        >
          <div className="w-[120px] h-[200px] rounded-full border border-[rgba(200,120,40,0.1)] shadow-[0_0_60px_rgba(200,120,40,0.3)] bg-[rgba(200,120,40,0.05)]" />
          <div className="w-[120px] h-[200px] rounded-full border border-[rgba(200,120,40,0.1)] shadow-[0_0_60px_rgba(200,120,40,0.3)] bg-[rgba(200,120,40,0.05)]" />
        </div>

        {/* Layer 3 (Fastest) */}
        <div
          ref={layer3Ref}
          className="absolute z-10"
        >
          <p className="text-[12px] font-sans text-center" style={{ color: 'rgba(192, 192, 192, 0.4)' }}>
            Open 10PM–4AM
          </p>
        </div>
      </section>

      {/* SECTION 3 — Menu Teaser */}
      <section className="w-full py-32 flex justify-center bg-black">
        <div ref={menuRef} className="flex flex-col gap-[32px] items-center text-center">
          {[
            { name: "Midnight Espresso", desc: "Served at 11" },
            { name: "Amber Latte", desc: "Warm and slow" },
            { name: "Dark Blend No.4", desc: "Our signature" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -32, opacity: 0 }}
              animate={isMenuInView ? { x: 0, opacity: 1 } : { x: -32, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-[32px] font-serif text-white">{item.name}</h3>
              <p className="text-[12px] font-sans" style={{ color: 'rgba(192, 192, 192, 0.5)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Closing */}
      <section className="w-full py-[120px] flex flex-col items-center justify-center text-center bg-black">
        <h2 className="text-[48px] font-serif italic text-white max-w-2xl px-4">
          &quot;Some places are felt before they are found.&quot;
        </h2>
        <p className="text-[12px] font-sans mt-[24px]" style={{ color: 'rgba(192, 192, 192, 0.4)' }}>
          Noctis Café. Coming soon to a screen near you.
        </p>
      </section>
    </main>
  );
}
