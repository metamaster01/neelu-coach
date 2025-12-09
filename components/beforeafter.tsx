"use client";

import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export default function BeforeAfter() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  // Smooth parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const fade = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const beforePoints = [
    "Constantly giving without receiving",
    "Silencing your needs to keep the peace",
    "Questioning your worth in love",
    "Feeling emotionally alone, even when partnered",
  ];

  const afterPoints = [
    "Loving without losing yourself",
    "Trusting your needs, voice, and intuition",
    "Setting healthy boundaries without guilt",
    "Feeling whole, grounded, and safe in connection",
  ];

  // ✅ Explicitly type variants so ease doesn't widen to string
  const containerVariant: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full py-24 px-4 md:px-6 overflow-hidden relative"
    >
      {/* Parallax floating hearts */}
      <motion.div
        style={{ y: parallaxY, opacity: fade }}
        className="absolute left-10 top-10 text-red-400 text-5xl select-none"
        aria-hidden
      >
        ♥
      </motion.div>
      <motion.div
        style={{ y: parallaxY, opacity: fade }}
        className="absolute right-10 top-20 text-green-400 text-5xl select-none"
        aria-hidden
      >
        ♥
      </motion.div>

      {/* Wrapper */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariant} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ opacity: fade, y: parallaxY }}
          >
            You <span className="text-red-600">Before</span> &{" "}
            <span className="text-green-600">After</span> Coaching
          </motion.h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Healing isn&apos;t about becoming someone new — it&apos;s about returning to
            who you already are.
            <br />
            Here’s how your life expands when you start the inner work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Before Card */}
          <motion.div
            variants={itemVariant}
            whileHover={{
              scale: 1.03,
              rotateX: 6,
              rotateY: -6,
              boxShadow: "0px 20px 50px rgba(255,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="rounded-2xl text-base p-8 md:p-12 bg-red-50 dark:bg-red-950/30 shadow-xl border border-red-200/40 dark:border-red-800/40"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              ❤️ You Before Sessions
            </h3>

            <motion.ul
              variants={containerVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {beforePoints.map((point, i) => (
                <motion.li
                  key={i}
                  variants={itemVariant}
                  className="flex items-start gap-3 text-[#2E2E2E]"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="text-red-600 text-lg mt-1"
                    aria-hidden
                  >
                    ♥
                  </motion.span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* After Card */}
          <motion.div
            variants={itemVariant}
            whileHover={{
              scale: 1.03,
              rotateX: 6,
              rotateY: 6,
              boxShadow: "0px 20px 50px rgba(0,200,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className=" text-[black] rounded-2xl p-8 md:p-12 bg-green-50 dark:bg-green-950/30 shadow-xl border border-green-200/40 dark:border-green-800/40"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              💚 You After Sessions
            </h3>

            <motion.ul
              variants={containerVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {afterPoints.map((point, i) => (
                <motion.li
                  key={i}
                  variants={itemVariant}
                  className="flex items-start gap-3 text-[#2E2E2E]"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="text-green-600 text-lg mt-1"
                    aria-hidden
                  >
                    ♥
                  </motion.span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
