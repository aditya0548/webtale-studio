"use client";

import { motion } from "framer-motion";
import ScrollLine from "@/components/projects/etherea/ScrollLine";
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
      className="flex flex-col bg-[#0a0608] w-full min-h-screen text-[#f2ece6] font-inter relative"
    >
      {/* Global Background Base Layer */}
      <div
        className="fixed inset-0 z-[-2] pointer-events-none bg-[#0a0608]"
      />

      {/* Global Background Gradient */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(125,40,64,0.08) 0%, rgba(192,57,43,0.03) 30%, transparent 60%)",
        }}
      />

      <ScrollLine />
      <EthereaNav />
      <EthereaHero />

      {/* Transition Div to prevent white flash */}
      <div
        className="w-full h-[120px]"
        style={{ background: "linear-gradient(to bottom, #0a0608, #0a0608)" }}
      />

      <PerfumeBottle />
      <ScentNarrative />
      <ImmersiveShowcase />
      <EthereaCTA />
      <EthereaFooter />
    </motion.main>
  );
}
