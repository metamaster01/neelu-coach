"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import selfie from "@/public/selfie.png"; // replace with your image

export default function Deserve() {
  const items = [
    {
      title: "Loved",
      desc: "To feel deeply valued, supported, and emotionally seen in your relationships.",
    },
    {
      title: "Safe",
      desc: "To feel emotionally protected, understood, and secure — without fear or anxiety.",
    },
    {
      title: "Seen",
      desc: "To have your feelings acknowledged, your voice heard, and your truth accepted.",
    },
    {
      title: "Understood",
      desc: "To experience real empathy, healthy communication, and emotional clarity.",
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[42px] md:text-[52px] font-semibold leading-tight tracking-tight  mb-3"
        >
          You Deserve to Feel…
        </motion.h1>

        <p className="text-[#6B6B6B] text-lg md:text-[16px] max-w-1xl leading-relaxed mb-8">
          Because healing isn’t just about fixing the past — it’s about becoming who you were always
          meant to be.
        </p>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Image
              src={selfie}
              alt="happy people selfie"
              className="rounded-xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
                className="bg-white rounded-xl border border-[#DCE1D9] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.1)] transition-all"
              >
                
                <div className="w-7 h-7 flex items-center justify-center rounded-full  mb-3">
                  <span className="text-[#5D8A63] text-xl">❤</span>
                </div>

                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
