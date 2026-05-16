"use client";

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import PerfumeBottle from "@/components/projects/etherea/PerfumeBottle";
import { motion } from "framer-motion";
import Link from "next/link";

interface StoryBlockProps {
  label: string;
  heading: string;
  paragraph: string;
}

function StoryBlock({ label, heading, paragraph }: StoryBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center py-[80px] px-6 max-w-[640px] mx-auto"
    >
      <div className="font-inter text-[11px] text-silver/30 tracking-[0.4em] mb-6">
        {label}
      </div>
      <h2 className="font-cormorant text-[44px] md:text-[64px] text-white italic leading-[1.1] mb-6">
        {heading}
      </h2>
      <p className="font-inter text-[15px] text-[rgba(192,192,192,0.7)] leading-[1.9] mt-6 max-w-[480px]">
        {paragraph}
      </p>
    </motion.div>
  );
}

function Divider() {
  return (
    <div
      className="w-[1px] h-[80px] mx-auto"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)"
      }}
    />
  );
}

export default function EthereaPage() {
  const project = projects.find((p) => p.slug === "etherea");

  if (!project) {
    notFound();
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col bg-black w-full min-h-screen"
    >
      <ProjectHero project={project} />

      <div id="project-content" className="w-full bg-black">
        {/* SECTION 1 — Full viewport 3D Bottle Viewer */}
        <PerfumeBottle />

        {/* SECTION 2 — Three Scroll Storytelling Blocks */}
        <div className="w-full">
          <StoryBlock
            label="I"
            heading="The Scent of Gold"
            paragraph="A fragrance born from stillness. Étheréa captures the warmth of amber, the cool precision of silver, and the mystery of what lies between."
          />
          <Divider />
          <StoryBlock
            label="II"
            heading="Crafted in Light"
            paragraph="Each bottle is a sculpture. Each drop, a decision. Designed for those who understand that luxury is not displayed — it is felt in the quiet moments."
          />
          <Divider />
          <StoryBlock
            label="III"
            heading="Yours to Discover"
            paragraph="A limited interactive experience. Rotate the bottle. Feel the weight of light. This is not a product — it is a world."
          />
        </div>

        {/* SECTION 3 — Full width gold divider banner */}
        <div className="w-full" style={{
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.06), transparent)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)"
        }}>
          <div className="py-[48px] text-center font-inter text-[10px] tracking-[0.6em] text-[rgba(201,168,76,0.4)]">
            A WEBTALE STUDIO EXPERIENCE · 2025
          </div>
        </div>

        {/* SECTION 4 — Back navigation */}
        <div className="py-[80px] flex justify-center text-center">
          <Link
            href="/projects"
            className="font-inter text-[12px] text-silver/40 hover:text-silver transition-colors duration-200"
            data-cursor="hover"
          >
            ← All Projects
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
