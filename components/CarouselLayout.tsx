"use client"

import PhotoCarousel from "@/components/photo-carousel"

const photos = [
  "/images/pic1.png",
  "/images/pic2.png",
  "/images/pic3.png",
  "/images/pic4.png",
]

export default function CarouselLayout() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== Header Section ===== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
          
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 text-black">
              Heal your heart.
              <br />
              Rebuild your connection.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-5 max-w-xl">
              Let's talk and begin your journey to a peaceful, loving relationship.
            </p>

            <a
              href="mailto:hello@neelutaneja.com"
              className="text-pink-500 hover:underline text-base sm:text-lg font-medium"
            >
              hello@neelutaneja.com
            </a>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full md:max-w-sm md:text-right">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-black">
              Main office
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
              Tower-17-002, Orchid Petals, Sohna Road,
              <br />
              Sector 49, Gurugram, Haryana 122018
            </p>

            <div className="flex md:justify-end gap-6">
              <a href="#" className="text-pink-500 hover:underline font-semibold text-xs sm:text-sm tracking-wide">
                INSTAGRAM
              </a>
              <a href="#" className="text-pink-500 hover:underline font-semibold text-xs sm:text-sm tracking-wide">
                FACEBOOK
              </a>
              <a href="#" className="text-pink-500 hover:underline font-semibold text-xs sm:text-sm tracking-wide">
                YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Carousel Section ===== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-12 sm:pb-16">
        <PhotoCarousel photos={photos} speedSeconds={16} />
      </section>
    </main>
  )
}
