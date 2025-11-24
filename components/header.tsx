"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          width: "965px",
          height: "67px",
          padding: "11px 16px",
          borderRadius: "49.78px",
          borderWidth: "1.59px",
        }}
        className="
          border border-pink-200/80
          bg-[#F8AFC3]/80
          backdrop-blur-md
          shadow-[0_4px_20px_rgba(255,150,180,0.25)]
          flex items-center justify-between
        "
      >
        {/* LEFT: LOGO */}
        <div
          className="text-white"
          style={{
            fontFamily: '"Patrick Hand", cursive',
            fontWeight: 700,
            fontSize: "30.93px",
            lineHeight: "94%",
            marginTop: "-4px",
          }}
        >
          Neelu T.
        </div>

        {/* ⭐ CENTER NAV — PERFECT ALIGNMENT */}
        <div className="hidden md:flex items-center gap-14">
          {/* ABOUT */}
          <Link href="/about" className="relative group">
            <span className="text-white text-sm cursor-pointer">
              About
            </span>
            <span
              className="
                absolute left-0 right-0 -bottom-1 h-[2px] bg-white
                scale-x-0 group-hover:scale-x-100 
                transition-all duration-300 origin-center
              "
            ></span>
          </Link>

          {/* OUR SERVICES (Hover + Click dropdown) */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            <span className="text-white text-sm flex items-center gap-1">
              Our Services ▾
            </span>

            <span
              className="
                absolute left-0 right-0 -bottom-1 h-[2px] bg-white
                scale-x-0 group-hover:scale-x-100 
                transition-all duration-300 origin-center
              "
            ></span>

            {/* DROPDOWN */}
            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="
                    absolute left-0 mt-3 w-48 bg-white 
                    rounded-xl shadow-lg border border-pink-100 z-50 py-2
                  "
                >
                  <Link
                    href="/services/Relationship Coaching"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    1:1 Relationship Coaching
                  </Link>
                  <Link
                    href="/services/Couples Communication Program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Couples Communication Program
                  </Link>
                  <Link
                    href="/services/Emotional Resilience Sessions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Emotional Resilience Sessions
                  </Link>

                 <Link
                    href="/services/Breakup Recovery Support"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Breakup Recovery Support
                  </Link>


                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CONTACT */}
          <Link href="/contact" className="relative group">
            <span className="text-white text-sm cursor-pointer">
              Contact
            </span>
            <span
              className="
                absolute left-0 right-0 -bottom-1 h-[2px] bg-white
                scale-x-0 group-hover:scale-x-100 
                transition-all duration-300 origin-center
              "
            ></span>
          </Link>
        </div>

        {/* RIGHT PHONE BUTTON */}
        <div className="hidden md:flex items-center bg-white text-pink-600 text-sm font-semibold px-5 py-2 rounded-full shadow">
          📞 206-888-6959
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          aria-label="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur border border-white/50"
        >
          <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* ⭐ MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="
              absolute top-[82px] w-[90%] 
              bg-white mx-auto rounded-2xl shadow-xl p-4 md:hidden
            "
          >
            <Link href="/about">
              <p className="py-2 text-gray-700 hover:text-pink-600">About</p>
            </Link>

            {/* Mobile dropdown */}
            <details className="py-2">
              <summary className="cursor-pointer text-gray-700 hover:text-pink-600">
                Our Services
              </summary>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link href="/services/1:1 Relationship Coaching">
                  <span className="text-gray-600 hover:text-pink-600 text-sm">1:1 Relationship Coaching</span>
                </Link>
                <Link href="/services/Couples Communication Program">
                  <span className="text-gray-600 hover:text-pink-600 text-sm">Couples Communication Program</span>
                </Link>
                <Link href="/services/Emotional Resilience Sessions">
                  <span className="text-gray-600 hover:text-pink-600 text-sm">Emotional Resilience Sessions</span>
                </Link>

                <Link href="/services/Breakup Recovery Support">
                  <span className="text-gray-600 hover:text-pink-600 text-sm">Breakup Recovery Support</span>
                </Link>
              </div>
            </details>

            <Link href="/contact">
              <p className="py-2 text-gray-700 hover:text-pink-600">Contact</p>
            </Link>

            <div className="bg-pink-100 text-pink-700 rounded-full px-4 py-2 text-center mt-2">
              📞 206-888-6959
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
