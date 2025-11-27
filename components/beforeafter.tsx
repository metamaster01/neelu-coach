"use client"

import { Heart, HeartCrack, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function BeforeAfter() {
  const beforeItems = [
    "Constantly giving without receiving",
    "Silencing your needs to keep the peace",
    "Questioning your worth in love",
    "Feeling emotionally alone, even when partnered",
  ]

  const afterItems = [
    "Loving without losing yourself",
    "Trusting your needs, voice, and intuition",
    "Setting healthy boundaries without guilt",
    "Feeling whole, grounded, and safe in connection",
  ]

  // Floating / parallax effect
  const floatVariants: Variants = {
    float: {
      y: [0, -10, 0],
      x: [0, 5, -5, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  }

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  const sparkleVariants: Variants = {
    sparkle: {
      scale: [0.8, 1.2, 1],
      rotate: [0, 90, 0],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  }

  const [refBefore, inViewBefore] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [refAfter, inViewAfter] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            You Before & After Coaching
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Healing isn&apos;t about becoming someone new — it&apos;s about coming home to yourself.
            <br />
            Here&apos;s what changes when you start doing the inner work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before Card */}
          <motion.div
            ref={refBefore}
            className="bg-pink-50 rounded-2xl p-6 relative overflow-hidden shadow-lg"
            variants={fadeUpVariants}
            initial="hidden"
            animate={inViewBefore ? "visible" : "hidden"}
          >
            {/* Floating sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 text-pink-${200 + i * 50}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                variants={sparkleVariants}
                animate="sparkle"
              >
                <Sparkles />
              </motion.div>
            ))}

            {/* Illustration */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
            >
              <motion.div
                className="w-64 h-64 relative"
                variants={floatVariants}
                animate="float"
              >
                <Image
                  src="/before.png"
                  alt="Woman feeling stressed before coaching"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Title */}
            <div className="flex items-center gap-2 mb-4">
              <HeartCrack className="w-5 h-5 text-red-500 animate-pulse" />
              <h3 className="text-xl font-semibold text-red-500">You Before Sessions</h3>
            </div>

            {/* List */}
            <ul className="space-y-3">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Heart className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0 fill-red-400 animate-bounce" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After Card */}
          <motion.div
            ref={refAfter}
            className="bg-pink-50 rounded-2xl p-6 relative overflow-hidden shadow-lg"
            variants={fadeUpVariants}
            initial="hidden"
            animate={inViewAfter ? "visible" : "hidden"}
          >
            {/* Floating sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 text-pink-${200 + i * 50}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                variants={sparkleVariants}
                animate="sparkle"
              >
                <Sparkles />
              </motion.div>
            ))}

            {/* Illustration */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
            >
              <motion.div
                className="w-64 h-64 relative"
                variants={floatVariants}
                animate="float"
              >
                <Image
                  src="/after.png"
                  alt="Woman feeling happy after coaching"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Title */}
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
              <h3 className="text-xl font-semibold text-pink-500">You After Sessions</h3>
            </div>

            {/* List */}
            <ul className="space-y-3">
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Heart className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0 fill-pink-400 animate-bounce" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
