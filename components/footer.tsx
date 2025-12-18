"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12 },
    }),
  };

  const servicesLinks = [
    { label: "1:1 Relationship Coaching", href: "/services/Relationship-Coaching" },
    { label: "Couples Communication Program", href: "/services/couples-communication" },
    { label: "Emotional Resilience Sessions", href: "/services/emotional-resilience" },
    { label: "Breakup Recovery Support", href: "/services/breakup-recovery" },
    { label: "Trauma Recovery & Emotional Healing", href: "/services/trauma-healing" },
  ];

  return (
    <footer
      className="text-gray-900 px-6 sm:px-8 pt-14 sm:pt-16 pb-10"
      style={{
        background: `linear-gradient(180deg, #D4E8D8 0%, #D4E8D8 30%, #E8F5F0 70%, #FFFFFF 100%)`,
      }}
    >
      {/* Main content */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-1 tracking-tight"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            <span className="text-black">Neelu </span>
            <span className="font-bold text-[#5E936C]">T.</span>
          </h2>
          <p className="text-sm text-gray-700 max-w-md">
            Helping creators grow with clarity, confidence, and community.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Podcast", "Careers", "Blog & News"].map((item) => (
                <motion.li
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  key={item}
                >
                  <a
                    href={item === "About Us" ? "/about" : "#"}
                    className="text-gray-800 hover:text-[#5E936C] transition text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
              Services
            </h3>

            <ul className="space-y-3">
              {servicesLinks.map(({ label, href }) => (
                <motion.li
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  key={href}
                >
                  <a
                    href={href}
                    className="text-gray-800 hover:text-[#5E936C] transition text-sm sm:text-base"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
              Contact info
            </h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ scale: 1.02 }}>
                <a
                  href="tel:+13330000000"
                  className="text-gray-800 hover:text-[#5E936C] transition text-sm sm:text-base"
                >
                  +1 (333) 000-0000
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.02 }}>
                <a
                  href="mailto:hello@neelutaneja.com"
                  className="text-gray-800 hover:text-[#5E936C] transition underline text-sm sm:text-base"
                >
                  hello@neelutaneja.com
                </a>
              </motion.li>
              <li className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Tower-17-002, Orchid Petals, Sohna Road,
                <br />
                Sector 49, Gurugram, Haryana 122018
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom section */}
      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto border-t border-gray-300 pt-6 sm:pt-8
          flex flex-col sm:flex-row gap-3 sm:gap-0
          justify-between items-center text-center sm:text-left
        "
      >
        <p className="text-gray-800 text-xs sm:text-sm">
          <a
            href="https://metamaster.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright © {currentYear} MetaMaster
          </a>
        </p>

        <div className="flex items-center gap-3 sm:gap-4 text-gray-800 text-xs sm:text-sm">
          <motion.a
            whileHover={{ y: -2 }}
            href="/terms"
            className="hover:text-[#5E936C] transition"
          >
            Terms of Use
          </motion.a>
          <span className="text-gray-400">|</span>
          <motion.a
            whileHover={{ y: -2 }}
            href="/privacy"
            className="hover:text-[#5E936C] transition"
          >
            Privacy Policy
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
