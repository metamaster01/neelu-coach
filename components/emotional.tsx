"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import girlImg from "@/public/emotional.png";

export default function Emotional() {
  return (
    <section className="w-full bg-gradient-to-b from-[#73AF6F] via-[#73AF6F] to-[#8BAE66] flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 lg:py-24 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 sm:gap-6 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-semibold leading-tight"
          >
            Healing Emotional Pain That
            <br /> Still Lives Inside You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-[13px] sm:text-sm md:text-base lg:text-lg leading-relaxed"
          >
            Release emotional blockages and reclaim emotional safety within yourself.
          </motion.p>

          
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-2 text-white/90 text-xs sm:text-sm md:text-base"
          >
            <li className="flex gap-2 items-center">
              <span className="text-white text-lg">✔</span> Regulate your nervous system
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-white text-lg">✔</span> Feel safe within yourself
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-white text-lg">✔</span> Respond, not react
            </li>
          </motion.ul>

          {/* CTA BUTTON */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-fit mt-4 bg-white text-[#7FB881] px-5 py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm md:text-base shadow-md hover:bg-[#F4FFF7] transition"
          >
            Start Healing Emotional Trauma
          </motion.a>
        </div>

        {/*  IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src={girlImg}
            alt="Emotional Healing"
            className="
              rounded-3xl shadow-xl object-cover
              w-[85%] sm:w-[75%] md:w-[90%] lg:w-[520px] xl:w-[580px]
              h-auto md:h-[340px] lg:h-[400px]
            "
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
