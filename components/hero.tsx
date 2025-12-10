// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const YT_VIDEO_ID = "0T54OWG7Ds8"; 
// const POSTER = `https://img.youtube.com/vi/${YT_VIDEO_ID}/maxresdefault.jpg`;

// export default function Hero() {
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef<HTMLIFrameElement | null>(null);

//   const { scrollY } = useScroll();
//   const zoom = useTransform(scrollY, [0, 400], [1, 1.12]);

//   const pauseVideo = () => {
//     videoRef.current?.contentWindow?.postMessage(
//       JSON.stringify({ event: "command", func: "pauseVideo" }),
//       "*"
//     );
//   };

//   return (
//     <section
//       className="relative overflow-hidden pt-38 pb-20"
//       style={{ background: "linear-gradient(180deg, #5E936C, #FFFFFF, #FFFFFF)" }}
//     >
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="text-[22px] sm:text-[40px] md:text-[54px] lg:text-[52px] font-bold text-black leading-tight">
//             Feeling disconnected, overwhelmed, or emotionally exhausted in{" "}
//             <span className="text-[#4A6F4F]">your</span>{" "}
//             <span className="text-[#4A6F4F]">relationship?</span>
//           </h1>

//           <p className="mt-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
//             You’re not broken — you just need healing, clarity & support.
//           </p>

//           <div className="mt-6 flex flex-wrap justify-center gap-4">
//             <a className="rounded-full bg-black text-white px-6 py-3 shadow text-sm sm:text-base hover:bg-green-400 transition">
//               Book a Free Clarity Call
//             </a>
//             <a className="rounded-full border bg-gray-100 border-gray-300 px-5 py-3 text-sm sm:text-base hover:bg-green-400 transition">
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
//           <div className="inline-flex items-center gap-2 bg-green-100/80 border border-green-100 text-xs sm:text-sm rounded-full px-4 py-2 shadow-sm">
//             <span className="text-yellow-500">★★★★★</span>
//             <span className="text-gray-700">
//               Trusted By 100+ women To Heal Emotional Wounds And Build Confidence…
//             </span>
//           </div>
//         </motion.div>

//         {/* Video box  */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="flex justify-center mt-16 md:mt-20"
//         >
//           <motion.div
//             style={{ scale: zoom }}
//             className="relative w-full max-w-[1100px] h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px] rounded-2xl overflow-hidden border border-green-200 bg-white shadow-[0_12px_40px_rgba(94,147,108,0.28)]"
//           >

//             {!playing && (
//               <>
//                 {/* POSTER */}
//                 <img
//                   src={POSTER}
//                   alt="Video Poster"
//                   className="w-full h-full object-cover"
//                 />

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => setPlaying(true)}
//                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-500 border-4 border-white rounded-full shadow-xl flex items-center justify-center"
//                 >
//                   <svg className="w-8 h-8 text-white" fill="currentColor">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </motion.button>
//               </>
//             )}

//             {playing && (
//               <>
//                 {/* CLOSE BUTTON */}
//                 <button
//                   onClick={() => { pauseVideo(); setPlaying(false); }}
//                   className="absolute top-4 right-4 z-50 w-10 h-10 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition"
//                 >
//                   ✕
//                 </button>

//                 {/* PAUSE BUTTON
//                 <button
//                   onClick={pauseVideo}
//                   className="absolute top-4 left-4 z-50 w-10 h-10 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition flex items-center justify-center"
//                 >
//                   ⏸
//                 </button> */}

//                 {/* YOUTUBE iframe embedded */}
//                 <iframe
//                   ref={videoRef}
//                   src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?autoplay=1&enablejsapi=1&controls=1`}
//                   allow="autoplay; encrypted-media"
//                   className="w-full h-full object-cover"
//                 ></iframe>
//               </>
//             )}
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }






"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const YT_VIDEO_ID = "0T54OWG7Ds8";
const POSTER = `https://img.youtube.com/vi/${YT_VIDEO_ID}/maxresdefault.jpg`;

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [0, 400], [1, 1.12]);

  const pauseVideo = () => {
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo" }),
      "*"
    );
  };

  return (
    <section
      className="relative overflow-hidden pt-38 pb-20"
      style={{ background: "linear-gradient(180deg, #5E936C, #FFFFFF, #FFFFFF)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-[22px] sm:text-[40px] md:text-[54px] lg:text-[52px] font-bold text-black leading-tight">
            Feeling disconnected, overwhelmed, or emotionally exhausted in{" "}
            <span className="text-[#4A6F4F]">your</span>{" "}
            <span className="text-[#4A6F4F]">relationship?</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
            You’re not broken — you just need healing, clarity & support.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="rounded-full bg-black text-white px-6 py-3 shadow text-sm sm:text-base hover:bg-green-400 transition">
              Book a Free Clarity Call
            </a>
            <a className="rounded-full border bg-gray-100 border-gray-300 px-5 py-3 text-sm sm:text-base hover:bg-green-400 transition">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* TRUST BADGE */}
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

        {/* Video box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <motion.div
            style={{ scale: zoom }}
            className="relative w-full max-w-[1100px] h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px] rounded-2xl overflow-hidden border border-green-200 bg-white shadow-[0_12px_40px_rgba(94,147,108,0.28)]"
          >
            {!playing && (
              <>
                {/* POSTER */}
                <img
                  src={POSTER}
                  alt="Video Poster"
                  className="w-full h-full object-cover"
                />

                {/* PERFECT PLAY BUTTON */}
                <motion.button
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                    rounded-full flex items-center justify-center
                    bg-white/20 backdrop-blur-md
                    border border-white/70
                    shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                  "
                >
                  {/* soft pulse ring */}
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full border-2 border-white/60"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  />

                  {/* play triangle */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white drop-shadow"
                    fill="currentColor"
                  >
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                </motion.button>
              </>
            )}

            {playing && (
              <>
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => {
                    pauseVideo();
                    setPlaying(false);
                  }}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition"
                >
                  ✕
                </button>

                {/* YOUTUBE iframe embedded */}
                <iframe
                  ref={videoRef}
                  src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?autoplay=1&enablejsapi=1&controls=1`}
                  allow="autoplay; encrypted-media"
                  className="w-full h-full object-cover"
                ></iframe>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


































