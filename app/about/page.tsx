"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import  PhotoCarousel from "@/components/photo-carousel";
import Mission from "@/components/mission";
import Approach from "@/components/approach";
import Author from "@/components/author";
import Revive from "@/components/Rrevive";
import Philosophy from "@/components/Philosophy";
import FinalWords from "@/components/FinalWords";
import Footer from "@/components/footer";
import Rebuild from "@/components/rebuild";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col items-center bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="
  relative w-full h-[340px] sm:h-[400px] 
  flex items-end justify-center text-center
  pb-12 sm:pb-16
">


        {/* bg image of about */}
        <div className="absolute inset-0">
          <Image
            src="/about/about-bg.jpg" 
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* GREEN oberlay in about */}
        <div className="absolute inset-0 bg-[#5E936C]/80 backdrop-blur-[1px]" />

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-white text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-md"
        >
          About Us
        </motion.h1>
        
      </section>

< PhotoCarousel/>
  <Mission/>   
  <Approach/>
    <Author/> 
    <Revive/> 
    <Philosophy/>
    <FinalWords/>
    
    </main>
  );
}
