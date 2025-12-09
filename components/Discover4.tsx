"use client";

import { motion } from "framer-motion";

export default function Discover4() {
  const items = [
    {
      title: "Emotional Processing Tools",
      desc: "Learn how to release stored pain, stop emotional spiraling, and regain clarity.",
    },
    {
      title: "Self-Worth Rebuilding",
      desc: "Reconnect with your identity, strengths, and confidence outside the relationship.",
    },
    {
      title: "Closure From Within",
      desc: "Heal emotional wounds and find inner peace without needing the other person.",
    },
    {
      title: "Break Attachment Cycles",
      desc: "Understand trauma bonds, attachment patterns, and how to step out of them.",
    },
    {
      title: "Healthy Boundaries & Detachment",
      desc: "Learn how to stop checking, waiting, or longing — and regain emotional control.",
    },
    {
      title: "Preparing For a Healthy Future",
      desc: "Build emotional resilience so you attract a more aligned partner next time.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full px-6 text-center space-y-12"
      >
        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          What You Will Discover
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ scale: 1.3 }}
              className="
                bg-white rounded-2xl border border-[#CDE0D0]
                text-left px-6 py-6 shadow-sm
                hover:shadow-[0_8px_32px_rgba(94,147,108,0.18)]
                hover:border-[#5E936C]
                transition-all duration-300 cursor-pointer
              "
            >
              {/* GREEN DOT ICON */}
              <div className="
                w-3 h-3 rounded-full bg-[#5E936C] 
                shadow-[0_0_6px_rgba(94,147,108,0.6)]
              " />

              <h3 className="text-lg font-semibold text-black mt-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-[14px] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
