"use client";

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function AurelionCapitalPage() {
  const project = projects.find((p) => p.slug === "aurelion-capital");

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-black w-full min-h-screen">
      <ProjectHero project={project} />

      <div id="project-content" className="w-full" style={{ backgroundColor: "#050505" }}>
        {/* SECTION 1 — Dashboard Header */}
        <section className="px-6 py-[80px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Top row */}
            <div className="flex justify-between items-center mb-24">
              <span className="font-inter text-[11px] tracking-[0.4em] text-silver/40">AURELION CAPITAL</span>
              <span className="font-inter text-[11px] text-silver/30">Est. 2019</span>
            </div>

            {/* Large portfolio number */}
            <div className="flex flex-col items-center mb-24">
              <h2 className="font-cormorant text-[120px] leading-none text-white">$2.4B</h2>
              <p className="font-inter text-[12px] text-silver/40 mt-4">Assets Under Management</p>
            </div>

            {/* 3 stat pills in a row */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="border border-white/8 px-[32px] py-[16px] flex flex-col items-center">
                <span className="font-inter text-[10px] text-silver/40 mb-2">YTD Return</span>
                <span className="font-inter text-[20px] text-white">+18.4%</span>
              </div>
              <div className="border border-white/8 px-[32px] py-[16px] flex flex-col items-center">
                <span className="font-inter text-[10px] text-silver/40 mb-2">Risk Grade</span>
                <span className="font-inter text-[20px] text-white">A+</span>
              </div>
              <div className="border border-white/8 px-[32px] py-[16px] flex flex-col items-center">
                <span className="font-inter text-[10px] text-silver/40 mb-2">Active Clients</span>
                <span className="font-inter text-[20px] text-white">847</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Glassmorphism Chart Panel */}
        <section className="px-6 py-12">
          <div className="max-w-[800px] mx-auto bg-white/2 border border-white/5 backdrop-blur-[20px] p-[40px]">
            {/* Header row */}
            <div className="flex justify-between items-center mb-12">
              <span className="font-inter text-[10px] text-silver/40">PORTFOLIO PERFORMANCE</span>
              <span className="font-inter text-[10px] text-silver/40">2024–2025</span>
            </div>

            {/* SVG line chart */}
            <div className="w-full relative mb-16">
              <svg viewBox="0 0 800 200" className="w-full h-auto overflow-visible">
                {/* Thin dashed line */}
                <line
                  x1="0"
                  y1="100"
                  x2="800"
                  y2="100"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x="0"
                  y="92"
                  fill="rgba(255,255,255,0.08)"
                  fontSize="10"
                  fontFamily="var(--font-inter)"
                >
                  Benchmark
                </text>

                {/* Primary Emerald Path */}
                <motion.path
                  d="M0,160 L100,145 L200,130 L300,155 L400,110 L500,90 L600,75 L700,60 L800,45"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
            </div>

            {/* 3 allocation bars */}
            <div className="flex flex-col gap-8">
              <AllocationBar label="Equities" value="54%" color="#10b981" />
              <AllocationBar label="Fixed Income" value="28%" color="#c0c0c0" />
              <AllocationBar label="Alternatives" value="18%" color="#ffffff" />
            </div>
          </div>
        </section>

        {/* SECTION 3 — Closing Statement */}
        <section className="px-6 py-[120px] flex flex-col items-center text-center">
          <h2 className="font-cormorant text-[60px] italic text-white leading-tight">Private wealth. Quietly exceptional.</h2>
          <p className="font-inter text-[12px] text-silver/40 mt-4 mb-12">Aurelion Capital — By invitation only.</p>
          <button
            className="font-inter text-[12px] text-white border border-white/20 px-[36px] py-[14px] hover:bg-white/4 transition-colors duration-300"
            data-cursor="hover"
          >
            Request Access
          </button>
        </section>

        {/* Back Link */}
        <div className="flex justify-center pb-24">
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

function AllocationBar({ label, value, color }: { label: string, value: string, color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="w-full flex flex-col gap-3">
      <div className="flex justify-between items-center font-inter text-[10px]">
        <span className="text-silver/70">{label}</span>
        <span className="text-white">{value}</span>
      </div>
      <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full"
          style={{ backgroundColor: color }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: value } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
