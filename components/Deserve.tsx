"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import selfie from "@/public/selfie.png";


const fadeFromTop = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.6, type: "spring" },
  }),
};

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
    <section className="w-full bg-[#F8F8F8] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.h1
          variants={fadeFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[42px] md:text-[52px] font-semibold leading-tight tracking-tight mb-3 text-black"
        >
          You Deserve to Feel…
        </motion.h1>

        <motion.p
          variants={fadeFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#6B6B6B] text-lg md:text-[16px] max-w-1xl leading-relaxed mb-12"
        >
          Because healing isn’t just about fixing the past — it’s about becoming who you were
          always meant to be.
        </motion.p>

        
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}
          <motion.div
            variants={fadeFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={selfie}
              alt="happy people selfie"
              className="rounded-xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                className="bg-white rounded-xl border border-[#DCE1D9] p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_6px_30px_rgba(94,147,108,0.35)] hover:bg-[#E9F4EC] hover:-translate-y-2"
              >
                
                <div className="w-8 h-8 flex items-center justify-center rounded-full">
                  <span className="text-[#5D8A63] text-2xl">❤</span>
                </div>

                
                <h3 className="text-xl font-semibold text-black mt-3 mb-2">{item.title}</h3>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
