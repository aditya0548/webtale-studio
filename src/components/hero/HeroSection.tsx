'use client';

import { motion } from 'framer-motion';
import ParticleField from './ParticleField';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 1.2,
      ease: "easeOut" as const,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layer 1: Particle Field */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Layer 2: Radial Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%)'
        }}
      />

      {/* Layer 3: Text Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-inter text-[11px] tracking-[0.4em] text-silver/60 uppercase">
              WEBTALE STUDIO
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="flex flex-col items-center text-center font-cormorant italic text-[48px] md:text-[96px] leading-[1.1]">
            <motion.span variants={itemVariants} className="text-white">Cinematic</motion.span>
            <motion.span variants={itemVariants} className="text-white">Digital</motion.span>
            <motion.span variants={itemVariants} className="text-gold">Experiences</motion.span>
          </motion.h1>

          {/* Divider Line */}
          <motion.div variants={itemVariants} className="my-8 h-[1px] w-[60px] bg-silver" />

          {/* Tagline Paragraph */}
          <motion.p variants={itemVariants} className="text-center font-inter text-[15px] text-silver/60 max-w-[380px]">
            Stories crafted through motion, light, and immersive interaction.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-row gap-4">
            <button
              className="rounded-none border border-silver bg-black px-[32px] py-[14px] text-white transition-colors duration-200 hover:bg-white/5"
              data-cursor="hover"
            >
              View Work
            </button>
            <button
              className="rounded-none border border-silver/40 bg-transparent px-[32px] py-[14px] text-silver transition-colors duration-200 hover:bg-white/5"
              data-cursor="hover"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
