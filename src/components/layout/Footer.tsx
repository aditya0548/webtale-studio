"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();
  const marqueeText = "WEBTALE STUDIO · CINEMATIC EXPERIENCES · ADITYA · ".repeat(5);

  if (pathname?.startsWith("/projects/etherea")) {
    return null;
  }

  return (
    <footer className="w-full bg-black border-t border-[rgba(255,255,255,0.06)] flex flex-col">
      {/* Marquee Section */}
      <div className="w-full overflow-hidden whitespace-nowrap border-b border-[rgba(255,255,255,0.06)] py-4 flex items-center">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-[12px] md:text-[14px] text-white/50 tracking-[0.2em] uppercase font-inter"
        >
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </motion.div>
      </div>

      {/* Main Footer Section */}
      <div className="px-6 py-10 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Column 1 */}
        <div className="flex flex-col">
          <span className="font-inter text-[11px] tracking-[0.4em] text-silver/40">
            WEBTALE STUDIO
          </span>
          <span className="font-cormorant text-[24px] text-white mt-2">
            Cinematic Digital Experiences
          </span>
          <span className="font-inter text-[11px] text-silver/30 mt-8">
            © 2025 Aditya. All rights reserved.
          </span>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col md:items-center">
          <div className="flex flex-col">
            <span className="font-inter text-[10px] text-silver/30 tracking-[0.3em] mb-4">
              NAVIGATION
            </span>
            <div className="flex flex-col space-y-3">
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="font-inter text-[13px] text-silver/60 hover:text-white transition-colors duration-200 w-fit"
                  data-cursor="hover"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col md:items-end">
          <div className="flex flex-col">
            <span className="font-inter text-[10px] text-silver/30 tracking-[0.3em] mb-4">
              CONNECT
            </span>
            <div className="flex flex-col space-y-3 md:items-end">
              {['GitHub', 'LinkedIn', 'Twitter/X', 'Email'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-inter text-[13px] text-silver/60 hover:text-white transition-colors duration-200 w-fit"
                  data-cursor="hover"
                >
                  {item}
                </Link>
              ))}
            </div>
            <span className="font-inter text-[11px] text-silver/20 mt-8 italic md:text-right">
              Made with intention.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
