"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useSwipeable } from "react-swipeable"

function WaveBlob() {
  return (
    <mesh>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial
        color="#ff0095"
        wireframe
        opacity={0.15}
        transparent
      />
    </mesh>
  )
}

export default function Podcast() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [arrow, setArrow] = useState<"left" | "right" | null>(null)

  const autoRef = useRef<NodeJS.Timeout | null>(null)

  const episodes = [
    {
      id: 1,
      status: "Playing Now",
      title: "Healing Begins with Honest Conversations",
      description:
        "In this episode, I explore how small shifts in how we communicate can rebuild broken trust and deepen emotional connection.",
      image: "/podcast1.jpg",
    },
    {
      id: 2,
      status: "Understanding Emotional Boundaries",
      description:
        "A deep dive into how emotional boundaries help maintain healthy relationships and avoid repeated cycles of hurt.",
      image: "/podcast2.jpg",
    },
    // {
    //   id: 3,
    //   status: "Healing Discussions That Transform",
    //   description:
    //     "Why honest conversations can heal the deepest emotional wounds.",
    //   image: "/podcast3.jpg",
    // },
  ]

  const handlePrev = () => {
    setArrow("left")
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length)
  }

  const handleNext = () => {
    setArrow("right")
    setCurrentIndex((prev) => (prev + 1) % episodes.length)
  }

  // ---------------------- AUTO SLIDING EVERY 5 SECONDS ----------------------
  useEffect(() => {
    autoRef.current = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(autoRef.current as NodeJS.Timeout)
  }, [])

  // ---------------------- SWIPE SUPPORT ----------------------
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true,
    trackMouse: true,
  })

  const episode = episodes[currentIndex]

  return (
    <div className="relative w-full bg-white px-6 py-16 overflow-hidden">

      {/* ---------------------- 3D ANIMATED BACKGROUND ---------------------- */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-xl">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <WaveBlob />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      <div className="mx-auto max-w-6xl" {...swipeHandlers}>
        
        {/* ---------------------- HEADER ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-start justify-between"
        >
          <div>
            <h1 className="mb-3 text-4xl font-bold">Podcast with Neelu Taneja</h1>
            <p className="text-gray-600">
              Real stories. Real emotions. Real healing.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className={`rounded-full border-2 p-2 transition ${
                arrow === "left"
                  ? "border-pink-500 text-pink-500"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className={`rounded-full border-2 p-2 transition ${
                arrow === "right"
                  ? "border-pink-500 text-pink-500"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* ---------------------- CARD WITH ANIMATION ---------------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-2xl bg-gray-50/80 p-8 shadow-xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-8">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-sm font-semibold text-transparent">
                    {episode.status}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold">{episode.title}</h2>
                  <p className="mt-4 text-gray-600">{episode.description}</p>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="rounded-full bg-pink-500 px-6 py-2 font-semibold text-white hover:bg-pink-600">
                    Listen now
                  </button>
                  <button className="rounded-full border-2 border-gray-300 px-6 py-2 font-semibold text-gray-800 hover:bg-gray-200">
                    Watch on YouTube
                  </button>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={episode.image}
                  alt="Podcast"
                  className="h-96 w-full rounded-2xl object-cover shadow-lg"
                />

                <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                  <Play size={28} className="ml-1 text-gray-800" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="rounded-full bg-black px-10 py-3 font-semibold text-white hover:bg-gray-800"
        >
          Listen to More Episodes
        </motion.button>
      </div>
    </div>
  )
}
