"use client";

import { motion } from "framer-motion";

export default function FinalWords() {
  return (
    <section className="w-full bg-[#EEF5EF] py-14 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full px-6 text-center space-y-5"
      >
        
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 flex justify-center items-center gap-2">
          <span className="text-[28px]">🌿</span>
          Final Words
        </h2>

       
        <h3 className="text-black text-[15px] sm:text-[16px] leading-relaxed">
          Whether you're healing from emotional hurt, trying to understand your partner better, 
          or working on your personal growth —
        </h3>

        
        <p className="text-[#5E936C] text-[16px] sm:text-[18px] font-medium leading-relaxed">
          Coach Neelu Taneja is here to guide you with compassion, clarity, and practical wisdom.
        </p>
      </motion.div>
    </section>
  );
}
