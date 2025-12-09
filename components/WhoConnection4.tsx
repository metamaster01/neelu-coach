"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoCoaching4() {
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
           This program is ideal for those who:
          </p>

          <ul className="space-y-5 text-black text-[15px] leading-relaxed pl-1">
            <li>• Are struggling to move on after a breakup or divorce</li>
            <li>• Feel emotionally overwhelmed, anxious, or heartbroken</li>
            <li>• Are stuck in repeating thoughts, memories, or “what if” loops</li>
            <li>• Want closure but don’t know how to find it internally</li>
            <li>• Feel lost after losing a partner they planned a future with</li>
            <li>• Need guidance to rebuild confidence and self-worth</li>
            <li>• Want to heal patterns to avoid repeating the same relationships</li>
            <li>• Wish to rediscover themselves and embrace a new beginning</li>
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
            src="/services/whoconnection4.png" 
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
