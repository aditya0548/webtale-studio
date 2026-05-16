"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

interface PanelProps {
  children: ReactNode;
  background: string;
  alignment: "left" | "right" | "center";
}

interface PanelImageProps {
  src: string;
  alt: string;
  position: "left" | "right" | "full";
  opacity: number;
}

function Panel({ children, background, alignment, image }: PanelProps & { image?: PanelImageProps }) {
  let justifyClass = "justify-start";
  if (alignment === "right") justifyClass = "justify-end";
  if (alignment === "center") justifyClass = "justify-center";

  let textClass = "text-left";
  if (alignment === "right") textClass = "text-right";
  if (alignment === "center") textClass = "text-center";

  return (
    <div
      className={`min-h-[100vh] flex items-center relative w-full overflow-hidden ${justifyClass}`}
      style={{ background }}
    >
      {image && (
        <div
          className={`absolute top-0 bottom-0 pointer-events-none z-0 ${
            image.position === "full"
              ? "w-full left-0 right-0"
              : image.position === "left"
              ? "w-1/2 left-0"
              : "w-1/2 right-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: image.opacity }}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className={`relative z-10 max-w-[560px] p-[80px] lg:pl-[10vw] w-full flex flex-col ${textClass} ${
          alignment === "right" ? "items-end" : alignment === "center" ? "items-center" : "items-start"
        }`}
      >
        {children}
      </motion.div>
    </div>
  );
}

function Divider() {
  return <div className="w-full border-t border-[rgba(201,168,76,0.06)] h-[1px]" />;
}

export default function ScentNarrative() {
  return (
    <section className="w-full bg-[#000] p-0 flex flex-col">
      {/* Panel 1 */}
      <Panel
        background="linear-gradient(135deg, #0a0800, #000)"
        alignment="left"
        image={{
          src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
          alt: "First light",
          position: "right",
          opacity: 0.5,
        }}
      >
        <div className="font-inter text-[10px] tracking-[0.5em] text-[rgba(201,168,76,0.5)]">
          I · THE OPENING
        </div>
        <h2 className="font-serif text-[clamp(56px,6vw,88px)] text-white italic mt-4 leading-none">
          First light.
        </h2>
        <p className="font-inter text-[16px] text-[rgba(210,210,210,0.75)] leading-[2.1] mt-[24px]">
          The fragrance opens with a burst of bergamot and saffron — sharp, golden, alive. Like the first moment of sunlight through cold glass.
        </p>
        <div className="flex gap-[12px] mt-[40px] flex-wrap">
          {["Bergamot", "Saffron", "Cardamom"].map((tag) => (
            <span
              key={tag}
              className="font-inter text-[10px] tracking-[0.3em] text-silver/40 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.04)] px-[16px] py-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Panel>

      <Divider />

      {/* Panel 2 */}
      <Panel
        background="linear-gradient(225deg, #080808, #000)"
        alignment="right"
        image={{
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80",
          alt: "Warm depth",
          position: "left",
          opacity: 0.5,
        }}
      >
        <div className="font-inter text-[10px] tracking-[0.5em] text-[rgba(201,168,76,0.5)]">
          II · THE HEART
        </div>
        <h2 className="font-serif text-[clamp(56px,6vw,88px)] text-white italic mt-4 leading-none">
          Warm depth.
        </h2>
        <p className="font-inter text-[16px] text-[rgba(210,210,210,0.75)] leading-[2.1] mt-[24px]">
          Rose absolute and oud wood emerge — complex, sensual, layered. The heart of Étheréa is a conversation between softness and shadow.
        </p>
        <div className="flex gap-[12px] mt-[40px] flex-wrap justify-end">
          {["Rose Absolute", "Oud Wood", "Jasmine"].map((tag) => (
            <span
              key={tag}
              className="font-inter text-[10px] tracking-[0.3em] text-silver/40 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.04)] px-[16px] py-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Panel>

      <Divider />

      {/* Panel 3 */}
      <Panel
        background="#000"
        alignment="center"
        image={{
          src: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&q=80",
          alt: "What remains",
          position: "full",
          opacity: 0.15,
        }}
      >
        <div className="font-inter text-[10px] tracking-[0.5em] text-[rgba(201,168,76,0.5)]">
          III · THE BASE
        </div>
        <h2 className="font-serif text-[clamp(56px,6vw,88px)] text-white italic mt-4 leading-none">
          What remains.
        </h2>
        <p className="font-inter text-[16px] text-[rgba(210,210,210,0.75)] leading-[2.1] mt-[24px]">
          Sandalwood, amber, and white musk linger for hours. The base is a memory — warm, intimate, unforgettable.
        </p>
        <div className="flex gap-[12px] mt-[40px] flex-wrap justify-center">
          {["Sandalwood", "Amber", "White Musk"].map((tag) => (
            <span
              key={tag}
              className="font-inter text-[10px] tracking-[0.3em] text-silver/40 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.04)] px-[16px] py-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Panel>
    </section>
  );
}
