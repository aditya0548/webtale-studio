"use client";

import { useEffect, useState } from "react";

export default function NoctisScrollLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      const newProgress = Math.max(0, Math.min(1, currentScroll / maxScroll));
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:block fixed left-[48px] top-0 w-[1px] h-[100vh] z-50 pointer-events-none">
      {/* LAYER 1 — Track (background line) */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: "rgba(200,129,58,0.1)" }}
      />

      {/* LAYER 2 — Fill (glowing progress) */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: `${progress * 100}%`,
          background: "linear-gradient(to bottom, transparent, rgba(200,129,58,0.8), #c8813a, rgba(200,129,58,0.8), transparent)",
          boxShadow: "0 0 8px rgba(200,129,58,0.8), 0 0 16px rgba(200,129,58,0.4)",
          transition: "height 0.1s ease-out"
        }}
      >
        {/* Glowing dot at the bottom of the fill */}
        <div
          className="absolute bottom-[-4px] left-[-3px] w-[7px] h-[7px] rounded-full"
          style={{
            background: "#c8813a",
            boxShadow: "0 0 12px rgba(200,129,58,1), 0 0 24px rgba(200,129,58,0.6)"
          }}
        />
      </div>
    </div>
  );
}
