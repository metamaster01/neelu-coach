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
           This program is for individuals who:
          </p>

          <ul className="space-y-5 text-black text-[15px] leading-relaxed pl-1">
            <li>• Have unresolved emotional or childhood trauma</li>
            <li>• Experience emotional triggers, anxiety, or past memories resurfacing</li>
            <li>• Struggle with trust, safety, or feeling worthy</li>
            <li>• Have patterns of self-doubt, people-pleasing, or emotional shutdown</li>
            <li>• Feel disconnected from themselves, their body, or their emotions</li>
            <li>• Carry guilt, shame, or regret from past experiences</li>
            <li>• Want to break cycles formed from toxic relationships or childhood wounds</li>
            <li>• Are ready to heal deeply and create emotional freedom</li>
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
            src="/services/whoconnection5.png" 
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
