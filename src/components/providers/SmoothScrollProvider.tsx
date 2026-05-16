"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => {
  return useContext(SmoothScrollContext);
};

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reqIdRef = useRef<number>();

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      (navigator.maxTouchPoints > 0 ||
        window.matchMedia("(any-pointer: coarse)").matches);

    if (isTouchDevice) {
      return;
    }

    const lenisInstance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    const raf = (time: number) => {
      lenisInstance.raf(time);
      reqIdRef.current = requestAnimationFrame(raf);
    };

    reqIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
