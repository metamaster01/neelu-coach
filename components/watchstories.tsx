"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"

interface Story {
  id: number
  name: string
  title: string
  quote: string
  image: string
  rating: number
}

const stories: Story[] = [
  {
    id: 1,
    name: "Shiriya Sethi",
    title: "Inner Child Healing Client",
    quote: '"I finally feel emotionally safe again."',
    image: "/story1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Ritika Sharma",
    title: "Self-Love & Confidence Client",
    quote: '"The sessions helped me rebuild my inner strength."',
    image: "/story2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Nandini Verma",
    title: "Inner Child Healing Client",
    quote: '"For the first time, I feel emotionally safe."',
    image: "/story3.png",
    rating: 5,
  },
]

export default function WatchStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1))
  }

  const visibleStories = [
    stories[currentIndex],
    stories[(currentIndex + 1) % stories.length],
    stories[(currentIndex + 2) % stories.length],
  ]

  // Animation for the whole component
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.section
      className="w-full py-16 px-4 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Watch Their Stories</h2>
          <div className="flex gap-3">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
              aria-label="Previous stories"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
              aria-label="Next stories"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Image Container */}
              <div className="p-4">
                <div className="w-full aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="px-6 pb-6">
                {/* Quote */}
                <p className="text-gray-700 text-sm mb-4 italic">{story.quote}</p>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.name}</h3>

                {/* Title */}
                <p className="text-xs text-gray-600 mb-3">{story.title}</p>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
