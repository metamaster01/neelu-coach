"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import girlImg from "@/public/emotional.png"; 

export default function Emotional() {
  return (
    <section className="w-full bg-[#73AF6F] flex justify-center px-6 py-8 md:py-14 mb-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
       
        <div className="flex flex-col gap-6 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[44px] lg:text-[40px] font-semibold leading-tight"
          >
            Healing Emotional Pain That <br />
            Still Lives Inside You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-base md:text-lg leading-relaxed"
          >
            Release emotional blockages
          </motion.p>

          
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-2 text-white/90 text-sm md:text-base"
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
            className="w-fit mt-4 bg-white text-[#7FB881] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#F4FFF7] transition"
          >
            Start Healing Emotional Trauma
          </motion.a>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src={girlImg}
            alt="Emotional Healing"
            className="rounded-3xl shadow-xl object-cover w-[90%] md:w-[85%] lg:w-[550px] lg:h-[385px] "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
