// "use client";

// import React, { useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import poster from "@/public/poster.png";

// const VIDEO_SRC = "/videos/sample-hero-video.mp4";

// export default function Hero() {
//   const [open, setOpen] = useState(false);

//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 800], [0, -40]);

//   return (
//     <section
//       className="pt-32 pb-20"
//       style={{
//         background:
//           "linear-gradient(180deg, rgba(255,184,212,1) 0%, rgba(255,234,244,1) 35%, #FFFFFF 100%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

//         {/* HEADLINE */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="
//             text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
//             font-extrabold tracking-tight text-gray-900
//           ">
//             Feeling disconnected in your{" "}
//             <span className="text-pink-500">relationship?</span>
//           </h1>

//           <p className="
//             mt-4 max-w-xl mx-auto 
//             text-sm sm:text-base text-gray-600
//           ">
//             Find clarity, heal together, and rediscover love with gentle guidance.
//           </p>

//           {/* CTA BUTTONS */}
//           <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
//             <a
//               href="#book"
//               className="
//                 inline-flex items-center gap-2 
//                 rounded-full bg-black text-white 
//                 px-6 py-3 
//                 text-sm sm:text-base 
//                 shadow hover:scale-[.98] transition
//               "
//             >
//               Book a Free Clarity Call
//             </a>

//             <a
//               href="#learn"
//               className="
//                 inline-flex items-center gap-2 
//                 rounded-full border border-gray-300 
//                 px-5 py-3 
//                 text-sm sm:text-base 
//                 text-gray-700 hover:bg-pink-50 transition
//               "
//             >
//               Learn More
//             </a>
//           </div>
//         </motion.div>

//         {/* TRUST BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.15, duration: 0.4 }}
//           className="mt-6 sm:mt-8 flex justify-center"
//         >
//           <div className="
//             inline-flex items-center gap-2 
//             bg-pink-50/60 border border-pink-100 
//             text-xs sm:text-sm rounded-full 
//             px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm
//           ">
//             <span className="text-yellow-500">★★★★★</span>
//             <span className="text-gray-700">
//               Trusted By 100+ women To Heal Emotional Wounds And Build Unshakable Self-Worth…
//             </span>
//           </div>
//         </motion.div>

//         {/* VIDEO CARD — RESPONSIVE */}
//         <motion.div
//           style={{ y }}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center 
//             mt-20 sm:mt-24 md:mt-28 lg:mt-32"
//         >
//           <div
//             className="
//               relative 
//               w-full max-w-[1100px]
//               h-[260px] sm:h-[360px] md:h-[450px] lg:h-[550px]
//               rounded-3xl 
//               overflow-hidden 
//               border border-pink-200 
//               bg-white 
//               shadow-[0_12px_40px_rgba(255,150,180,0.18)]
//             "
//           >
//             {/* Glow */}
//             <div
//               className="absolute inset-0 pointer-events-none rounded-3xl"
//               style={{
//                 boxShadow: "inset 0 0 80px rgba(255,185,200,0.2)",
//               }}
//             />

//             {/* Poster */}
//             <img
//               src={poster.src}
//               alt="hero poster"
//               className="w-full h-full object-cover object-center"
//             />

//             {/* PLAY BUTTON — RESPONSIVE */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setOpen(true)}
//               className="
//                 absolute left-1/2 top-1/2 
//                 -translate-x-1/2 -translate-y-1/2 
//                 flex items-center justify-center
//                 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
//                 rounded-full 
//                 bg-pink-500 shadow-xl 
//                 border-4 border-white/80
//               "
//             >
//               <svg
//                 className="w-6 h-6 sm:w-8 sm:h-8 text-white"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </motion.button>

//             {/* CAPTION */}
//             <div className="absolute bottom-4 left-4">
//               <div className="
//                 bg-white/90 rounded-full 
//                 px-3 sm:px-4 py-1.5 sm:py-2 
//                 inline-flex items-center gap-2 
//                 text-xs sm:text-sm shadow
//               ">
//                 <span className="font-medium text-pink-600">Watch</span>
//                 <span className="text-gray-600">Stories & highlights</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* VIDEO MODAL — RESPONSIVE */}
//         {open && (
//           <div
//             className="
//               fixed inset-0 z-[999] 
//               flex items-center justify-center 
//               bg-black/60 backdrop-blur-sm 
//               p-4
//             "
//             onClick={() => setOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.25 }}
//               className="
//                 relative w-full 
//                 max-w-[900px] 
//                 h-[55vh] sm:h-[65vh] md:h-[70vh]
//                 bg-black 
//                 rounded-2xl 
//                 overflow-hidden
//               "
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setOpen(false)}
//                 className="
//                   absolute top-3 right-3 
//                   z-50 rounded-full 
//                   bg-white/90 p-2 shadow
//                 "
//               >
//                 ✕
//               </button>

//               <video
//                 autoPlay
//                 controls
//                 playsInline
//                 className="w-full h-full object-cover"
//                 src={VIDEO_SRC}
//               />
//             </motion.div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import poster from "@/public/poster.png";

const VIDEO_SRC = "/videos/sample-hero-video.mp4";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [0, 400], [1, 1.12]);

  return (
    <section
      className="relative overflow-hidden pt-32 pb-20"
      style={{
        background: "linear-gradient(180deg, #FFB8D4, #e7e1e3ff, #FFFFFF)",
      }}
    >

      {/*  Falling Red Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            ❤️ 
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Feeling disconnected in your <span className="text-pink-500">relationship?</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-600">
            Find clarity, heal together, and rediscover love with gentle guidance.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm sm:text-base shadow transition hover:scale-[.98]"
            >
              Book a Free Clarity Call
            </a>

            <a
              href="#learn"
              className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-sm sm:text-base text-gray-700 transition hover:bg-pink-50"
            >
              Learn More
            </a>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 sm:mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-pink-50/60 border border-pink-100 text-xs sm:text-sm rounded-full px-4 py-2 shadow-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-700"> Trusted By 100+ women To Heal Emotional Wounds And Build Unshakable Self-Worth…</span>
          </div>
        </motion.div>

        {/* VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-14 sm:mt-16 md:mt-20"
        >
          <motion.div
            style={{ scale: zoom }}
            className="
              relative w-full max-w-[1100px]
              h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px]
              rounded-3xl overflow-hidden border border-pink-200 
              bg-white shadow-[0_12px_40px_rgba(255,150,180,0.18)]
            "
          >
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{ boxShadow: "inset 0 0 80px rgba(255,185,200,0.28)" }}
            />

            {/* Poster */}
            <img
              src={poster.src}
              alt="hero poster"
              className="w-full h-full object-cover"
            />

            {/* Play button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center rounded-full bg-pink-500 
                shadow-xl border-4 border-white/80
                w-16 h-16 sm:w-20 sm:h-20
              "
            >
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>

            {/* Caption */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 rounded-full px-4 py-2 inline-flex items-center gap-2 text-xs sm:text-sm shadow">
                <span className="font-medium text-pink-600">Watch</span>
                <span className="text-gray-600">Stories & highlights</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* VIDEO MODAL */}
        {open && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[900px] h-[60vh] sm:h-[70vh] bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              {/* ✨ FIXED CLOSE BUTTON (Always Visible) */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute top-4 right-4 
                  z-[9999]
                  w-10 h-10
                  flex items-center justify-center
                  text-black
                  bg-white/95 
                  rounded-full
                  shadow-2xl
                  hover:scale-110 transition
                "
              >
                ✕
              </button>

              {/* Video */}
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
                src={VIDEO_SRC}
              />
            </motion.div>
          </div>
        )}
      </div>

      {/*  Falling Heart Animation CSS */}
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
