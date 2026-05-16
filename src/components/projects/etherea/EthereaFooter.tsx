"use client";

import Link from "next/link";

export default function EthereaFooter() {
  return (
    <footer className="w-full px-[48px] py-[48px] bg-[#000] border-t border-[rgba(255,255,255,0.04)] flex flex-col md:flex-row justify-between items-center gap-[24px]">
      <div className="font-inter text-[10px] tracking-[0.4em] text-silver/20 uppercase text-center md:text-left">
        ÉTHERÉA · A WEBTALE STUDIO PROJECT · 2025
      </div>
      <Link
        href="/"
        className="font-inter text-[11px] text-silver/30 no-underline hover:text-silver/70 transition-colors duration-200"
        data-cursor="hover"
      >
        ← Back to Studio
      </Link>
    </footer>
  );
}
