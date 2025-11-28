"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Podcast } from "lucide-react"
import { motion } from "framer-motion"

export default function Investment() {
  return (
    <section className="bg-[#faf6f3] py-16 px-4 md:px-8 overflow-hidden relative">

      {/* BACKGROUND WAVES */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #ffdad5, transparent 60%)",
            "radial-gradient(circle at 80% 60%, #ffd2e8, transparent 60%)",
            "radial-gradient(circle at 50% 40%, #ffe5d0, transparent 60%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400/40 select-none"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              fontSize: Math.random() * 18 + 12 + "px"
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 8, -8, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* SOFT COUPLE SILHOUETTE SHADOW */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-[600px] h-[350px] -z-10 opacity-20 bg-[url('/couple-silhouette.png')] bg-contain bg-no-repeat bg-center blur-xl" />

      {/* AMBIENT ROMANTIC PULSE */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-rose-300 rounded-full blur-[150px] top-10 left-1/2 -translate-x-1/2 -z-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* SECTION FADE-IN */}
      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0.6 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
  {"Your Investment in Growth"
    .split(" ")
    .map((word, i) => (
      <motion.span
        key={i}
        className="inline-block mr-2"  
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15 }}
      >
        {word}
      </motion.span>
    ))
  }
</motion.h2>

            <motion.div
              className="mx-auto w-32 h-1 bg-rose-300 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-muted-foreground max-w-2xl mx-auto mt-4"
            >
              Every journey begins with one intentional step. Choose the program that best fits your goals — whether it’s rebuilding connection, improving communication, or healing within.
            </motion.p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

            {/* IMAGE WITH HEART EXPLOSION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full md:w-1/2"
            >
              <motion.div
                style={{ perspective: 1000 }}
                whileHover={{ rotateY: 6, rotateX: -3, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="rounded-2xl overflow-hidden relative group"
              >
                {/* HEART EXPLOSION */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-rose-500/70 opacity-0 pointer-events-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      fontSize: 10 + Math.random() * 14 + "px"
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 200],
                      y: [0, (Math.random() - 0.5) * 200],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    ♥
                  </motion.div>
                ))}

                {/* FLARE */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.3, repeat: Infinity, repeatDelay: 2 }}
                />

                <Image
                  src="/investment.png"
                  alt="Happy couple embracing"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                1:1 Relationship Coaching
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                When love feels distant, we reconnect the emotional threads that matter.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#f0e6df] rounded-full flex items-center justify-center">
                  <Podcast className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-muted-foreground">4-week package</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weekly 1:1 coaching calls (60 min)</li>
                  <li>• Personalized emotional blueprint</li>
                  <li>• Tools for communication & trust rebuilding</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Investment:</h4>
                <p className="text-2xl font-semibold text-foreground">₹12,000 / month</p>
              </div>

              {/* CTA WITH HANDWRITTEN LOVE STROKES */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.06 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                {/* LOVE STROKES */}
                <motion.div
                  className="absolute -top-5 -left-6 text-rose-400/50 text-xl select-none"
                  animate={{ rotate: [-6, 6, -6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✦
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -right-6 text-rose-400/50 text-xl select-none"
                  animate={{ rotate: [6, -6, 6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✦
                </motion.div>

                <Button className="bg-foreground hover:bg-rose-600 text-background rounded-full px-8 py-6 text-base shadow-lg">
                  Book a Free Clarity Call
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
