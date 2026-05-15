"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex w-full flex-col items-center gap-[24px]"
      >
        {/* Label */}
        <div className="font-inter text-[10px] uppercase tracking-[0.5em] text-silver/40">
          LET&apos;S CREATE
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ letterSpacing: "0.3em" }}
          animate={{ letterSpacing: "0em" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cormorant text-[88px] italic text-white leading-none text-center"
        >
          Start a project.
        </motion.h1>

        {/* Subtext */}
        <p className="font-inter text-[15px] text-silver/60 max-w-[420px] text-center">
          I&apos;m currently open to new projects and collaborations.
        </p>

        {/* Email Link */}
        <Link
          href="mailto:hello@webtale.studio"
          className="mt-[40px] font-cormorant text-[32px] text-white transition-all hover:underline decoration-silver hover:decoration-solid underline-offset-[6px]"
          data-cursor="hover"
        >
          hello@webtale.studio
        </Link>

        {/* Contact Form Area */}
        <div className="mt-8 w-full max-w-[500px] flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-full flex-col gap-6"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/15 py-[12px] font-inter text-[14px] text-white placeholder-silver/30 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/15 py-[12px] font-inter text-[14px] text-white placeholder-silver/30 focus:outline-none focus:border-white transition-colors"
                />
                <textarea
                  placeholder="Project brief"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/15 py-[12px] font-inter text-[14px] text-white placeholder-silver/30 focus:outline-none focus:border-white transition-colors resize-none"
                />
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleSubmit}
                    className="border border-white/20 bg-transparent px-[40px] py-[16px] font-inter text-[12px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/5"
                    data-cursor="hover"
                  >
                    Send Message &rarr;
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-cormorant text-[24px] italic text-white text-center py-12"
              >
                Message received. I&apos;ll be in touch.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
