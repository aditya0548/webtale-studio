"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  // Mouse position state
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Instantly update dot position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="hover"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="hover"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    let reqId: number;

    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    const render = () => {
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.12);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      reqId = requestAnimationFrame(render);
    };

    reqId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(reqId);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Dot Container - moves directly with mouse */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0"
        style={{ willChange: "transform" }}
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity duration-300" />
      </div>

      {/* Ring Container - lags behind mouse via lerp */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0"
        style={{ willChange: "transform" }}
      >
        <div
          className={`h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 transition-transform duration-300 ${
            isHovering ? "scale-[2]" : "scale-100"
          }`}
        />
      </div>
    </div>
  );
}
