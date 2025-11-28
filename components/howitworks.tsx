"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Lightbulb, Heart } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Animated3DLine({ progress }: { progress: number }) {
  const points = [
    new THREE.Vector3(-3, 0, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(3, 0, 0),
  ];

  const visibleCount = Math.floor(points.length * progress);

  return (
    <Line
      points={points.slice(0, visibleCount || 1)}
      color="#EC407A"
      lineWidth={4}
      dashed={false}
    />
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stepVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" },
    }),
  };

  const iconFloat = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full bg-[#fff8f9] py-32 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold">How It Works</h2>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-20 md:gap-0">
        {/* 3D LINE (Desktop only) */}
        <div className="absolute hidden md:block top-10 left-0 right-0 mx-auto w-full h-36 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={1} />
            <Animated3DLine progress={isInView ? 1 : 0} />
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Canvas>
        </div>

        {/* STEPS */}
        <div
          ref={ref}
          className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-24"
        >
          {/* STEP 1 */}
          <motion.div
            custom={0}
            variants={stepVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <motion.div
              variants={iconFloat}
              animate="animate"
              className="p-4 rounded-2xl bg-[#EC407A] text-white shadow-lg shadow-[#EC407A]/30"
            >
              <Phone size={40} />
            </motion.div>

            <h3 className="mt-4 font-semibold text-lg">Book a Call</h3>
            <p className="text-sm text-gray-600 mt-2">
              Schedule a private clarity session to share your story.
            </p>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            custom={1}
            variants={stepVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <motion.div
              variants={iconFloat}
              animate="animate"
              className="p-4 rounded-2xl bg-[#EC407A] text-white shadow-lg shadow-[#EC407A]/30"
            >
              <Lightbulb size={40} />
            </motion.div>

            <h3 className="mt-4 font-semibold text-lg">Get a Plan</h3>
            <p className="text-sm text-gray-600 mt-2">
              Together we’ll create a step-by-step action plan.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            custom={2}
            variants={stepVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <motion.div
              variants={iconFloat}
              animate="animate"
              className="p-4 rounded-2xl bg-[#EC407A] text-white shadow-lg shadow-[#EC407A]/30"
            >
              <Heart size={40} />
            </motion.div>

            <h3 className="mt-4 font-semibold text-lg">Transform</h3>
            <p className="text-sm text-gray-600 mt-2">
              Start rebuilding your relationship with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
