"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/hero/HeroSection";
import IntroOverlay from "@/components/hero/IntroOverlay";
import { useIntro } from "@/components/providers/IntroProvider";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const { setIntroComplete } = useIntro();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <AnimatePresence onExitComplete={() => setIntroComplete(true)}>
        {showOverlay && <IntroOverlay />}
      </AnimatePresence>
      <HeroSection />
    </main>
  );
}
