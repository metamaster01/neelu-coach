"use client";

import { useEffect } from "react";
import CarouselLayout from "@/components/CarouselLayout";
import CoachingHelp3 from "@/components/CoachingHelp3";
import Discover3 from "@/components/Discover3";
import Footer from "@/components/footer";
import HowItWorks from "@/components/howitworks";
import Investment from "@/components/investment";
import NavigateEmotion from "@/components/navigate-emotion";
import Rebuild from "@/components/rebuild";
import RelationshipSection from "@/components/relationshipsection";
import { Testimonial } from "@/components/ServiceTestimonal";
import WatchStories from "@/components/watchstories";
import WhoCoaching3 from "@/components/WhoConnection3";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EmotionalResilience() {
  /* ---------------------------------------------------------- */
  /* CURSOR HEART PARTICLES */
  /* ---------------------------------------------------------- */
  useEffect(() => {
    const createHeart = (x, y) => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤";
      heart.style.position = "fixed";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.pointerEvents = "none";
      heart.style.transform = "translate(-50%, -50%)";
      heart.style.fontSize = "16px";
      heart.style.color = "#ff4d6d";
      heart.style.opacity = "1";
      heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = "translate(-50%, -80px)";
        heart.style.opacity = "0";
      });

      setTimeout(() => heart.remove(), 1000);
    };

    const moveHandler = (e) => {
      if (window.innerWidth < 768) return; // disable on mobile
      createHeart(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <main className="w-full bg-white overflow-hidden">

      {/* TOP SECTION */}
      <section
        className="w-full h-[140px] sm:h-[260px] lg:h-[140] flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #5E936C, #7ba88cff, #FFFFFF)",
        }}
      ></section>

      {/* HERO SECTION */}
      <section
        className="
          relative w-full
          h-[320px] sm:h-[650px] lg:h-[560px]
          flex items-center justify-center
        "
      >
        <Image
          src="/services/emotionalresilence.png"
          alt="Emotional Resilience"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm opacity-80"
          >
            Home / Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-extrabold mt-6 gap-4 text-white"
          >
            Emotional Resilience Sessions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="max-w-xl mx-auto text-sm sm:text-base mt-3 opacity-40 leading-relaxed"
          >
            Strengthen your inner peace. Reclaim emotional stability.
            Rise above overwhelm with confidence.
          </motion.p>
        </motion.div>
      </section>

      {/* SCROLL SECTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <NavigateEmotion />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <WhoCoaching3 />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Discover3 />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <CoachingHelp3 />
      </motion.div>

      <HowItWorks />

      <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <Testimonial />
      </motion.div>

      <WatchStories />
      <Investment />
      <Rebuild />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <CarouselLayout />
      </motion.div>

      <RelationshipSection />
      <Footer />
    </main>
  );
}
