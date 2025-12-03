"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-white">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-pink-300 to-pink-400 py-24 text-center">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          About Us
        </h1>
      </section>

     

      {/* OUR MISSION */}
      <section className="w-full py-16 bg-[#FFF4F7] flex justify-center">
        <div className="max-w-5xl w-full px-5 text-center space-y-10">

          <h2 className="text-3xl font-semibold text-gray-800">
            💗 Our Mission
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            Helping people heal emotionally so they can thrive in love, happiness,
            and meaningful relationships.
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px]">
              <li>To help people heal emotionally so they can change their lives</li>
              <li>We believe that true healing begins when we face what we feel</li>
              <li>No one can heal you — but you can heal yourself</li>
              <li>Your mind and past shapes your present</li>
            </ul>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px]">
              <li>How conversations can transform connection</li>
              <li>How awareness brings emotional freedom</li>
              <li>Healing is not fast and not just solution-based — it is transformation</li>
            </ul>
          </div>

          {/* IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <Image
              src="/about/mission-photo.jpg"
              alt="mission"
              width={450}
              height={350}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

        </div>
      </section>
    </main>
  );
}
