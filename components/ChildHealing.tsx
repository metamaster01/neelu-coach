"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import childImg from "@/public/child.png";

export default function ChildHealing() {
  return (
    <section className="w-full bg-[#8BAE66] flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src={childImg}
            alt="Inner Child Healing"
            priority
            className="rounded-3xl shadow-xl object-cover 
              w-[85%] sm:w-[80%] md:w-[90%] lg:w-[520px] xl:w-[580px] 
              h-auto md:h-[330px] lg:h-[390px]"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-4 sm:gap-5 text-white md:pl-4 lg:pl-8">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight"
          >
            Your Inner Child Deserves Healing Too
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Childhood experiences shape how you love, trust, and react in relationships.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-xs sm:text-sm md:text-base"
          >
            Through guided inner-child work, you will:
          </motion.p>

          {/* BULLET LIST */}
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-2 sm:gap-3 text-white/95 text-xs sm:text-sm md:text-base"
          >
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg md:text-xl">🌼</span>
              Heal abandonment & rejection wounds
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg md:text-xl">🌼</span>
              Build emotional security
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg md:text-xl">🌼</span>
              Break unhealthy patterns
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg md:text-xl">🌼</span>
              Reconnect with your true self
            </li>
          </motion.ul>

          {/* CTA BUTTON */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="w-fit bg-white text-[#8BB77D] px-5 sm:px-6 md:px-7 py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold shadow-md hover:bg-[#F7FFF3] transition"
          >
            Start Inner Child Healing
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
