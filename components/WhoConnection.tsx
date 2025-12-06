"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoCoaching() {
  return (
    <section className="w-full bg-white py-22 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT TEXT SECTION */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">
            Who This Coaching Is For
          </h2>

          <p className="text-black text-[17px] font-bold leading-relaxed">
            This service is perfect if you are experiencing:
          </p>

          <ul className="space-y-5 text-black text-[15px] leading-relaxed pl-1">
            <li>• Constant misunderstandings or arguments</li>
            <li>• Feeling emotionally disconnected from your partner</li>
            <li>• Trust issues, insecurity, or fear of abandonment</li>
            <li>• Difficulty expressing feelings</li>
            <li>• Repeating unhealthy patterns</li>
            <li>• Feeling alone even while being in a relationship</li>
            <li>• Overthinking or emotional stress</li>
          </ul>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <Image
            src="/services/whoconnection.png" 
            alt="Coaching Support"
            width={611}
            height={300}
            className="rounded-2xl object-cover shadow-[0_8px_32px_rgba(0,0,0,0.15)] h-[240px] sm:h-[520px] lg:h-[440px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
