"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [shouldDisableTransition, setShouldDisableTransition] = useState(false);

  useEffect(() => {
    const checkTransitionPreference = () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const isSmallScreen = window.innerWidth < 1024;

      setShouldDisableTransition(prefersReducedMotion || isSmallScreen);
    };

    checkTransitionPreference();

    window.addEventListener("resize", checkTransitionPreference);

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", checkTransitionPreference);
    } else {
      mediaQuery.addListener(checkTransitionPreference);
    }

    return () => {
      window.removeEventListener("resize", checkTransitionPreference);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", checkTransitionPreference);
      } else {
        mediaQuery.removeListener(checkTransitionPreference);
      }
    };
  }, []);

  if (shouldDisableTransition) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
