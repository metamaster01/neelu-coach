// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { useSwipeable } from "react-swipeable";
// import { title } from "process";

// function WaveBlob() {
//   return (
//     <mesh>
//       <sphereGeometry args={[3, 64, 64]} />
//       <meshStandardMaterial
//         color="#ff0095"
//         wireframe
//         opacity={0.15}
//         transparent
//       />
//     </mesh>
//   );
// }

// function getYouTubeId(url: string) {
//   try {
//     const u = new URL(url);
//     if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
//     return u.searchParams.get("v") || "";
//   } catch {
//     return "";
//   }
// }

// export default function Podcast() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [arrow, setArrow] = useState<"left" | "right" | null>(null);

//   const autoRef = useRef<NodeJS.Timeout | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   useEffect(() => {
//     setIsPlaying(false);
//   }, [currentIndex]);

//   const episodes = [
//     {
//       id: 1,
//       status: "Latest Episode",
//       title: "Neelu Taneja Podcast ft. Adnan | Life, Success & Motivation",
//       description:
//         "A powerful conversation on mindset, growth, confidence, and handling failures with strength.",
//       youtubeUrl: "https://youtu.be/niLCEfGc1AU",
//     },
//     {
//       id: 2,
//       status: "Popular Episode",
//       title: "Broken Marriages, Love & Life Lessons | Raza Murad Exclusive",
//       description:
//         "Raza Murad shares real insights on love, trust, commitment, and healing relationships.",
//       youtubeUrl: "https://youtu.be/lQiWOC9J8yE",
//     },
//     {
//       id: 3,
//       status: "Featured Episode",
//       title: "Apara Mehta x Neelu Taneja | Healing, Strength & Womanhood",
//       description:
//         "An inspiring talk on emotional healing, self-worth, and navigating relationships with grace.",
//       youtubeUrl: "https://youtu.be/PpjtJGMO8s8",
//     },
//     {
//       id: 4,
//       status: "New Episode",
//       title:
//         "Overcoming Relationship Challenges | Neelu Taneja & Hiten Tejwani",
//       description:
//         "How healing and NLP tools can help break toxic patterns and rebuild stronger bonds.",
//       youtubeUrl: "https://youtu.be/IWlJjFmqFhw",
//     },
//   ];

//   const handlePrev = () => {
//     setArrow("left");
//     setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
//   };

//   const handleNext = () => {
//     setArrow("right");
//     setCurrentIndex((prev) => (prev + 1) % episodes.length);
//   };

//   // ---------------------- AUTO SLIDING EVERY 5 SECONDS ----------------------
// useEffect(() => {
//   // if user is playing a video, don’t auto-slide
//   if (isPlaying) {
//     if (autoRef.current) clearInterval(autoRef.current)
//     return
//   }

//   autoRef.current = setInterval(() => {
//     handleNext()
//   }, 7500)

//   return () => {
//     if (autoRef.current) clearInterval(autoRef.current)
//   }
// }, [isPlaying])


//   // ---------------------- SWIPE SUPPORT ----------------------
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//     trackTouch: true,
//     trackMouse: true,
//   });

//   const episode = episodes[currentIndex];
  

//   return (
//     <div className="relative w-full bg-white px-6 py-16 overflow-hidden">
//       {/* ---------------------- 3D ANIMATED BACKGROUND ---------------------- */}
//       <div className="absolute inset-0 -z-10 opacity-40 blur-xl">
//         <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
//           <ambientLight intensity={0.7} />
//           <pointLight position={[10, 10, 10]} intensity={1} />
//           <WaveBlob />

//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
//         </Canvas>
//       </div>

//       <div className="mx-auto max-w-6xl" {...swipeHandlers}>
//         {/* ---------------------- HEADER ---------------------- */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-10 flex items-start justify-between"
//         >
//           <div>
//             <h1 className="mb-3 text-4xl font-bold text-black">
//               Podcast with Neelu Taneja
//             </h1>
//             <p className="text-gray-600">
//               Real stories. Real emotions. Real healing.
//             </p>
//           </div>

//           <div className="flex gap-2">
//             <button
//               onClick={handlePrev}
//               className={`rounded-full border-2 p-2 transition ${
//                 arrow === "left"
//                   ? "border-green-400 text-green-600"
//                   : "border-gray-300 text-gray-400"
//               }`}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={handleNext}
//               className={`rounded-full border-2 p-2 transition ${
//                 arrow === "right"
//                   ? "border-green-400 text-green-600"
//                   : "border-gray-300 text-gray-400"
//               }`}
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </motion.div>

//         {/* ---------------------- CARD WITH ANIMATION ---------------------- */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 0.95, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: -20 }}
//             transition={{ duration: 0.6 }}
//             className="mb-12 rounded-2xl bg-gray-50/80 p-14 shadow-xl backdrop-blur-xl"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//               {/* LEFT CONTENT */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col justify-between"
//               >
//                 <div>
//                   <span className="inline-block bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-sm font-semibold text-transparent">
//                     {episode.status}
//                   </span>
//                   <h2 className="mt-3 text-3xl font-bold text-black">
//                     {episode.title}
//                   </h2>
//                   <p className="mt-4 text-gray-600">{episode.description}</p>
//                 </div>

//                 <div className="flex gap-4 pt-6">
//                   <button
//                     onClick={() => setIsPlaying(true)}
//                     className="rounded-full bg-green-500 px-6 py-2 font-semibold text-white hover:bg-green-600"
//                   >
//                     Listen now
//                   </button>

//                   <a
//                     href={episode.youtubeUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="rounded-full border-2 border-gray-300 px-6 py-2 font-semibold text-gray-800 hover:bg-gray-200 inline-flex items-center justify-center"
//                   >
//                     Watch on YouTube
//                   </a>
//                 </div>
//               </motion.div>
//               {/* RIGHT IMAGE */}
              
//               <motion.div
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative flex items-center justify-center"
//               >
//                 {(() => {
//                   const videoId = getYouTubeId(episode.youtubeUrl);
//                   const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

//                   return (
//                     <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
//                       {!isPlaying ? (
//                         <>
//                           <img
//                             src={thumb}
//                             alt={episode.title}
//                             className="w-full h-full object-cover"
//                           />
//                           <button
//                             onClick={() => setIsPlaying(true)}
//                             className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition"
//                             aria-label="Play episode"
//                           >
//                             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
//                               <Play size={28} className="ml-1 text-gray-800" />
//                             </div>
//                           </button>
//                         </>
//                       ) : (
//                         <iframe
//                           className="w-full h-full"
//                           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
//                           title={episode.title}
//                           allow="autoplay; encrypted-media; picture-in-picture"
//                           allowFullScreen
//                         />
//                       )}
//                     </div>
//                   );
//                 })()}
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <motion.a
//           href="https://www.youtube.com/@coach_neelutaneja"
//           target="_blank"
//           rel="noreferrer"
//           whileHover={{ scale: 1.05 }}
//           className="inline-block rounded-full bg-black px-10 py-3 font-semibold text-white hover:bg-gray-800"
//         >
//           Listen to More Episodes
//         </motion.a>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { title } from "process";

function WaveBlob() {
  return (
    <mesh>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial
        color="#ff0095"
        wireframe
        opacity={0.15}
        transparent
      />
    </mesh>
  );
}

function getYouTubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
    return u.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

export default function Podcast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrow, setArrow] = useState<"left" | "right" | null>(null);

  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  const episodes = [
    {
      id: 1,
      status: "Latest Episode",
      title: "Neelu Taneja Podcast ft. Adnan | Life, Success & Motivation",
      description:
        "A powerful conversation on mindset, growth, confidence, and handling failures with strength.",
      youtubeUrl: "https://youtu.be/niLCEfGc1AU",
    },
    {
      id: 2,
      status: "Popular Episode",
      title: "Broken Marriages, Love & Life Lessons | Raza Murad Exclusive",
      description:
        "Raza Murad shares real insights on love, trust, commitment, and healing relationships.",
      youtubeUrl: "https://youtu.be/lQiWOC9J8yE",
    },
    {
      id: 3,
      status: "Featured Episode",
      title: "Apara Mehta x Neelu Taneja | Healing, Strength & Womanhood",
      description:
        "An inspiring talk on emotional healing, self-worth, and navigating relationships with grace.",
      youtubeUrl: "https://youtu.be/PpjtJGMO8s8",
    },
    {
      id: 4,
      status: "New Episode",
      title:
        "Overcoming Relationship Challenges | Neelu Taneja & Hiten Tejwani",
      description:
        "How healing and NLP tools can help break toxic patterns and rebuild stronger bonds.",
      youtubeUrl: "https://youtu.be/IWlJjFmqFhw",
    },
  ];

  const handlePrev = () => {
    setArrow("left");
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  const handleNext = () => {
    setArrow("right");
    setCurrentIndex((prev) => (prev + 1) % episodes.length);
  };

  // ---------------------- AUTO SLIDING EVERY 5 SECONDS ----------------------
useEffect(() => {
  // if user is playing a video, don’t auto-slide
  if (isPlaying) {
    if (autoRef.current) clearInterval(autoRef.current)
    return
  }

  autoRef.current = setInterval(() => {
    handleNext()
  }, 7500)

  return () => {
    if (autoRef.current) clearInterval(autoRef.current)
  }
}, [isPlaying])


  // ---------------------- SWIPE SUPPORT ----------------------
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true,
    trackMouse: true,
  });

  const episode = episodes[currentIndex];

  return (
  <div className="relative w-full bg-white px-6 py-20 overflow-hidden">
    {/* BACKGROUND */}
    <div className="absolute inset-0 -z-10 opacity-30 blur-2xl">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <WaveBlob />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>

    <div className="mx-auto max-w-6xl" {...swipeHandlers}>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Podcast with Neelu Taneja
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Real stories. Real emotions. Real healing.
        </p>
      </motion.div>

      {/* CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            relative rounded-3xl
            bg-white/70 backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            p-8 md:p-12
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* VIDEO SIDE (PRIMARY) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {(() => {
                const videoId = getYouTubeId(episode.youtubeUrl);
                const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                return (
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    {!isPlaying ? (
                      <>
                        <img
                          src={thumb}
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="
                            absolute inset-0 flex items-center justify-center
                            bg-black/30 hover:bg-black/40 transition
                          "
                        >
                          <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8 }}
                            className="h-20 w-20 rounded-full bg-white flex items-center justify-center"
                          >
                            <Play size={34} className="ml-1 text-black" />
                          </motion.div>
                        </button>
                      </>
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                );
              })()}
            </motion.div>

            {/* TEXT SIDE (SECONDARY) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-3 text-sm font-semibold text-green-600">
                {episode.status}
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {episode.title}
              </h2>

              <p className="mt-3 text-gray-600 text-sm md:text-base">
                {episode.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="rounded-full bg-green-500 px-6 py-2 text-white font-semibold hover:bg-green-600"
                >
                  Listen now
                </button>

                <a
                  href={episode.youtubeUrl}
                  target="_blank"
                  className="rounded-full border border-gray-300 px-6 py-2 font-semibold text-gray-800 hover:bg-gray-100"
                >
                  Watch on YouTube
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button onClick={handlePrev} className="rounded-full border p-2">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="rounded-full border p-2">
          <ChevronRight />
        </button>
      </div>

      {/* CTA */}
      <motion.a
        href="https://www.youtube.com/@coach_neelutaneja"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="mt-10 inline-block rounded-full bg-black px-10 py-3 text-white font-semibold"
      >
        Listen to More Episodes
      </motion.a>
    </div>
  </div>
);
}