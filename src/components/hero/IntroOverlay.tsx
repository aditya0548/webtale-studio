"use client";

import { motion } from "framer-motion";

export default function IntroOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" as const }}
    >
      <motion.h1
        className="font-cormorant text-[18px] uppercase tracking-[0.5em] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" as const }}
      >
        WEBTALE STUDIO
      </motion.h1>
    </motion.div>
  );
}
