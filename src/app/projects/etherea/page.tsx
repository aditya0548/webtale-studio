"use client";

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import PerfumeBottle from "@/components/projects/etherea/PerfumeBottle";
import { motion } from "framer-motion";
import Link from "next/link";

function ScrollBlock({ heading, paragraph, headingClass, paragraphClass }: { heading: string, paragraph: string, headingClass: string, paragraphClass: string }) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-20%" }}
      className="flex flex-col justify-center items-center min-h-[50vh] max-w-[600px] mx-auto text-center px-6"
    >
      <h2 className={headingClass}>{heading}</h2>
      <p className={paragraphClass}>{paragraph}</p>
    </motion.div>
  );
}

export default function EthereaPage() {
  const project = projects.find((p) => p.slug === "etherea");

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-black w-full min-h-screen pb-24">
      <ProjectHero project={project} />
      <div id="project-content" className="w-full bg-black">
        {/* Section 1: 3D Bottle Viewer */}
        <PerfumeBottle />

        {/* Section 2: Scroll Storytelling */}
        <div className="py-24">
          <ScrollBlock
            heading="The Scent of Gold"
            paragraph="A fragrance that captures the warmth of amber and the cool touch of silver. Étheréa is not worn — it is experienced."
            headingClass="font-cormorant text-[56px] italic mb-6 text-white"
            paragraphClass="font-inter text-[15px] text-silver/70"
          />
          <ScrollBlock
            heading="Crafted in Light"
            paragraph="Each bottle is a sculpture. Each drop, a story. Designed for those who understand that luxury is not seen — it is felt."
            headingClass="font-cormorant text-[56px] italic mb-6 text-white"
            paragraphClass="font-inter text-[15px] text-silver/70"
          />
          <ScrollBlock
            heading="Yours to Discover"
            paragraph="A limited interactive experience. Rotate. Explore. Own the moment."
            headingClass="font-cormorant text-[56px] italic mb-6 text-white"
            paragraphClass="font-inter text-[15px] text-silver/70"
          />
        </div>

        {/* Section 3: Back Link */}
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="font-inter text-[12px] text-silver/50 hover:text-white transition-colors duration-200"
            data-cursor="hover"
          >
            ← All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
