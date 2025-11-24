"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  id: number
  text: string
  author: string
  rating: number
  avatar: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I was suffering from my relationship very badly then I attend the session with Neelu mom. I got excellent result in my life. Thank you Neelu mom. I recommend to everyone those who are suffering from relationship",
    author: "Sanju Pathak",
    rating: 5,
    avatar: "/images/avatar1-sample.jpg",
    initials: "SP",
  },
  {
    id: 2,
    text: "My experience with Neelu ma'am has been wonderful. When I met her, my struggled seemed to not end but her guidance and support really made my relationship much stronger. Thank you for taking so much pain for me.",
    author: "Shriya Sethi",
    rating: 5,
    avatar: "/images/avatar2-sample.jpg",
    initials: "SS",
  },
  {
    id: 3,
    text: "I was suffering from my relationship very badly then I attend the session with Neelu mom. I got excellent result in my life. Thank you Neelu mom. I recommend to everyone those who are suffering from relationship",
    author: "Sanju Pathak",
    rating: 5,
    avatar: "/images/avatar3-sample.jpg",
    initials: "SP",
  },
]

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="w-full py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-foreground">Stories of Healing &amp; Hope.</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full h-10 w-10 bg-transparent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full h-10 w-10 bg-transparent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl text-pink-500 mb-4">&quot;</div>

              {/* Testimonial Text */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">{testimonial.text}</p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Avatar */}
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
