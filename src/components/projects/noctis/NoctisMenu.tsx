"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = [
  {
    category: "Coffee",
    items: [
      {
        name: "Midnight Espresso",
        description: "Our darkest blend, served at exactly 11PM",
        price: "¥680",
      },
      {
        name: "Amber Latte",
        description: "Warm oat milk, slow pour, single origin",
        price: "¥820",
      },
      {
        name: "Dark Blend No.4",
        description: "Our signature. Four beans, one obsession.",
        price: "¥750",
      },
    ],
  },
  {
    category: "After Hours",
    items: [
      {
        name: "Tokyo Fog",
        description: "Earl grey, steamed milk, a hint of vanilla",
        price: "¥720",
      },
      {
        name: "Midnight Matcha",
        description: "Ceremonial grade, oat milk, two sugars",
        price: "¥780",
      },
      {
        name: "The Usual",
        description: "You know what it is.",
        price: "¥650",
      },
    ],
  },
  {
    category: "Something Sweet",
    items: [
      {
        name: "Dark Chocolate Tart",
        description: "Bitter, rich, necessary",
        price: "¥480",
      },
      {
        name: "Yuzu Cheesecake",
        description: "Light, cold, perfectly imperfect",
        price: "¥520",
      },
      {
        name: "Toast & Butter",
        description: "Simple. Always right.",
        price: "¥320",
      },
    ],
  },
];

export default function NoctisMenu() {
  const [openCategory, setOpenCategory] = useState<string | null>("Coffee");

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <section className="min-h-[100vh] bg-[#0f0a05] px-[24px] py-[80px] md:px-[80px] md:py-[120px]"
      style={{ borderTop: "1px solid rgba(200, 129, 58, 0.08)" }}
    >
      {/* Header */}
      <div className="text-center mb-[80px]">
        <div
          className="uppercase font-sans text-[10px]"
          style={{ letterSpacing: "0.6em", color: "rgba(200, 129, 58, 0.5)" }}
        >
          OUR MENU
        </div>
        <h2
          className="mt-[16px] italic leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(48px, 6vw, 72px)",
            color: "#f5ede0",
          }}
        >
          Crafted with <span style={{ color: "#c8813a" }}>intention.</span>
        </h2>
      </div>

      {/* Menu Categories */}
      <div className="flex flex-col gap-0 max-w-[800px] mx-auto">
        {menuData.map((section) => (
          <div key={section.category}>
            {/* Category Header */}
            <div
              className="flex justify-between items-center py-[32px] cursor-pointer"
              style={{ borderBottom: "1px solid rgba(200, 129, 58, 0.08)" }}
              onClick={() => toggleCategory(section.category)}
            >
              <h3
                className="italic text-[28px]"
                style={{ fontFamily: "var(--font-cormorant)", color: "#f5ede0" }}
              >
                {section.category}
              </h3>
              <div
                className="font-sans text-[20px]"
                style={{ color: "rgba(200, 129, 58, 0.6)" }}
              >
                {openCategory === section.category ? "−" : "+"}
              </div>
            </div>

            {/* Category Items */}
            <AnimatePresence initial={false}>
              {openCategory === section.category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col pt-[16px] pb-[32px]">
                    {section.items.map((item, itemIdx) => (
                      <motion.div
                        key={item.name}
                        className="flex justify-between items-start py-[20px]"
                        style={{
                          borderBottom: "1px solid rgba(200, 129, 58, 0.04)",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.5, delay: itemIdx * 0.08 }}
                      >
                        {/* LEFT: Name + Desc */}
                        <div className="flex flex-col pr-[16px]">
                          <div
                            className="text-[22px]"
                            style={{
                              fontFamily: "var(--font-cormorant)",
                              color: "#f5ede0",
                            }}
                          >
                            {item.name}
                          </div>
                          <div
                            className="mt-[4px] font-sans text-[12px]"
                            style={{ color: "rgba(245, 237, 224, 0.4)" }}
                          >
                            {item.description}
                          </div>
                        </div>

                        {/* RIGHT: Price */}
                        <div
                          className="text-[18px] whitespace-nowrap"
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            color: "#c8813a",
                          }}
                        >
                          {item.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
