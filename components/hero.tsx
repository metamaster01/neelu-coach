
"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import poster from "@/public/poster.png";

const VIDEO_SRC = "/videos/sample-hero-video.mp4";

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [0, 400], [1, 1.12]);

  return (
    <section
      className="relative overflow-hidden  pt-38 pb-20"
      style={{
        background: "linear-gradient(180deg, #5E936C, #FFFFFF, #FFFFFF)",
      }}
    >
      {/*  Falling Red Hearts */}
      <div className="absolute inset-0  overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="falling-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 5}s`,
              fontSize: `${18 + Math.random() * 14}px`,
            }}
          >
            💚
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

       
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-[22px] sm:text-[40px] md:text-[52px] lg:text-[52px] font-bold text-black leading-tight text-center">
  Feeling disconnected, overwhelmed, or emotionally exhausted in{" "}
  <span className="text-[#4A6F4F] relative inline-block">
    your
    </span>
  <span className="text-[#4A6F4F] relative inline-block">
    relationship?
    <span className="absolute -right-10 top-4 scale-[0.9]">
      <svg width="42" height="42" viewBox="0 0 60 60" fill="none">
        <path d="M5 15C20 10 35 10 55 5" stroke="#4A6F4F" strokeWidth="6" strokeLinecap="round"/>
        <path d="M5 30C22 27 38 26 55 22" stroke="#4A6F4F" strokeWidth="6" strokeLinecap="round"/>
        <path d="M5 45C23 42 39 40 55 35" stroke="#4A6F4F" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    </span>
  </span>
</h1>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-600">
            You’re not broken — you just need healing, clarity & support.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm sm:text-base shadow hover:scale-[.98] hover:bg-green-400 transition"
            >
              Book a Free Clarity Call
            </a>
            <a
              href="#learn"
              className="inline-flex items-center rounded-full border bg-gray-100 border-gray-300 px-5 py-3 text-sm sm:text-base text-black-500 hover:bg-green-400 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100/80 border border-green-100 text-xs sm:text-sm rounded-full px-4 py-2 shadow-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-700">
              Trusted By 100+ women To Heal Emotional Wounds And Build Confidence…
            </span>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <motion.div
            style={{ scale: zoom }}
            className="
              relative w-full max-w-[1100px]
              h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px]
              rounded-2xl overflow-hidden border border-green-200 bg-white
              shadow-[0_12px_40px_rgba(94,147,108,0.28)] 
            "
          >

            {/* Glow */}
            <div
              className="absolute inset-0  rounded-3xl"
              style={{
                boxShadow: "inset 0 0 80px rgba(144, 224, 151, 0.28)",
              }}
            />

            {/*  POSTER */}
            {!playing && (
              <>
                <img
                  src={poster.src}
                  alt="hero poster"
                  className="w-full h-full object-cover"
                />

                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPlaying(true)}
                  className="
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-16 h-16 sm:w-20 sm:h-20
                    flex items-center justify-center rounded-full 
                    bg-green-500 border-4 border-white/80 shadow-xl 
                  "
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </>
            )}

            
            {playing && (
              <>
                {/* Close inside frame */}
                <button
                  onClick={() => setPlaying(false)}
                  className="
                    absolute top-4 right-4 z-50 w-10 h-10 
                    bg-white/95 text-black rounded-full shadow-2xl 
                    flex items-center justify-center hover:scale-110 transition
                  "
                >
                  ✕
                </button>

                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={VIDEO_SRC} type="video/mp4" />
                </video>
              </>
            )}
          </motion.div>
        </motion.div>

      </div>

      {/*  Falling Heart Animation */}
      <style>{`
        @keyframes fallHearts {
          0% { transform: translateY(-50px) scale(0.7); opacity: 0; }
          40% { opacity: 0.9; }
          100% { transform: translateY(120vh) scale(1.3); opacity: 0; }
        }
        .falling-heart {
          position: absolute;
          top: -40px;
          animation: fallHearts linear infinite;
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
}














































// "use client";

// import React, { useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import poster from "@/public/poster.png";

// const VIDEO_SRC = "/videos/sample-hero-video.mp4";

// export default function Hero() {
//   const [playing, setPlaying] = useState(false);

//   const { scrollY } = useScroll();
//   const zoom = useTransform(scrollY, [0, 400], [1, 1.12]);

//   return (
//     <section
//       className="relative overflow-hidden pt-32 pb-20"
//       style={{
//         background: "linear-gradient(180deg, #FFB8D4, #f8f5f6ff, #FFFFFF)",
//       }}
//     >
//       {/* ❤️ Falling Hearts Background */}
//       {/* <div className="absolute inset-0  pointer-events-auto overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="falling-heart"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 4}s`,
//               animationDuration: `${4 + Math.random() * 5}s`,
//               fontSize: `${18 + Math.random() * 14}px`,
//             }}
//           >
//             ❤️
//           </div>
//         ))}
//       </div> */}

//       {/* CONTENT AREA—NOW CLICKABLE */}
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 ">

//         {/* HEADLINE */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
//             Feeling disconnected in your{" "}
//             <span className="text-pink-500">relationship?</span>
//           </h1>

//           <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-600">
//             Find clarity, heal together, and rediscover love with gentle guidance.
//           </p>

//           <div className="mt-6 flex flex-wrap justify-center gap-4  ">
//             <a
//               href="#book"
//               className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm sm:text-base shadow hover:bg-pink-400 transition"
//             >
//               Book a Free Clarity Call
//             </a>
//             <a
//               href="#learn"
//               className="inline-flex items-center rounded-full border bg-gray-100 border-gray-300 px-5 py-3 text-sm sm:text-base text-black hover:bg-pink-400 transition"
//             >
//               Learn More
//             </a>
//           </div>
//         </motion.div>

//         {/* TRUST BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="mt-8 flex justify-center"
//         >
//           <div className="inline-flex items-center gap-2 bg-pink-50/60 border border-pink-100 text-xs sm:text-sm rounded-full px-4 py-2 shadow-sm ">
//             <span className="text-yellow-500">★★★★★</span>
//             <span className="text-gray-700">
//               Trusted By 100+ women To Heal Emotional Wounds And Build Confidence…
//             </span>
//           </div>
//         </motion.div>

//         {/* VIDEO FRAME */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="flex justify-center mt-16 md:mt-20"
//         >
//           <motion.div
//             style={{ scale: zoom }}
//             className="relative w-full max-w-[1100px] h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px]
//               rounded-2xl overflow-hidden border border-pink-200 bg-white
//               shadow-[0_12px_40px_rgba(255,150,180,0.18)] pointer-events-auto"
//           >
//             {!playing && (
//               <>
//                 <img src={poster.src} alt="hero poster" className="w-full h-full object-cover" />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setPlaying(true)}
//                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//                   w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full 
//                   bg-pink-500 border-4 border-white/80 shadow-xl"
//                 >
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </motion.button>
//               </>
//             )}

//             {playing && (
//               <>
//                 <button
//                   onClick={() => setPlaying(false)}
//                   className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/95 text-black rounded-full shadow-2xl
//                   flex items-center justify-center hover:scale-110 transition"
//                 >
//                   ✕
//                 </button>

//                 <video autoPlay controls className="w-full h-full object-cover">
//                   <source src={VIDEO_SRC} type="video/mp4" />
//                 </video>
//               </>
//             )}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* HEART ANIMATION CSS */}
//       <style>{`
//         @keyframes fallHearts {
//           0% { transform: translateY(-50px) scale(0.7); opacity: 0; }
//           40% { opacity: 0.9; }
//           100% { transform: translateY(120vh) scale(1.3); opacity: 0; }
//         }
//         .falling-heart {
//           position: absolute;
//           top: -40px;
//           animation: fallHearts linear infinite;
//           opacity: 0.9;
//         }
//       `}</style>
//     </section>
//   );
// }
