"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EthereaNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDiscover = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("bottle");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-[48px] py-[24px] flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-[rgba(10,6,8,0.85)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* LEFT */}
      <div className="font-cormorant text-[18px] italic tracking-[0.3em] text-[#f2ece6]">
        ÉTHERÉA
      </div>

      {/* RIGHT */}
      <div className="flex gap-[32px] items-center">
        <a
          href="#"
          onClick={handleDiscover}
          className="font-inter text-[11px] tracking-[0.3em] text-[rgba(242,236,230,0.5)] hover:text-[#f2ece6] transition-colors duration-200 cursor-pointer"
        >
          Discover
        </a>
        <Link
          href="/"
          className="font-inter text-[11px] tracking-[0.3em] text-[rgba(242,236,230,0.35)] hover:text-[#f2ece6] transition-colors duration-200"
        >
          ← Studio
        </Link>
      </div>
    </nav>
  );
}
