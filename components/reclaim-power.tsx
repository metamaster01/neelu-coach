"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ReclaimPower() {
  return (
    <section className="w-full bg-[#3E5F46] py-6 sm:py-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="w-full max-w-[1180px] px-3 space-y-10"
      >
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-white text-3xl sm:text-2xl md:text-[38px] font-semibold leading-snug"
        >
          Heal your past. Reclaim your power. Build a life that feels safe, grounded, and emotionally free.
        </motion.h2>

        {/* PARAGRAPH BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="space-y-4 max-w-[950px] text-[21px] leading-relaxed text-gray-200"
        >
          <p>
            Trauma doesn’t only come from big events — it can come from childhood wounds, emotional neglect, past relationships, abandonment, or experiences that left you feeling unsafe or unseen.
          </p>
          <p>
            This program helps you gently process what happened, release emotional blocks, and rebuild a healthier inner world
          </p>
        </motion.div>

        {/* CTA BUTTON → LINK TO /contact */}
        <Link href="/contact">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="
              bg-white text-black px-6 sm:px-7 py-2.5 rounded-full
              text-sm font-medium shadow-md hover:bg-green-200 transition
              w-fit
            "
          >
            Start Your Healing Together
          </motion.button>
        </Link>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="pt-4"
        >
          <Image
            src="/services/ReclaimPower.png"
            alt="Reclaim Power"
            width={1080}
            height={200}
            className="
              rounded-2xl object-cover
              shadow-[0_6px_24px_rgba(0,0,0,0.18)]
              h-[240px] sm:h-[520px] lg:h-[440px]
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
