"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import childImg from "@/public/child.png";

export default function ChildHealing() {
  return (
    <section className="w-full bg-[#8BAE66] flex justify-center px-6 py-2  md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
      >
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src={childImg}
            alt="Inner Child Healing"
            className="rounded-3xl shadow-xl object-cover w-[90%] md:w-[85%] lg:w-[85%] lg:h-[385px]"
          />
        </motion.div>

        
        <div className="flex flex-col gap-6 text-white md:pl-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] md:text-[42px] lg:text-[48px] font-semibold leading-tight"
          >
            Your Inner Child Deserves Healing Too
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-base md:text-lg leading-relaxed"
          >
            Childhood experiences shape how you love, trust, and react in
            relationships.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-sm md:text-base"
          >
            Through guided inner-child work, you will:
          </motion.p>

          
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-3 text-white/95 text-sm md:text-base"
          >
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-xl">🌼</span> Heal abandonment & rejection wounds
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-xl">🌼</span> Build emotional security
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-xl">🌼</span> Break unhealthy patterns
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300 text-xl">🌼</span> Reconnect with your true self
            </li>
          </motion.ul>

          {/* BUTTON */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-fit bg-white text-[#8BB77D] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#F6FFF4] transition"
          >
            Start Inner Child Healing
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
