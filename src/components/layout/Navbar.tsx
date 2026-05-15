"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(20px)"]
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter }}
        className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-[48px] py-[24px]"
      >
        {/* LEFT: "WS" monogram */}
        <Link href="/" className="text-[22px] text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
          WS
        </Link>

        {/* CENTER: nav links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/projects" && pathname?.startsWith("/projects"));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] tracking-[0.25em] transition-colors duration-200 ${
                  isActive ? "text-white" : "text-silver/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: "Available for projects" */}
        <div className="hidden md:flex items-center space-x-2">
          <motion.div
            className="w-[6px] h-[6px] rounded-full bg-[#10b981]"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <span className="text-[11px] text-silver/40">
            Available for projects
          </span>
        </div>

        {/* MOBILE: Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-[4px] p-2 z-[110] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-[1px] bg-white/60 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`}></span>
          <span className={`block w-6 h-[1px] bg-white/60 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-[1px] bg-white/60 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-[90] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[48px] text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
