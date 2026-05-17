"use client";

import { motion } from "framer-motion";
import NoctisScrollLine from "@/components/projects/noctis/NoctisScrollLine";
import NoctisNav from "@/components/projects/noctis/NoctisNav";
import NoctisHero from "@/components/projects/noctis/NoctisHero";
import NoctisAtmosphere from "@/components/projects/noctis/NoctisAtmosphere";
import NoctisMenu from "@/components/projects/noctis/NoctisMenu";
import NoctisClosing from "@/components/projects/noctis/NoctisClosing";
import NoctisFooter from "@/components/projects/noctis/NoctisFooter";

export default function NoctisCafePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full min-h-screen text-[#f5ede0] selection:bg-[#c8813a] selection:text-[#0a0602]"
    >
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 w-full h-full bg-[#0a0602] z-[-2] pointer-events-none" />

      {/* Assembly */}
      <NoctisScrollLine />
      <NoctisNav />
      <NoctisHero />
      <NoctisAtmosphere />
      <NoctisMenu />
      <NoctisClosing />
      <NoctisFooter />
    </motion.div>
  );
}
