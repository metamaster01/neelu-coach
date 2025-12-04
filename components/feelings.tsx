"use client";

import { motion } from "framer-motion";

export default function Feeling() {
  const feelings = [
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#5E936C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.001 4.529C9.349 1.1 3.2 2.248 3.2 7.237c0 3.385 2.938 6.16 5.356 8.348a33.04 33.04 0 0 0 3.444 2.747 1 1 0 0 0 1 0 33.04 33.04 0 0 0 3.444-2.747c2.418-2.188 5.356-4.963 5.356-8.348 0-4.989-6.149-6.137-8.801-2.708Z" />
        </svg>
      ),
      title: "Unresolved past events",
      desc: "Let go of past emotional wounds & rediscover inner peace.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#5E936C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 11.5c0 4.7-4.5 8.5-10 8.5a12.8 12.8 0 0 1-3-.4l-4 2 .9-3.9C3.9 15.7 3 13.7 3 11.5 3 6.8 7.5 3 13 3s8 3.8 8 8.5Zm-11 0h2v2h-2Zm0-6h2v5h-2Z" />
        </svg>
      ),
      title: "Communication gaps",
      desc: "Let go of past emotional wounds & rediscover inner peace.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#5E936C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm2.07-7.75-.9.92A3.479 3.479 0 0 0 13 13h-2v-.5a4.474 4.474 0 0 1 1.29-3.18l1.24-1.26a1.75 1.75 0 1 0-2.83-1.18H8.7a3.75 3.75 0 1 1 6.37 2.93Z" />
        </svg>
      ),
      title: "Lack of self connection",
      desc: "Let go of past emotional wounds & rediscover inner peace.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
  };

  return (
    <section className="w-full bg-[#F3F3F3] flex justify-center px-4 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl w-full flex flex-col gap-12"
      >
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-[34px] md:text-5xl font-bold text-black">
            What you feel this way
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Life feels heavy not because you're weak — <br />
            but because you're carrying emotions that were never healed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feelings.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.45, delay: i * 0.15 }}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 12px 38px rgba(94,147,108,0.22)",
                borderColor: "#5E936C",
              }}
              className="bg-white rounded-2xl border border-[#CDE0D0]
              shadow-[0_12px_38px_rgba(94,147,108,0.12)]
              transition-all p-8 flex flex-col gap-4 text-left"
            >
              <div>{item.icon}</div>

              <h3 className="text-lg font-semibold text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
