"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  text: string;
  author?: string;
  rating?: number;
  avatar?: string;
  initials?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I felt heard for the first time in years. The sessions helped me communicate better and feel emotionally safe again.",
    author: "Sanju Pathak",
    rating: 5,
    avatar: "/avatar-1.png",
    initials: "SP",
  },
  {
    id: 2,
    text: "Neelu ma’am supported me without judgment. I can finally see hope and clarity in my relationship.",
    author: "Shriya Sethi",
    rating: 5,
    avatar: "/avatar-2.png",
    initials: "SS",
  },
  {
    id: 3,
    text: "With small steps and consistent guidance, I’ve rebuilt trust and confidence in myself and my partner.",
    author: "Ritika Sharma",
    rating: 5,
    avatar: "/avatar-1.png",
    initials: "RS",
  },
  {
    id: 4,
    text: "The tools I learned changed the way I respond in conflicts. We feel connected again.",
    author: "Nandini Verma",
    rating: 5,
    avatar: "/avatar-2.png",
    initials: "NV",
  },
];

export function Testimonial() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const visibleTestimonials = useMemo(() => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goToNext, 4500);
    return () => clearInterval(id);
  }, [isPaused, currentIndex]);

  const fadeSlide = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Stories of Healing &amp; Hope
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Real people. Real breakthroughs. Real transformations.
            </p>
          </div>

          <div className="flex gap-2 self-start">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="rounded-full h-10 w-10 bg-transparent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="rounded-full h-10 w-10 bg-transparent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Written Testimonials */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">
            Client Experiences
          </h3>

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={`${t.id}-${currentIndex}`}
                  custom={i}
                  variants={fadeSlide}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Card className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl h-full">
                    <div className="text-4xl text-green-500 mb-3 leading-none">
                      “
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed mb-6">
                      {t.text}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{t.author}</p>
                        <div className="flex gap-1 mt-2">
                          {Array.from({ length: t.rating || 0 }).map((_, j) => (
                            <Star
                              key={j}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <Avatar className="h-12 w-12">
                        <AvatarImage src={t.avatar} alt={t.author} />
                        <AvatarFallback>{t.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
