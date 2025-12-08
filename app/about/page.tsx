// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// import PhotoCarousel from "@/components/photo-carousel";
// import Mission from "@/components/mission";
// import Approach from "@/components/approach";
// import Author from "@/components/author";
// import Revive from "@/components/Rrevive";
// import Philosophy from "@/components/Philosophy";
// import FinalWords from "@/components/FinalWords";
// import Rebuild from "@/components/rebuild";
// import Footer from "@/components/footer";

// export default function AboutPage() {
//   return (
//     <main className="w-full flex flex-col items-center bg-white overflow-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section
//         className="
//           relative w-full h-[340px] sm:h-[400px]
//           flex items-end justify-center text-center
//           pb-12 sm:pb-16
//         "
//       >
//         <div className="absolute inset-0">
//           <Image
//             src="/about/about-bg.jpg"
//             alt=""
//             fill
//             className="object-cover object-center"
//             priority
//           />
//         </div>

//         <div className="absolute inset-0 bg-[#5E936C]/80 backdrop-blur-[1px]" />

//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative text-white text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-md"
//         >
//           About Us
//         </motion.h1>
//       </section>

//       <PhotoCarousel />
//       <Mission />
//       <Approach />
//       <Author />
//       <Revive />
//       <Philosophy />
//       <FinalWords />

//       {/* ================= SMALLER REBUILD (NO GAP BELOW) ================= */}
//       <div className="w-full mb-0">
//         <Rebuild />
//       </div>

//       {/* ================= SMALLER FOOTER (NO TOP GAP) ================= */}
//       <div className="w-full mt-0">
//         <Footer />
//       </div>

//     </main>
//   );
// }


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import MeetCoach from "@/components/meetcoach";
import PhotoCarousel from "@/components/photo-carousel";
import Mission from "@/components/mission";
import Approach from "@/components/approach";
import Author from "@/components/author";
import Revive from "@/components/Rrevive";
import Philosophy from "@/components/Philosophy";
import FinalWords from "@/components/FinalWords";
import Rebuild from "@/components/rebuild";
import Footer from "@/components/footer";

// ===================== GLOBAL SCROLL ANIMATION WRAPPER =====================
import { PropsWithChildren } from "react";

function AnimateSection({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 12, scale: 0.98 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blurOverlay = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]);

  return (
    <main className="w-full flex flex-col items-center bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="
          relative w-full h-[340px] sm:h-[400px]
          flex items-end justify-center text-center
          pb-12 sm:pb-16
        "
      >

        {/* Parallax Background */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0"
        >
          <Image
            src="/about/about-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Animated Overlay */}
        <motion.div
          style={{ backdropFilter: `blur(${blurOverlay})` }}
          className="absolute inset-0 bg-[#5E936C]/80"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-white text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-md"
        >
          About Us
        </motion.h1>
      </section>

      {/* ================= ANIMATED SECTIONS ================= */}
      <AnimateSection><MeetCoach /></AnimateSection>
      <AnimateSection><PhotoCarousel photos={[]} /></AnimateSection>
      <AnimateSection><Mission /></AnimateSection>
      <AnimateSection><Approach /></AnimateSection>
      <AnimateSection><Author /></AnimateSection>
      <AnimateSection><Revive /></AnimateSection>
      <AnimateSection><Philosophy /></AnimateSection>
      <AnimateSection><FinalWords /></AnimateSection>

      <AnimateSection>
        <div className="w-full mb-0">
          <Rebuild />
        </div>
      </AnimateSection>

      <AnimateSection>
        <div className="w-full mt-0">
          <Footer />
        </div>
      </AnimateSection>

    </main>
  );
}
