"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    index: "01",
    title: "Étheréa",
    subtitle: "LUXURY PERFUME EXPERIENCE",
    tags: ["3D", "WebGL", "GSAP"],
    accentColor: "#c9a84c",
  },
  {
    index: "02",
    title: "Noctis Café",
    subtitle: "PREMIUM CAFÉ EXPERIENCE",
    tags: ["Parallax", "2D", "Framer Motion"],
    accentColor: "#8B4513",
  },
  {
    index: "03",
    title: "Veltrix AI",
    subtitle: "FUTURISTIC AI PLATFORM",
    tags: ["WebGL", "Three.js", "UI Design"],
    accentColor: "#3b82f6",
  },
  {
    index: "04",
    title: "Obsidian Threads",
    subtitle: "LUXURY FASHION EXPERIENCE",
    tags: ["Editorial", "Motion", "3D"],
    accentColor: "#c0c0c0",
  },
  {
    index: "05",
    title: "Aurelion Capital",
    subtitle: "PREMIUM FINANCE PLATFORM",
    tags: ["Dashboard", "Glassmorphism", "Charts"],
    accentColor: "#10b981",
  },
];

export default function ShowcaseSection() {
  return (
    <section className="relative w-full bg-black py-[120px]">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center px-6">
        <span className="font-inter text-[10px] tracking-[0.4em] text-silver/50 uppercase">
          SELECTED WORK
        </span>
        <h2 className="font-cormorant text-[80px] leading-none text-white italic mt-4">
          Projects
        </h2>
      </div>

      {/* Thin line divider */}
      <div className="w-full h-[1px] bg-silver/10 mt-16 mb-16" />

      {/* Grid of Projects */}
      <div className="px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[2px]">
          {projects.map((project, i) => {
            // Cards 1 and 2 span full width (featured)
            // Cards 3, 4, and 5 span 2 columns out of 6 (3 cards per row)
            const isFeatured = i < 2;
            const spanClass = isFeatured ? "md:col-span-6" : "md:col-span-2";

            return (
              <ProjectCard
                key={project.index}
                index={project.index}
                title={project.title}
                subtitle={project.subtitle}
                tags={project.tags}
                accentColor={project.accentColor}
                className={spanClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
