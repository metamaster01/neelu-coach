"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Lightbulb, Heart } from "lucide-react"

const steps = [
  {
    title: "Book a Call",
    text: "Schedule a private clarity session to share your story.",
    Icon: Phone,
  },
  {
    title: "Get a Plan",
    text: "Together we’ll create a step-by-step action plan.",
    Icon: Lightbulb,
  },
  {
    title: "Transform",
    text: "Start rebuilding your relationship with confidence.",
    Icon: Heart,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const stepVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.22, duration: 0.6 },
    }),
  }

  const iconFloat = {
    animate: {
      y: [0, -6, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  }

  return (
    <section
      ref={ref}
      className="w-full bg-white py-14 sm:py-24 md:py-14 lg:py-14  px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-14 md:mb-20">
          How It Works
        </h2>

        {/* Wrapper so line + steps align */}
        <div className="relative">
          {/* ===== Desktop Connector Line ===== */}
          <div className="hidden md:block absolute inset-x-0 top-8">
            <svg
              className="w-full h-20"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
            >
              {/* base faint line */}
              <line
                x1="70"
                y1="60"
                x2="930"
                y2="60"
                stroke="#E5E7EB"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* animated main line */}
              <motion.line
                x1="70"
                y1="60"
                x2="930"
                y2="60"
                stroke="#73AF6F"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* little arrows between steps */}
              <motion.path
                d="M365 52 L385 60 L365 68"
                fill="none"
                stroke="#73AF6F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              <motion.path
                d="M645 52 L665 60 L645 68"
                fill="none"
                stroke="#73AF6F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
            </svg>
          </div>

          {/* ===== Steps ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-start">
            {steps.map((step, i) => {
              const Icon = step.Icon
              return (
                <motion.div
                  key={step.title}
                  custom={i}
                  variants={stepVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-col items-center text-center max-w-xs mx-auto"
                >
                  <motion.div
                    variants={iconFloat}
                    animate="animate"
                    className="relative z-10 p-4 rounded-2xl bg-[#73AF6F] text-white shadow-lg shadow-[#73AF6F]/30"
                  >
                    <Icon size={36} />
                  </motion.div>

                  <h3 className="mt-4 font-semibold text-lg text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {step.text}
                  </p>

                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden mt-8 mb-2 flex items-center justify-center">
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isInView ? { height: 28, opacity: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                        className="w-[2px] bg-[#73AF6F] rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
