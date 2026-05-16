"use client";

import { motion } from "framer-motion";
import EthereaNav from "@/components/projects/etherea/EthereaNav";
import EthereaHero from "@/components/projects/etherea/EthereaHero";
import PerfumeBottle from "@/components/projects/etherea/PerfumeBottle";
import ScentNarrative from "@/components/projects/etherea/ScentNarrative";
import ImmersiveShowcase from "@/components/projects/etherea/ImmersiveShowcase";
import EthereaCTA from "@/components/projects/etherea/EthereaCTA";
import EthereaFooter from "@/components/projects/etherea/EthereaFooter";

export default function EthereaPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col bg-black w-full min-h-screen text-white font-inter relative"
    >
      {/* Global Background Gradient */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.03) 0%, transparent 60%)",
        }}
      />

      <EthereaNav />
      <EthereaHero />

      {/* Transition Div to prevent white flash */}
      <div
        className="w-full h-[120px]"
        style={{ background: "linear-gradient(to bottom, #000, #000)" }}
      />

      <PerfumeBottle />
      <ScentNarrative />
      <ImmersiveShowcase />
      <EthereaCTA />
      <EthereaFooter />
    </motion.main>
  );
}
