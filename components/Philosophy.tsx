"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="w-full py-20 flex justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full px-6 text-center space-y-5"
      >
       
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 flex justify-center items-center gap-2">
          <span className="text-[32px]">💖</span>
          Her Core Philosophy
        </h2>

        {/* QUOTE */}
        <p className="text-[#5E936C] text-lg sm:text-xl font-medium italic">
          “Awareness is the beginning of healing.”
        </p>

        
        <p className="text-black text-[15px] sm:text-[16px] leading-relaxed mx-auto">
          For Neelu, healing is not about forgetting the past — 
        </p>
        <p className="text-black">it’s about transforming
          your relationship with it so you can live with more freedom, clarity, and
          emotional strength.</p>
      </motion.div>
    </section>
  );
}
