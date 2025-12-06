// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// // Vector images
// import heartBG from "@/public/card-heart.png";
// import chatBG from "@/public/card-chat.png";
// import shieldBG from "@/public/card-shield.png";
// import healBG from "@/public/card-heal.png";

// export default function Services() {
//   const services = [
//     {
//       title: "1:1 Relationship Coaching",
//       desc: "Work privately with me to understand your patterns, shift limiting beliefs, and rebuild the foundation of your relationships — with yourself and your partner.",
//       button: "Book a 1:1 Call",
//       bg: heartBG,
//     },
//     {
//       title: "Couples Communication Program",
//       desc: "A guided journey for couples to move from arguments to understanding. Learn how to truly listen, express, and reconnect through proven conversation frameworks.",
//       button: "Start Your Program",
//       bg: chatBG,
//     },
//     {
//       title: "Emotional Resilience Sessions",
//       desc: "For individuals navigating emotional overwhelm or self-doubt — these sessions focus on grounding, confidence, and mindful responses.",
//       button: "Book a Session",
//       bg: shieldBG,
//     },
//     {
//       title: "Breakup & Healing Guidance",
//       desc: "Move through heartbreak with clarity and strength. Learn to release emotional pain, rebuild self-worth, and step into a grounded new chapter.",
//       button: "Begin Healing",
//       bg: healBG,
//     },
//   ];

//   // STAGGER VARIANTS FOR SMOOTH ONE-BY-ONE APPEAR
//   const parentVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.20, // gap between card animations
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="w-full flex justify-center py-20 px-4 bg-white">
//       <div className="w-full max-w-[1440px] flex flex-col">

//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-[44px] sm:text-[52px] font-semibold text-gray-900"
//         >
//           Services & Coaching Focus
//         </motion.h2>

//         {/* SUBTEXT */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, duration: 0.6 }}
//           className="text-center text-gray-600 max-w-3xl mx-auto mt-4 text-[15.5px]"
//         >
//           Wherever you are on your relationship journey — these personalized sessions help you move forward
//           with clarity and emotional strength.
//         </motion.p>

//         {/* CARDS CONTAINER WITH STAGGER */}
//         <motion.div
//           variants={parentVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
//         >
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               variants={cardVariants}
//               whileHover={{
//                 backgroundColor: "#6d9d7aff",
//                 color: "white",
//                 boxShadow: "0 8px 35px rgba(143, 237, 136, 0.35)",
//                 transition: { duration: 0.35, ease: "easeOut" },
//               }}
//               className="relative p-7 bg-[#F8F8F8] border border-green-100 rounded-3xl shadow-sm overflow-hidden transition-all"
//             >
//               {/* BACKGROUND VECTOR */}
//               <Image
//                 src={s.bg}
//                 alt=""
//                 className="absolute bottom-0 right-0 w-[140px] opacity-20 pointer-events-none select-none transition-all duration-300"
//               />

//               {/* TITLE */}
//               <h3 className="text-[20px] font-semibold mb-2 text-gray-900 relative z-10">
//                 {s.title}
//               </h3>

//               {/* DESC */}
//               <p className="text-[14px] leading-relaxed text-gray-700 relative z-10">
//                 {s.desc}
//               </p>

//               {/* BUTTON */}
//               <button
//                 className="relative z-10 mt-5 px-4 py-2 text-sm rounded-full font-medium border 
//                 text-white bg-black hover:bg-green-100 hover:text-green-600
//                 transition-all shadow-sm"
//               >
//                 {s.button}
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


import heartBG from "@/public/card-heart.png";
import chatBG from "@/public/card-chat.png";
import shieldBG from "@/public/card-shield.png";
import healBG from "@/public/card-heal.png";
import traumaBG from "@/public/trauma.png";

export default function Services() {
  const services = [
    {
      title: "1:1 Relationship Coaching",
      desc: "Work privately with me to understand your patterns, shift limiting beliefs, and rebuild the foundation of your relationships — with yourself and your partner.",
      button: "Learn More",
      bg: heartBG,
    },
    {
      title: "Couples Communication Program",
      desc: "A guided journey for couples to move from arguments to understanding. Learn how to truly listen, express, and reconnect through proven conversation frameworks.",
      button: "Learn More",
      bg: chatBG,
    },
    {
      title: "Emotional Resilience Sessions",
      desc: "For individuals navigating emotional overwhelm or self-doubt — these sessions focus on grounding, confidence, and mindful responses.",
      button: "Learn More",
      bg: shieldBG,
    },
    {
      title: "Breakup & Healing Guidance",
      desc: "Move through heartbreak with clarity and strength. Learn to release emotional pain, rebuild self-worth, and step into a grounded new chapter.",
      button: "Learn More",
      bg: healBG,
    },

    

     {
      title: "Trauma Recovery & Emotional Healing",
      desc: "Heal from past emotional wounds and break free from limiting patterns. Our trauma-focused sessions provide a safe space to process experiences, release pain, and rebuild inner strength.",
      button: "Learn More",
      bg: traumaBG,
    },


     {
      title: "Emotional Resilience Sessions",
      desc: "For individuals navigating emotional overwhelm or self-doubt — these sessions focus on grounding, confidence, and mindful responses.",
      button: "Learn More",
      bg: shieldBG,
    },
  ];

  const [start, setStart] = useState(0);
  const visible = 4; 

  const next = () => {
    if (start + visible < services.length) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  // STAGGER ANIMATIONS
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.20 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.55, ease: "easeOut" }
    },
  };

  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div className="w-full max-w-[1440px] flex flex-col">

        
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[44px] sm:text-[52px] font-semibold text-gray-900"
        >
          Services & Coaching Focus
        </motion.h2>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mt-4 text-[15.5px]"
        >
          Wherever you are on your relationship journey — these personalized sessions help you move forward
          with clarity and emotional strength.
        </motion.p>

        {/* ARROWS */}
        <div className="flex justify-between items-center mt-10 mb-2">
          <button
            onClick={prev}
            disabled={start === 0}
            className={`px-4 py-2 border rounded-full shadow-sm transition-all ${
              start === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-green-100 hover:border-green-400"
            }`}
          >
            ◀
          </button>
          <button
            onClick={next}
            disabled={start + visible >= services.length}
            className={`px-4 py-2 border rounded-full shadow-sm transition-all ${
              start + visible >= services.length
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-green-100 hover:border-green-400"
            }`}
          >
            ▶
          </button>
        </div>

        {/* CARDS (EXACT SAME SIZE & UI) */}
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
        >
          {services.slice(start, start + visible).map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                backgroundColor: "#6d9d7aff",
                color: "white",
                boxShadow: "0 8px 35px rgba(143, 237, 136, 0.35)",
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="relative p-7 bg-[#F8F8F8] border border-green-100 rounded-3xl shadow-sm overflow-hidden transition-all"
            >
              <Image
                src={s.bg}
                alt=""
                className="absolute bottom-0 right-0 w-[140px] opacity-300 select-none pointer-events-none h-50"
              />

              <h3 className="text-[20px] font-semibold mb-2 text-gray-900 relative z-10">
                {s.title}
              </h3>

              <p className="text-[14px] leading-relaxed text-gray-700 relative z-10">
                {s.desc}
              </p>

              <button
                className="relative z-10 mt-5 px-4 py-2 text-sm rounded-full font-medium border 
                text-white bg-black hover:bg-green-100 hover:text-green-600 transition-all shadow-sm"
              >
                {s.button}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
