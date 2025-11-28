// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Services() {
//   const services = [
//     {
//       title: "1:1 Relationship Coaching",
//       desc: "Work privately with me to understand your patterns, shift limiting beliefs, and rebuild the foundation of your relationships — with yourself and your partner.",
//       button: "Book a 1:1 Call",
//       accent: false,
//     },
//     {
//       title: "Couples Communication Program",
//       desc: "A guided journey for couples to move from arguments to understanding. Learn how to truly listen, express, and reconnect through proven conversation frameworks.",
//       button: "Start Your Program",
//       accent: false,
//     },
//     {
//       title: "Emotional Resilience Sessions",
//       desc: "For individuals navigating emotional overwhelm or self-doubt — these sessions focus on grounding, confidence, and mindful responses.",
//       button: "Book a Session",
//       accent: false,
//     },
//     {
//       title: "Breakup & Healing Guidance",
//       desc: "Move through heartbreak with clarity and strength. Learn to release emotional pain, rebuild self-worth, and step into a grounded new chapter.",
//       button: "Begin Healing",
//       accent: false,
//     },
//   ];

//   return (
//     <section className="w-full flex justify-center px-4 py-12 md:py-20">
//       <div className="max-w-7xl w-full">
        
        
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
//         >
//           Services & Coaching Focus
//         </motion.h2>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base"
//         >
//           Wherever you are on your relationship journey — healing, rebuilding,
//           or starting anew — these personalized coaching sessions are designed
//           to help you grow with confidence, clarity, and compassion.
//         </motion.p>

//         {/* Cards Container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.15 }}
//               whileHover={{
//                 scale: 1.04,
//                 transition: { type: "spring", stiffness: 200, damping: 15 },
//               }}
//               className={`p-6 rounded-2xl border shadow-sm transition-all cursor-pointer group 
//                 ${
//                   s.accent
//                     ? "bg-pink-500 text-white"
//                     : "bg-gray-50 hover:bg-pink-50"
//                 }`}
//             >
//               {/* Title */}
//               <h3
//                 className={`text-lg sm:text-xl font-semibold ${
//                   s.accent ? "text-white" : "text-gray-900 group-hover:text-pink-600"
//                 }`}
//               >
//                 {s.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className={`mt-3 text-sm leading-relaxed ${
//                   s.accent
//                     ? "text-white/90"
//                     : "text-gray-700 group-hover:text-gray-800"
//                 }`}
//               >
//                 {s.desc}
//               </p>

//               {/* Placeholder Image (You can replace with real images later) */}
//               <div className="mt-5 w-full h-40 bg-white rounded-xl overflow-hidden shadow-sm">
//                 <div className="w-full h-full bg-gray-200"></div>
//               </div>

//               {/* Button */}
//               <button
//                 className={`mt-5 text-sm px-4 py-2 rounded-full shadow 
//                   transition-all
//                   ${
//                     s.accent
//                       ? "bg-white text-pink-600 hover:bg-pink-100"
//                       : "bg-white text-gray-900 border group-hover:bg-pink-500 group-hover:text-white"
//                   }
//                 `}
//               >
//                 {s.button}
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "1:1 Relationship Coaching",
      desc: "Work privately with me to understand your patterns, shift limiting beliefs, and rebuild the foundation of your relationships — with yourself and your partner.",
      button: "Book a 1:1 Call",
    },
    {
      title: "Couples Communication Program",
      desc: "A guided journey for couples to move from arguments to understanding. Learn how to truly listen, express, and reconnect through proven conversation frameworks.",
      button: "Start Your Program",
    },
    {
      title: "Emotional Resilience Sessions",
      desc: "For individuals navigating emotional overwhelm or self-doubt — these sessions focus on grounding, confidence, and mindful responses.",
      button: "Book a Session",
    },
    {
      title: "Breakup & Healing Guidance",
      desc: "Move through heartbreak with clarity and strength. Learn to release emotional pain, rebuild self-worth, and step into a grounded new chapter.",
      button: "Begin Healing",
    },
  ];

  return (
    <section className="w-full flex justify-center py-16 sm:py-20 px-4 bg-white">
      <div className="w-full max-w-[1440px] flex flex-col">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[44px] sm:text-[52px] font-extrabold text-gray-900"
        >
          Services & Coaching Focus
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mt-4 text-[15.5px] leading-relaxed"
        >
          Wherever you are on your relationship journey — healing, rebuilding,
          or starting anew — these personalized coaching sessions help you move
          forward with clarity and emotional strength.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ce698bff",
                transition: { duration: 0.32 },
              }}
              className="p-6 flex flex-col justify-between bg-[#F8F8F8] border border-pink-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
            >
              {/* Card Title */}
              <h3 className="text-[20px] font-semibold text-gray-900 group-hover:text-pink-600">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-relaxed text-gray-700">
                {s.desc}
              </p>

              {/* Image Placeholder */}
              {/* <div className="mt-5 w-full h-40 rounded-xl bg-gray-200 shadow-inner" /> */}

              {/* Button */}
              <button
                className="mt-5 px-4 py-2 text-sm rounded-full font-medium border border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition-all shadow-sm"
              >
                {s.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
