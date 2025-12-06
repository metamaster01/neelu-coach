"use client";

import HealConnection from "@/components/HealConnection";
import WhoCoaching from "@/components/WhoConnection";
import { motion } from "framer-motion";
import Image from "next/image";


export default function RelationshipCoaching() {
  return (
    <main className="w-full bg-white overflow-hidden">

      
      {/* TOP SECTION */}
      
      <section className="w-full  h-[140px] sm:h-[260px] lg:h-[140] flex items-center justify-center "
       style={{
        background: "linear-gradient(180deg, #5E936C, #7ba88cff, #FFFFFF)",
      }}>
      
      </section>

      {/* ---------------------------------- */}
      {/* IMAGE  */}
      {/* ---------------------------------- */}
      <section
        className="
          relative w-full h-[240px] sm:h-[520px] lg:h-[480px]
          flex items-center justify-center
        "
      >
        {/* IMAGE */}
        <Image
          src="/services/women.png" 
          alt="Relationship Coaching"
          fill
          className="object-cover object-center"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* TEXT OVER IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm opacity-80"
          >
            Home / Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-extrabold mt-6 gap-4 text-white "
          >
            1:1 Relationship Coaching
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="max-w-xl mx-auto text-sm sm:text-base mt-3 opacity-40 leading-relaxed"
          >
            Heal Your Connection. Strengthen Your Bond. Build a Relationship That Feels Safe.
          </motion.p>
        </motion.div>
      </section>

      {/* Add next sections below if needed */}
      <HealConnection/>
      <WhoCoaching/>
    </main>
  );
}
