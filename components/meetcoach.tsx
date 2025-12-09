"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetCoach() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20 relative">

      {/* SOFT GRADIENT MASK TOP */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* ----- TOP TWO COLUMN LAYOUT ----- */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14 items-start mb-20">

        {/* LEFT – Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:pt-2"
        >
          <h2
            className="
            text-2xl md:text-3xl font-semibold whitespace-nowrap tracking-tight
          "
          >
            Meet Coach Neelu Taneja
          </h2>
        </motion.div>

        {/* RIGHT – Subtitle + Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#5E936CCC] text-lg font-semibold mb-5">
            Your Guide to Healing, Awareness & Conscious Relationships
          </p>

          <div className="max-w-3xl text-gray-800 leading-relaxed space-y-4 text-[15px] md:text-base">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              In today’s fast-moving world, relationships often struggle not
              because of a lack of love, but because of a lack of understanding.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              This is where Coach Neelu Taneja steps in — with warmth, wisdom,
              and years of experience in emotional healing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              She is an NLP Coach, Relationship Coach, and Author, known for
              transforming how people understand their emotions, patterns, and
              relationships.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* IMAGES SECTION WITH ADVANCED MOTIONS */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-3 gap-10 
          place-items-center relative
        "
      >
        {/* BACKGROUND GLOW EFFECT */}
        <div
          className="
            absolute inset-0 blur-[90px] opacity-40 pointer-events-none 
            bg-[#5E936C]/30
          "
        ></div>

        {[
          { src: "/about/about1.png", h: "h-[420px]" },
          { src: "/about/about2.png", h: "h-[350px]" },
          { src: "/about/about3.png", h: "h-[420px]" },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
              transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.05,
              rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5,
              y: -6,
            }}
            className={`
              relative w-full ${img.h} rounded-xl overflow-hidden shadow-lg
              hover:shadow-2xl transition-all duration-500 group
            `}
          >
            {/* GLASS SHIMMER */}
            <div
              className="
                absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%]
                duration-700
              "
            />

            {/* IMAGE */}
            <Image src={img.src} alt="Coach Neelu" fill className="object-cover" />

            {/* TOP LIGHT SHIMMER */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.45 }}
              className="
                absolute top-0 left-0 w-full h-24
                bg-gradient-to-b from-white/40 to-transparent
                pointer-events-none
              "
            />
          </motion.div>
        ))}
      </div>

      {/* SOFT GRADIENT MASK BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
