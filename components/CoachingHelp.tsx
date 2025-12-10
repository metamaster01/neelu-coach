"use client";

import { motion, type Variants } from "framer-motion";

export default function CoachingHelp() {
  const items = [
    "Couples",
    "Singles",
    "Individuals healing from past relationships",
    "Married couples with communication issues",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  } satisfies Variants;

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  } satisfies Variants;

  return (
    <section className="w-full bg-[#6F9972] py-16 flex justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
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
                y: -5,
                scale: 1.03,
                boxShadow: "0 10px 26px rgba(0,0,0,0.12)",
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
              whileTap={{ scale: 0.98 }}
              className="
                bg-white text-black rounded-2xl py-5 px-4
                shadow-sm cursor-pointer border border-gray-200
                hover:bg-green-200 transition-all
                text-[18px] sm:text-[17px] font-medium
                flex items-center justify-center text-center
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
