"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  accentColor: string;
  className?: string;
}

export default function ProjectCard({
  index,
  title,
  subtitle,
  tags,
  accentColor,
  className = "",
}: ProjectCardProps) {
  // Convert hex accent color to rgba for 5% opacity
  // Note: Assuming well-formed hex, but inline style works with color-mix in modern browsers or we can just use the hex with opacity.
  // We'll use style={{ backgroundColor: accentColor, opacity: 0.05 }} for the placeholder layer.

  return (
    <motion.div
      className={`relative w-full aspect-[4/3] overflow-hidden bg-surface group ${className}`}
      data-cursor="hover"
      whileHover="hover"
      initial="initial"
    >
      {/* Background Layer: Scales on hover */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.03 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        {/* Placeholder for images */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: accentColor, opacity: 0.05 }}
        />
      </motion.div>

      {/* Gradient Overlay: Intensifies on hover */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/0 to-black/60"
        variants={{
          initial: { opacity: 0.4 },
          hover: { opacity: 0.75 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      />

      {/* Content Layer (does not scale) */}
      <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between pointer-events-none">
        {/* Top Header */}
        <div className="flex justify-between items-start">
          {/* Top Left: Index */}
          <span className="font-cormorant text-[13px] text-silver/30">
            {index}
          </span>

          {/* Top Right: Arrow Icon */}
          <motion.div
            className="text-white text-[18px]"
            variants={{
              initial: { x: 8, opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            →
          </motion.div>
        </div>

        {/* Bottom Left: Title, Subtitle, Tags */}
        <div className="flex flex-col">
          <h3 className="font-cormorant text-[28px] text-white leading-none">
            {title}
          </h3>
          <p className="font-inter text-[11px] text-silver/50 tracking-[0.2em] uppercase mt-1">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-inter text-[10px] text-silver/40 uppercase">
                  {tag}
                </span>
                {i < tags.length - 1 && (
                  <span className="text-silver/40 text-[10px]">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
