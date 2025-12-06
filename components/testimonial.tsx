// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight, Star } from "lucide-react"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// interface Testimonial {
//   id: number
//   text: string
//   author: string
//   rating: number
//   avatar: string
//   initials: string
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     text: "I was suffering from my relationship very badly then I attend the session with Neelu mom. I got excellent result in my life. Thank you Neelu mom. I recommend to everyone those who are suffering from relationship",
//     author: "Sanju Pathak",
//     rating: 5,
//     avatar: "/images/avatar1-sample.jpg",
//     initials: "SP",
//   },
//   {
//     id: 2,
//     text: "My experience with Neelu ma'am has been wonderful. When I met her, my struggled seemed to not end but her guidance and support really made my relationship much stronger. Thank you for taking so much pain for me.",
//     author: "Shriya Sethi",
//     rating: 5,
//     avatar: "/images/avatar2-sample.jpg",
//     initials: "SS",
//   },
//   {
//     id: 3,
//     text: "I was suffering from my relationship very badly then I attend the session with Neelu mom. I got excellent result in my life. Thank you Neelu mom. I recommend to everyone those who are suffering from relationship",
//     author: "Sanju Pathak",
//     rating: 5,
//     avatar: "/images/avatar3-sample.jpg",
//     initials: "SP",
//   },
// ]

// export function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
//   }

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
//   }

//   const getVisibleTestimonials = () => {
//     const items = []
//     for (let i = 0; i < 3; i++) {
//       items.push(testimonials[(currentIndex + i) % testimonials.length])
//     }
//     return items
//   }

//   const visibleTestimonials = getVisibleTestimonials()

//   return (
//     <section className="w-full py-16 px-4 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-4xl font-bold text-foreground">Stories of Healing &amp; Hope.</h2>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={goToPrevious}
//               className="rounded-full h-10 w-10 bg-transparent"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={goToNext}
//               className="rounded-full h-10 w-10 bg-transparent"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {visibleTestimonials.map((testimonial) => (
//             <Card key={testimonial.id} className="p-6 bg-white border-none shadow-sm hover:shadow-md transition-shadow">
//               <div className="text-4xl text-pink-500 mb-4">&quot;</div>

//               {/* Testimonial Text */}
//               <p className="text-sm text-foreground/80 leading-relaxed mb-6">{testimonial.text}</p>

//               {/* Author Info */}
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="font-semibold text-foreground">{testimonial.author}</p>
//                   <div className="flex gap-1 mt-2">
//                     {Array.from({ length: testimonial.rating }).map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Avatar */}
//                 <Avatar className="h-12 w-12">
//                   <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
//                   <AvatarFallback>{testimonial.initials}</AvatarFallback>
//                 </Avatar>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

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

type Reel = {
  id: number;
  instagramUrl: string;
  quote: string;
  // OPTIONAL for future inline play:
  mp4Url?: string
};

const reels: Reel[] = [
  {
    id: 1,
    instagramUrl:
      "https://www.instagram.com/reel/DRUeWh0E0eY/?igsh=MWg3MG9icnQwenhxZg==",
    quote: "“I finally feel emotionally safe again.”",
    mp4Url: "/testimonial-1.mp4",
  },
  {
    id: 2,
    instagramUrl:
      "https://www.instagram.com/reel/DOQHBBSEbE6/?igsh=MTB0a3RqbXUwNzBzYQ==",
    quote: "“The sessions helped me rebuild my inner strength.”",
    mp4Url: "/testimonial-2.mp4",
  },
  {
    id: 3,
    instagramUrl:
      "https://www.instagram.com/reel/DN-9rCVE43t/?igsh=MWs1Ynhwbms3ajh3dg==",
    quote: "“For the first time, I feel understood.”",
    mp4Url: "/testimonial-3.mp4",
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
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // ----- AUTO ROTATE written testimonials -----
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
        {/* ===== Header ===== */}
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

        {/* ===== Written Testimonials ===== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">
            Client Experiences
          </h3>

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={`${t.id}-${currentIndex}`} // ensures smooth rotating animation
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
                        {t.author && (
                          <p className="font-semibold text-gray-900">
                            {t.author}
                          </p>
                        )}
                        {!!t.rating && (
                          <div className="flex gap-1 mt-2">
                            {Array.from({ length: t.rating }).map((_, j) => (
                              <Star
                                key={j}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={t.avatar || "/placeholder.svg"}
                          alt={t.author || "Client"}
                        />
                        <AvatarFallback>{t.initials || "NT"}</AvatarFallback>
                      </Avatar>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* ===== Video Testimonials ===== */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Watch Their Stories
            </h3>

            {/* optional arrows for future reel carousel */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {}}
                className="rounded-full h-9 w-9 bg-transparent opacity-60 cursor-default"
                aria-label="Previous video"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {}}
                className="rounded-full h-9 w-9 bg-transparent opacity-60 cursor-default"
                aria-label="Next video"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {reels.map((r, i) => (
              <motion.a
                key={r.id}
                href={r.instagramUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                className="group block rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white overflow-hidden"
              >
                {/* Video Placeholder */}
                <div className="relative aspect-[4/5] bg-gray-100">
                  {/* If later you host mp4, replace this block with <video ...> */}
                  <video
                    src={r.mp4Url}
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                  />

                  {/* Soft green frame like screenshot */}
                  <div className="absolute inset-2 rounded-xl border-2 border-green-400/70 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {r.quote}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition">
                    {/* Insta logo */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                    </svg>
                    View on Instagram
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
