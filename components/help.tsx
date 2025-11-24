"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/help1.png"; // replace with your image
import img2 from "@/public/help2.png"; // replace with your image
import img3 from "@/public/help3.png"; // replace with your image

export default function HelpSection() {
  return (
    <section className="w-full flex justify-center py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              staggerChildren: 0.22,
            },
          },
        }}
        className="w-full text-center"
        style={{
          maxWidth: "1440px",
          padding: "40px 98px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Title */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
        >
          What I Help You With
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Every relationship has seasons — times of closeness and times of challenge.
          I help you find clarity, rebuild trust, and reconnect with your partner (and yourself).
        </motion.p>

        {/* Cards Wrapper */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-8 mt-6
          "
        >
          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              bg-[#F4F4F4] rounded-3xl p-6 shadow-sm 
              flex flex-col gap-4 cursor-pointer
            "
          >
            <h3 className="text-xl font-semibold text-pink-600">
              Rebuilding Trust
            </h3>
            <p className="text-gray-700 text-sm">
              Learn to heal from emotional distance or betrayal with compassion
              and clear communication.
            </p>

            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src={img1}
                alt="Rebuilding Trust"
                className="w-full h-56 object-cover"
              />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              bg-[#F4F4F4] rounded-3xl p-6 shadow-sm 
              flex flex-col gap-4 cursor-pointer
            "
          >
            <h3 className="text-xl font-semibold text-pink-600">
              Rekindling Connection
            </h3>
            <p className="text-gray-700 text-sm">
              Bring back warmth, laughter, and intimacy — even after months or
              years of disconnect.
            </p>

            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src={img2}
                alt="Rekindling Connection"
                className="w-full h-56 object-cover"
              />
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              bg-[#F4F4F4] rounded-3xl p-6 shadow-sm 
              flex flex-col gap-4 cursor-pointer
            "
          >
            <h3 className="text-xl font-semibold text-pink-600">
              Communicating with Clarity
            </h3>
            <p className="text-gray-700 text-sm">
              Discover how to express your needs and listen without blame —
              turning conflicts into conversations.
            </p>

            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src={img3}
                alt="Communication"
                className="w-full h-56 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RESPONSIVE FIXES */}
      <style>{`
        @media (max-width: 1024px) {
          section > div {
            padding: 40px 50px !important;
          }
        }
        @media (max-width: 768px) {
          section > div {
            padding: 35px 30px !important;
          }
        }
        @media (max-width: 640px) {
          section > div {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
