"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Mission() {
  const points = [
    "Why we feel what we feel",
    "How our past shapes our present",
    "How communication can transform connection",
    "How awareness brings emotional freedom",
  ];

  return (
    <section className="w-full py-20 flex justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full px-6 text-center space-y-4"
      >
        
        <h2 className="text-3xl sm:text-4xl font-semibold text-black-800 flex justify-center items-center gap-2">
          <span className="text-pink-500 text-[28px]">💞</span>
          Our Mission
        </h2>

        
        <p className="text-gray-600 text-sm md:text-[15px] max-w-xl mx-auto">
          Helping people heal emotionally so they can build stronger and happier relationships.
        </p>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            w-full bg-[#5E936C0A]/200 rounded-3xl shadow-[0_6px_25px_rgba(94,147,108,0.18)]
            p-8 sm:p-10 mt-8 grid md:grid-cols-2 gap-10 items-center
            border border-green-100
          "
        >
          {/*  TEXT */}
          <div className="text-left space-y-4">
            <p className="text-[#5E936C] italic text-[15px] leading-relaxed">
              To help people heal emotionally so they can create stronger, happier relationships.
            </p>

            <p className="text-black text-[15px] leading-relaxed">
              She believes that true healing begins when we learn to understand:
            </p>

            <ul className="space-y-3">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-pink-500 text-[18px] mt-[1px]">🩷</span>
                  <span className="text-black text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-black text-[15px] leading-relaxed pt-2">
              Her coaching method is not just solution–based — it is transformational.
            </p>
          </div>

          {/*  IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <Image
              src="/about/mission.png"
              alt="Mission"
              width={460}
              height={340}
              className="rounded-2xl object-cover shadow-[0_10px_40px_rgba(94,147,108,0.25)]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
