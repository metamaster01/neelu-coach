// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// import neeluImg from "@/public/neelu.jpg"; 
// import achievementsImg from "@/public/achievement.png";
// import mediaLogos from "@/public/achievement.png";

// export default function AboutMe() {
//   const stats = [
//     { id: 1, label: "Years Of Experience", value: 25 },
//     { id: 2, label: "Different Podcast", value: 50 },
//     { id: 3, label: "Awards Received", value: 50 },
//     { id: 4, label: "Media Coverage", value: 150 },
//   ];

//   const [counts, setCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prev) =>
//         prev.map((num, i) => (num < stats[i].value ? num + 1 : num))
//       );
//     }, 40);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full flex justify-center px-4 py-12 md:py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-[1440px] w-full flex flex-col gap-12"
//       >
//         {/* TITLE */}
//         <h1 className="text-4xl font-bold text-black">About mee</h1>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* LEFT IMAGE */}
//           <Image
//             src={neeluImg}
//             alt="Neelu Taneja"
//             className="rounded-xl w-full object-cover"
//           />

//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col gap-6">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 leading-tight">
//               Hello, I’m <br /> Neelu Taneja!
//             </h2>

//             <p className="text-pink-600 font-medium">
//               Your Relationship Clarity Coach
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               A Relationship Coach dedicated to helping individuals and couples
//               reconnect, rebuild trust, and communicate with love.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               I believe every relationship can heal when we feel safe, heard,
//               and understood. My approach blends empathy, psychology, and
//               simple communication tools that make emotional healing easier and
//               real.
//             </p>

//             <a
//               href="/about"
//               className="px-6 py-3 w-36 rounded-full bg-black text-white text-sm font-medium hover:bg-pink-500 transition"
//             >
//               Know more
//             </a>

//             {/* ACHIEVEMENT ICONS */}
//             <Image
//               src={achievementsImg}
//               alt="Achievements"
//               className="w-full mt-2"
//             />

            
//           </div>
//         </div>

//         {/* COUNTING CARDS */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-br from-pink-50 to-white shadow rounded-xl py-8 flex flex-col items-center gap-2 cursor-pointer transition"
//             >
//               <h3 className="text-4xl font-extrabold text-pink-500">
//                 {counts[i]}+
//               </h3>
//               <p className="text-gray-600 text-sm text-center">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import neeluImg from "@/public/neelu.jpg";
import achievementsImg from "@/public/achievement.png";

export default function AboutMe() {
  const stats = [
    { label: "Years Of Experience", value: 25 },
    { label: "Different Podcast", value: 50 },
    { label: "Awards Received", value: 50 },
    { label: "Media Coverage", value: 150 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));


  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) => (num < stats[i].value ? num + 1 : num))
      );
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-[1440px] w-full flex flex-col gap-10"
      >
        
        <h1 className="text-4xl font-bold text-black mb-4">About mee</h1>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          
          <div className="flex justify-center">
            <Image
              src={neeluImg}
              alt="Neelu Taneja"
              className="rounded-xl w-[85%] md:w-[92%] lg:w-[95%] h-auto object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-5 pr-2">

            <h2 className="text-5xl md:text-6xl font-extrabold text-pink-500 leading-tight">
              Hello, I’m <br /> Neelu Taneja!
            </h2>

            <p className="text-pink-600 font-semibold text-sm md:text-lg">
              Your Relationship Clarity Coach
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
              A Relationship Coach dedicated to helping individuals and couples
              reconnect, rebuild trust, and communicate with love.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
              I believe every relationship can heal when we feel safe, heard, and
              understood. My approach blends empathy, psychology, and simple
              communication tools that make emotional healing easier and real.
            </p>

            <a
              href="/about"
              className="px-6 py-3 w-40 rounded-full bg-black text-white text-sm font-medium hover:bg-pink-500 transition"
            >
              Know more
            </a>

            {/* ACHIEVEMENTS IMAGE  */}
            <Image
              src={achievementsImg}
              alt="Achievements"
              className="w-[80%] md:w-[70%] mt-4 opacity-95"
            />
          </div>
        </div>

        {/* COUNTING CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="
                bg-gradient-to-br from-pink-50 to-white 
                shadow rounded-xl 
                py-7 flex flex-col items-center gap-2 
                cursor-pointer transition border border-pink-100
              "
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-pink-500">
                {counts[i]}+
              </h3>
              <p className="text-gray-600 text-xs md:text-sm text-center w-[80%] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}






//chota iamge neelu mam ka design code

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// import neeluImg from "@/public/neelu.jpg";
// import achievementsImg from "@/public/achievement.png";

// export default function AboutMe() {
//   const stats = [
//     { label: "Years Of Experience", value: 25 },
//     { label: "Different Podcast", value: 50 },
//     { label: "Awards Received", value: 50 },
//     { label: "Media Coverage", value: 150 },
//   ];

//   const [counts, setCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prev) =>
//         prev.map((num, i) => (num < stats[i].value ? num + 1 : num))
//       );
//     }, 35);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full flex justify-center px-4 py-10 md:py-14">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.35 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-[1440px] w-full flex flex-col gap-10"
//       >
//         {/* TITLE */}
//         <h1 className="text-3xl md:text-4xl font-bold text-black">About mee</h1>

//         {/* GRID SECTION */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

//           {/* LEFT IMAGE */}
//           <div className="flex justify-center">
//             <Image
//               src={neeluImg}
//               alt="Neelu Taneja"
//               className="
//                 rounded-xl 
//                 w-[90%] sm:w-[80%] md:w-[95%] 
//                 max-h-[600px]
//                 object-contain
//               "
//             />
//           </div>

//           {/* RIGHT TEXT CONTENT */}
//           <div className="flex flex-col gap-4 md:gap-5 pr-1">

//             <h2 className="
//                 text-pink-500 
//                 font-extrabold 
//                 leading-tight
//                 text-[2.4rem] 
//                 sm:text-[3rem] 
//                 md:text-[3.4rem] 
//                 lg:text-[4rem]
//             ">
//               Hello, I’m <br /> Neelu Taneja!
//             </h2>

//             <p className="text-pink-600 font-semibold text-sm md:text-lg">
//               Your Relationship Clarity Coach
//             </p>

//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               A Relationship Coach dedicated to helping individuals and couples
//               reconnect, rebuild trust, and communicate with love.
//             </p>

//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               I believe every relationship can heal when we feel safe, heard, and
//               understood. My approach blends empathy, psychology, and simple
//               communication tools that make emotional healing easier and real.
//             </p>

//             {/* BUTTON */}
//             <a
//               href="/about"
//               className="
//                 px-6 py-3 
//                 w-40 
//                 rounded-full 
//                 bg-black 
//                 text-white 
//                 text-sm 
//                 font-medium 
//                 hover:bg-pink-500 
//                 transition
//               "
//             >
//               Know more
//             </a>

//             {/* Achievements */}
//             <Image
//               src={achievementsImg}
//               alt="Achievements"
//               className="
//                 w-[75%] 
//                 sm:w-[60%] 
//                 md:w-[50%] 
//                 lg:w-[45%] 
//                 mt-4 
//                 opacity-95
//               "
//             />
//           </div>
//         </div>

//         {/* COUNTING CARDS SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="
//             grid 
//             grid-cols-2 
//             md:grid-cols-4 
//             gap-4 
//             md:gap-6 
//             mt-4 md:mt-8
//           "
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.06 }}
//               className="
//                 bg-gradient-to-br 
//                 from-pink-50 
//                 to-white 
//                 shadow 
//                 rounded-xl 
//                 py-6 md:py-7 
//                 flex 
//                 flex-col 
//                 items-center 
//                 gap-2 
//                 border 
//                 border-pink-100
//               "
//             >
//               <h3 className="text-3xl md:text-4xl font-extrabold text-pink-500">
//                 {counts[i]}+
//               </h3>
//               <p className="
//                   text-gray-600 
//                   text-xs 
//                   md:text-sm 
//                   text-center 
//                   w-[80%] 
//                   leading-snug
//               ">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
