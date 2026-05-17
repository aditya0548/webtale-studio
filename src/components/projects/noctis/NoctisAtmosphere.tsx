"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NoctisAtmosphere() {
  return (
    <section className="relative min-h-[100vh] bg-[#0a0602] overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none select-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex flex-col md:flex-row min-h-[100vh] w-full">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col justify-center px-[24px] py-[80px] md:px-[80px] md:py-[120px] z-10">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Label */}
            <div
              className="uppercase font-sans text-[10px]"
              style={{
                letterSpacing: "0.5em",
                color: "rgba(200, 129, 58, 0.5)",
              }}
            >
              THE SPACE
            </div>

            {/* Heading */}
            <h2
              className="mt-[16px] italic leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(48px, 6vw, 64px)",
                color: "#f5ede0",
              }}
            >
              <span className="block">A corner of</span>
              <span className="block">the world</span>
              <span className="block" style={{ color: "#c8813a" }}>
                that knows you.
              </span>
            </h2>

            {/* Body */}
            <p
              className="mt-[32px] font-sans text-[15px] max-w-[400px]"
              style={{
                color: "rgba(245, 237, 224, 0.6)",
                lineHeight: 2,
              }}
            >
              Noctis Café exists in the space between late and early. Where
              strangers become familiar and silence becomes comfortable.
            </p>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-[16px] mt-[48px]">
              <div
                className="px-[24px] py-[12px] uppercase font-sans text-[11px]"
                style={{
                  border: "1px solid rgba(200, 129, 58, 0.2)",
                  color: "rgba(245, 237, 224, 0.4)",
                  letterSpacing: "0.3em",
                }}
              >
                Est. 2019
              </div>
              <div
                className="px-[24px] py-[12px] uppercase font-sans text-[11px]"
                style={{
                  border: "1px solid rgba(200, 129, 58, 0.2)",
                  color: "rgba(245, 237, 224, 0.4)",
                  letterSpacing: "0.3em",
                }}
              >
                Open 10PM–5AM
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-[100vh]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Atmospheric Image */}
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
              alt="Atmospheric cafe corner"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 w-full h-full hidden md:block"
              style={{
                background: "linear-gradient(to right, #0a0602, transparent 40%)",
              }}
            />
             <div
              className="absolute inset-0 w-full h-full block md:hidden"
              style={{
                background: "linear-gradient(to bottom, #0a0602, transparent 40%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
