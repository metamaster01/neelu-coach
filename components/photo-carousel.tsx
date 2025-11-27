"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Photo {
  src: string
  alt: string
}

interface PhotoCarouselProps {
  photos: Photo[]
  autoPlayInterval?: number
}

export function PhotoCarousel({ photos, autoPlayInterval = 1500 }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [photos.length, autoPlayInterval])

  // Get visible photos (showing 4 at a time with alternating sizes)
  const getVisiblePhotos = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % photos.length
      visible.push({ ...photos[index], index })
    }
    return visible
  }

  const visiblePhotos = getVisiblePhotos()

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex items-end justify-center gap-4 transition-all duration-500">
        {visiblePhotos.map((photo, idx) => {
          // Alternating pattern: small, big, big, small
          const isSmall = idx === 0 || idx === 3

          return (
            <div
              key={`${photo.index}-${idx}`}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out ${
                isSmall ? "h-48 w-36 md:h-56 md:w-44" : "h-64 w-48 md:h-80 md:w-56"
              }`}
            >
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
