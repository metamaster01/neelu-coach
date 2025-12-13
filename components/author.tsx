"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Author() {
  return (
    <section className="w-full py-24 flex justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-5 text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 flex items-center gap-2">
            <span className="text-[32px]">📘</span>
            Author of The Feelings Book
          </h2>

          <p className="text-gray-500 text-sm md:text-[15px]">
            Best-selling guide to understanding emotions
          </p>

          <p className="text-black text-[15px] leading-relaxed max-w-md">
            Coach Neelu Taneja’s book, The Feelings Book, is a guide to understanding
            emotions in a simple and relatable way.
          </p>

          <p className="text-black text-[15px] leading-relaxed">
            It helps readers:
          </p>

          <ul className="space-y-2 text-gray-800 text-[15px] leading-snug">
            <li className="flex items-start gap-2">
              <span className="text-black text-lg">•</span>
              Identify their feelings
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black text-lg">•</span>
              Express themselves better
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black text-lg">•</span>
              Heal inner conflicts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black text-lg">•</span>
              Build emotional clarity
            </li>
          </ul>

          <p className="text-black text-[15px] leading-relaxed max-w-md">
            It is widely appreciated for being easy to read and life-changing
          </p>

          <a
            href="https://www.amazon.in/-/hi/Neelu-Taneja/dp/B0CKX4PN5Y"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4 inline-flex items-center gap-2 bg-white text-black
              px-6 py-2 rounded-full text-sm font-medium border border-black
              hover:bg-green-200 transition
            "
          >
            Buy Now →
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/about/author.png"
            alt=""
            width={410}
            height={500}
            className="
              rounded-2xl object-cover
              shadow-[0_10px_40px_rgba(94,147,108,0.25)]
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
