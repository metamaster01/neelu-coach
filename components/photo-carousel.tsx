"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Home() {
  const photos = [
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic3.png",
    "/images/pic4.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayPhotos, setDisplayPhotos] = useState<string[]>([])

  // Initialize displayPhotos once
  useEffect(() => {
    setDisplayPhotos(photos.slice(0, 4))
  }, [photos])

  // Rotate photos from right to left
  useEffect(() => {
    if (photos.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [photos.length])

  // Update display photos based on current index
  useEffect(() => {
    if (photos.length === 0) return

    const newPhotos = []
    for (let i = 0; i < 4; i++) {
      newPhotos.push(photos[(currentIndex + i) % photos.length])
    }
    setDisplayPhotos(newPhotos)
  }, [currentIndex, photos])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Heal your heart.
              <br />
              Rebuild your connection.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Let's talk and begin your journey to a peaceful, loving relationship.
            </p>
            <a href="mailto:hello@neelutaneja.com" className="text-pink-500 hover:underline text-lg">
              hello@neelutaneja.com
            </a>
          </div>

          {/* Right Section */}
          <div className="flex-1 text-left md:text-right">
            <h2 className="text-xl font-semibold mb-4">Main office</h2>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Tower-17-002, Orchid Petals, Sohna Road,
              <br />
              Sector 49, Gurugram, Haryana 122018
            </p>
            <div className="flex justify-start md:justify-end gap-6">
              <a href="#" className="text-pink-500 hover:underline font-semibold text-sm">
                INSTAGRAM
              </a>
              <a href="#" className="text-pink-500 hover:underline font-semibold text-sm">
                FACEBOOK
              </a>
              <a href="#" className="text-pink-500 hover:underline font-semibold text-sm">
                YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Carousel Section */}
      <div className="max-w-7xl mx-auto px-8 py-12 flex justify-center gap-6 flex-wrap">
        {displayPhotos.map((photo, idx) => {
          const isSmall = idx === 0 || idx === 2
          const width = isSmall ? 224 : 288
          const height = isSmall ? 192 : 320

          return (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl shadow-lg flex-shrink-0 transition-all duration-500`}
              style={{ width, height }}
            >
              <Image
                src={photo || "/placeholder.svg"}
                alt={`Gallery photo ${idx + 1}`}
                width={width}
                height={height}
                className="object-cover w-full h-full"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
