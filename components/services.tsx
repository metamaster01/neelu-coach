"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      href: "/services/Relationship-Coaching", 
    },
    {
      title: "Couples Communication Program",
      desc: "A guided journey for couples to move from arguments to understanding. Learn how to truly listen, express, and reconnect through conversation frameworks.",
      button: "Learn More",
      bg: chatBG,
      href: "/services/couples-communication", 
    },
    {
      title: "Emotional Resilience Sessions",
      desc: "For individuals navigating emotional overwhelm or self-doubt — these sessions focus on grounding, confidence, and mindful responses.",
      button: "Learn More",
      bg: shieldBG,
      href: "/services/emotional-resilience", 
    },
    {
      title: "Breakup & Healing Guidance",
      desc: "Move through heartbreak with clarity and strength. Release emotional pain, rebuild self-worth, and step into a grounded new chapter.",
      button: "Learn More",
      bg: healBG,
      href: "/services/breakup-recovery", 
    },
    {
      title: "Trauma Recovery & Emotional Healing",
      desc: "Heal from past emotional wounds and limiting patterns. A safe space to process experiences, release pain, and rebuild emotional strength.",
      button: "Learn More",
      bg: traumaBG,
      href: "/services/trauma-healing", 
    },
  ];

  const [index, setIndex] = useState(0);
  const cardWidth = 350;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div className="w-full max-w-[1440px] flex flex-col">
        {/* <div
  className="
    overflow-hidden mt-12 mx-auto
    w-[875px]
    max-w-full
    sm:w-[875px]
    md:w-[875px]
    lg:w-[875px]
  "
> */}
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
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
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mt-5 text-[15.5px]"
        >
          Wherever you are on your relationship journey — these sessions help you move forward
          with clarity and emotional strength.
        </motion.p>

        {/* STEPWISE CAROUSEL */}
        <div className="overflow-hidden mt-12 w-[1114px] max-w-full mx-auto">

           {/* <div className="overflow-hidden mt-12 mx-auto w-[875px] max-w-full"> */}

          <motion.div
            animate={{ x: -(index * (cardWidth + 32)) }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex gap-8"
          >
            {[...services, ...services].map((s, i) => (
              <motion.div
                key={i}
                className="min-w-[350px] relative p-7 bg-[#F8F8F8] border border-green-100 rounded-3xl text-black
                shadow-sm overflow-hidden hover:shadow-[0_8px_35px_rgba(143,237,136,0.35)]
                hover:bg-[#6d9d7aff] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={s.bg}
                  alt=""
                  className="absolute bottom-0 right-0 w-[140px] opacity-40 select-none pointer-events-none"
                />

                <h3 className="text-[20px] font-semibold mb-2">{s.title}</h3>
                <p className="text-[14px] leading-relaxed">{s.desc}</p>

                {/* ✅ Route to specific service page */}
                <Link href={s.href} className="inline-block">
                  <button className="mt-5 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-green-200 hover:text-green-700 transition-all">
                    {s.button}
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
