"use client";

import Link from "next/link";

export default function EthereaFooter() {
  return (
    <footer className="w-full px-[48px] py-[48px] bg-[#060405] border-t border-[rgba(125,40,64,0.08)] flex flex-col md:flex-row justify-between items-center gap-[24px]">
      <div className="font-inter text-[10px] tracking-[0.4em] text-[rgba(242,236,230,0.2)] uppercase text-center md:text-left">
        ÉTHERÉA · A WEBTALE STUDIO PROJECT · 2025
      </div>
      <Link
        href="/"
        className="font-inter text-[11px] text-[rgba(242,236,230,0.3)] no-underline hover:text-[#f2ece6] transition-colors duration-200"
        data-cursor="hover"
      >
        ← Back to Studio
      </Link>
    </footer>
  );
}
