"use client";

import { motion, type Variants } from "framer-motion";

export default function CoachingHelp() {
  const items = [
    "Couples",
    "Singles",
    "Individuals healing from past relationships",
    "Married couples with communication issues",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } satisfies Variants;

  return (
    <section className="w-full bg-[#6F9972] py-16 flex justify-center px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl flex flex-col items-center gap-12"
      >
        {/* HEADING */}
        <motion.h2
          variants={cardVariants}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
        >
          Who This Coaching Helps
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {items.map((text, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(255,255,255,0.25)",
                transition: { duration: 0.25 },
              }}
              className="
                bg-white text-center text-black rounded-2xl py-5 px-4 
                shadow-sm cursor-pointer border border-gray-200
                hover:bg-green-200 transition-all
                text-[18px] sm:text-[17px] font-lg
              "
            >
              {text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
