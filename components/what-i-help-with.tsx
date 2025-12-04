import Image from "next/image"
import { HeartIcon } from "@/components/icons/heart-icon"

const services = [
  {
    title: "Emotional Trauma Healing",
    description: "Let go of past emotional wounds & rediscover inner peace.",
  },
  {
    title: "Childhood Trauma & Inner Child Healing",
    description: "Rewrite patterns created in childhood and reconnect with your inner child.",
  },
  {
    title: "Self-Love & Confidence Building",
    description: "Reclaim your worth, set boundaries, and build a stronger relationship with yourself.",
  },
  {
    title: "Relationship & Marriage Coaching",
    description: "Improve communication, trust, intimacy, and emotional safety.",
  },
]

export function WhatIHelpWith() {
  return (
    <section className="bg-[#f0f2f5] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10">What I Help You With</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex flex-col gap-4">
                <HeartIcon className="w-8 h-8 text-[#4a9b7f]" />
                <h3 className="font-semibold text-[#1a1a1a] text-lg leading-tight">{service.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-auto">
            <Image src="/woman-with-head-in-hands-looking-thoughtful-and-co.jpg" alt="Woman in contemplative pose" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
