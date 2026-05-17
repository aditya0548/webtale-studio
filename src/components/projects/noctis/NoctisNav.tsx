"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NoctisNav() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(10, 6, 2, 0)", "rgba(10, 6, 2, 0.85)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 60],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 w-full z-[100] px-[48px] py-[24px] flex justify-between items-center transition-colors duration-300"
    >
      {/* LEFT */}
      <div
        className="text-[#f5ede0] italic text-[20px]"
        style={{
          fontFamily: "var(--font-cormorant)",
          letterSpacing: "0.2em",
        }}
      >
        NOCTIS
      </div>

      {/* CENTER */}
      <div
        className="text-[11px] uppercase tracking-[0.3em] font-sans"
        style={{ color: "rgba(200, 129, 58, 0.6)" }}
      >
        夜のカフェ
      </div>

      {/* RIGHT */}
      <Link
        href="/"
        className="text-[11px] uppercase tracking-[0.1em] font-sans transition-colors duration-200"
        style={{ color: "rgba(245, 237, 224, 0.3)" }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = "rgba(245, 237, 224, 0.8)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = "rgba(245, 237, 224, 0.3)";
        }}
      >
        ← Studio
      </Link>
    </motion.nav>
  );
}
