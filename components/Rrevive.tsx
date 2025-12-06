"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phoneImg from "@/public/about/revive.png";

export default function Revive() {
  return (
    <section className="w-full flex justify-center bg-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-stretch"
      >

        {/* LEFT BLOCK - MATCH HEIGHT OF TEXT BLOCK */}
       <div className="w-full bg-[#5E936C] rounded-2xl flex justify-center items-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] py-6 md:py-8">
  <div className="w-[160px] sm:w-[200px] md:w-[240px]">
    <Image
      src={phoneImg}
      alt="Relationship Revive App"
      className="w-full h-auto object-contain"
      priority
            />
          </div>
        </div>

        {/* RIGHT BLOCK - TEXT CONTENT */}
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-black text-5xl sm:text-4xl font-semibold leading-snug">
            💚 Relationship Revive – A Safe Space for Healing
          </h2>

          <p className="text-black text-[21px] leading-relaxed">
            Neelu Taneja created Relationship Revive so people can reflect,
            heal, and grow — anytime, anywhere.
          </p>


               <h3 className="text-black text-[15px] font-medium">
  Inside the app, you will find:
</h3>
          <ul className="list-disc pl-5 text-black text-[15px] space-y-4">
            <li>Daily healing lessons</li>
            <li>Guided emotional exercises</li>
            <li>Practical tools for communication</li>
            <li>Awareness-based relationship insights</li>
            <li>Safe conversations to understand yourself better</li>
          </ul>

          <p className="text-black text-[15px] leading-relaxed pt-1">
            Her goal is to make emotional healing accessible to everyone.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#5E936C] text-black px-6 py-2 rounded-full text-sm hover:bg-green-300 transition">
              Start your journey
            </button>
            <button className="border border-gray-400 text-black px-6 py-2 rounded-full text-sm hover:bg-green-300 transition">
              Download the App
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
