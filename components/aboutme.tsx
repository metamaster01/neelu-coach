


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import neeluImg from "@/public/neelu.jpg";
import achievementsImg from "@/public/achievement.png";

export default function AboutMe() {
  const stats = [
    { label: "Years Of Experience", value: 25 },
    { label: "Different Podcast", value: 50 },
    { label: "Awards Received", value: 50 },
    { label: "Media Coverage", value: 150 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) => (num < stats[i].value ? num + 1 : num))
      );
    }, 35);
    return () => clearInterval(interval);
  }, []); // 

  return (
    <section className="w-full flex justify-center px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-[1300px] w-full flex flex-col gap-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          About mee
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src={neeluImg}
              alt="Neelu Taneja"
              className="rounded-2xl w-[68%] md:w-[78%] lg:w-[82%] h-auto object-contain shadow-md"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10 pr-2 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-[#5E936C] leading-[1.05]"
            >
              Hello, I’m <br /> Neelu Taneja!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-[#5E936C] font-semibold text-base md:text-lg leading-[1.05]"
            >
              Your Relationship Clarity Coach
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-sm md:text-base"
            >
              A Relationship Coach dedicated to helping individuals and couples
              reconnect, rebuild trust, and communicate with love.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-sm md:text-base"
            >
              I believe every relationship can heal when we feel safe, heard,
              and understood. My approach blends empathy, psychology, and
              simple communication tools that make emotional healing easier and real.
            </motion.p>

            <a
              href="/about"
              className="px-6 py-3 w-30 rounded-full bg-black text-white text-sm font-medium hover:bg-green-500 transition mx-auto md:mx-0"
            >
              Know more
            </a>

            <Image
              src={achievementsImg}
              alt="Achievements"
              className="w-[70%] md:w-[55%] mt-2 opacity-95 mx-auto md:mx-0"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="bg-gradient-to-br from-green-50 to-white shadow rounded-xl py-6 flex flex-col items-center gap-2 cursor-pointer border border-green-100 transition"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#5E936C]">
                {counts[i]}+
              </h3>
              <p className="text-gray-600 text-xs md:text-sm text-center leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
