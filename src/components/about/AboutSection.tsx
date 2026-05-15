"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "Next.js",
  "Three.js",
  "GSAP",
  "Framer Motion",
  "Blender",
  "Storytelling",
];

const headingLines = ["I craft", "immersive", "digital worlds."];

const paragraphs = [
  "Aditya is a cinematic creator and interactive storyteller based in India, building digital experiences that live at the intersection of film, art, and technology.",
  "With a deep background in animation and narrative design, every project is approached as a visual story — where motion, light, and interaction are the language.",
  "Currently pursuing BSc. Computer Science while building Webtale Studio — a one-person creative lab for world-class web experiences.",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black py-[120px] px-6 md:px-[80px] flex flex-col md:flex-row gap-16 md:gap-0"
    >
      {/* Decorative 01 */}
      <div className="absolute top-0 left-0 pt-[120px] pl-6 md:pl-[80px] pointer-events-none select-none">
        <span className="font-cormorant text-[120px] leading-none text-silver/8">
          01
        </span>
      </div>

      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col justify-center relative z-10 pt-24 md:pt-0">
        <span className="font-inter text-[10px] tracking-[0.4em] text-silver/50 mb-8 uppercase">
          About
        </span>

        <h2 className="font-cormorant text-[64px] leading-tight text-white italic">
          {headingLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={
                  isInView
                    ? { clipPath: "inset(0% 0 0 0)" }
                    : { clipPath: "inset(100% 0 0 0)" }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1], // easeOutCubic
                  delay: index * 0.15,
                }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h2>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 flex flex-col justify-center md:pl-[80px] relative z-10">
        <div className="flex flex-col gap-6 max-w-[480px]">
          {paragraphs.map((p, index) => (
            <motion.p
              key={index}
              className="font-inter text-[15px] leading-[1.8] text-silver/70"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2 + 0.3, // Add base delay to wait for heading a bit
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Skills Row */}
        <motion.div
          className="mt-12 flex flex-wrap gap-[32px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="font-inter text-[11px] tracking-[0.2em] text-silver/50 uppercase"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Horizontal Rule */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-silver/10" />
    </section>
  );
}
