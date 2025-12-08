
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-99999 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          w-full max-w-6xl 
          border border-green-100/80 bg-[#5E936C]/40 
          backdrop-blur-md shadow-[0_4px_20px_rgba(94,147,108,0.25)]
          rounded-full px-5 py-3 flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="text-white"
          style={{
            fontFamily: '"Patrick Hand", cursive',
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "94%",
          }}
        >
          Neelu T.
        </Link>

        
        <div className="hidden md:flex items-center gap-10">
          {/* about */}
          <Link href="/about" className="relative group text-white text-sm">
            About
            <span
              className="
                absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-white w-0
                group-hover:w-full transition-all duration-300
              "
            ></span>
          </Link>

          {/* SERVICES */}
          <div
            className="relative group"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <span className="text-white text-sm flex items-center gap-1 cursor-pointer">
              Our Services ▾
            </span>

            <span
              className="
                absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-white w-0
                group-hover:w-full transition-all duration-300
              "
            ></span>

            <AnimatePresence>
  {serviceOpen && (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-3 w-56 bg-white text-green-700 rounded-xl shadow-xl border border-green-100 z-[99999] py-2"
    >
      {[
        { title: "1:1 Relationship Coaching", link: "/services/Relationship-Coaching" },
        { title: "Couples Communication Program", link: "/services/couples-communication" },
        { title: "Emotional Resilience Sessions", link: "/services/emotional-resilience" },
        { title: "Breakup Recovery Support", link: "/services/breakup-recovery" },
        { title: "Trauma Recovery & Emotional Healing", link: "/services/trauma-healing" },
      ].map((service, i) => (
        <Link
          key={i}
          href={service.link}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
          onClick={() => setServiceOpen(false)}
        >
          {service.title}
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>

          </div>

          {/* contact */}
          <Link href="/contact" className="relative group text-white text-sm">
            Contact
            <span
              className="
                absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-white w-0
                group-hover:w-full transition-all duration-300
              "
            ></span>
          </Link>
        </div>

        
        <a
          href="tel:2068886959"
          className="hidden md:flex items-center bg-white text-green-700 text-sm font-semibold px-5 py-2 rounded-full shadow"
        >
          📞 206-888-6959
        </a>

        {/* MOBILE BURGER MENU */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/80 border border-white/30"
        >
          <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24">
            {menuOpen ? (
              <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="
              absolute top-[80px] w-[92%] bg-white rounded-2xl shadow-xl p-5 md:hidden
            "
          >
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <p className="py-2 text-gray-700 hover:text-green-600">About</p>
            </Link>

            {/* <details>
              <summary className="py-2 text-gray-700 hover:text-green-600 cursor-pointer">
                Our Services
              </summary>
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {[
                  "1:1 Relationship Coaching",
                  "Couples Communication Program",
                  "Emotional Resilience Sessions",
                  "Breakup Recovery Support",
                  "Trauma Recovery & Emotional Healing",
                ].map((item, i) => (
                  <p key={i} className="text-sm text-gray-600 hover:text-green-600">
                    {item}
                  </p>
                ))}
              </div>
            </details> */}



            <details>
  <summary className="py-2 text-gray-700 hover:text-green-600 cursor-pointer">
    Our Services
  </summary>

  <div className="mt-2 ml-4 flex flex-col gap-2">
    {[
      { title: "1:1 Relationship Coaching", link: "/services/Relationship-Coaching" },
      { title: "Couples Communication Program", link: "/services/couples-communication" },
      { title: "Emotional Resilience Sessions", link: "/services/emotional-resilience" },
      { title: "Breakup Recovery Support", link: "/services/breakup-recovery" },
      { title: "Trauma Recovery & Emotional Healing", link: "/services/trauma-healing" },
    ].map((s, i) => (
      <Link
        key={i}
        href={s.link}
        onClick={() => setMenuOpen(false)}
        className="text-sm text-gray-600 hover:text-green-600 transition"
      >
        {s.title}
      </Link>
    ))}
  </div>
</details>


            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <p className="py-2 text-gray-700 hover:text-green-600">Contact</p>
            </Link>

            <a
              href="tel:2068886959"
              className="bg-green-100 text-green-700 rounded-full px-4 py-2 mt-2 block text-center font-semibold"
            >
              📞 206-888-6959
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
