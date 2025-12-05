"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Approach() {
  const points = [
    "Healing emotional wounds",
    "Improving communication in relationships",
    "Releasing old fears and limiting patterns",
    "Building self-love and confidence",
    "Creating conscious, meaningful connections",
  ];

  return (
    <section className="w-full py-24 flex justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full px-6 text-center space-y-3"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 flex justify-center items-center gap-2">
          <span className="text-pink-500 text-[28px]">🌸</span>
          What Makes Her Approach Unique?
        </h2>

        
        <p className="text-gray-600 text-sm md:text-[15px] max-w-lg mx-auto">
          Where mindset, therapy, and self-awareness come together.
        </p>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-[#5E936C]/10 rounded-3xl shadow-[0_8px_32px_rgba(94,147,108,0.18)]
            border border-green-100
            p-8 sm:p-10 mt-10 grid md:grid-cols-2 gap-10 items-center text-left
          "
        >
         
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="flex justify-center md:justify-start"
>
  <Image
    src="/about/approach.png"
    alt="Approach"
    width={520}
    height={520} 
    className="
      w-full md:w-[520px]
      h-auto md:h-[400px]    
      rounded-2xl object-cover
      shadow-[0_10px_40px_rgba(94,147,108,0.25)]
    "
  />
</motion.div>


          
          <div className="space-y-4 text-[15px] text-black leading-relaxed">
            <p>
              Neelu Taneja blends NLP, mindset work, emotional therapy,
              and self-awareness to help people understand their emotional
              triggers and patterns at a deeper level.
            </p>

            <p className="font-medium text-black">Her sessions focus on:</p>

            <ul className="space-y-3">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 rounded-full  text-[18px] mt-[2px]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Her style is gentle, practical, and deeply transformational,
              making every session a powerful step toward emotional freedom.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
