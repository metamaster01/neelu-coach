// "use client"

// import Image from "next/image"
// import React, { useMemo } from "react"

// type PhotoCarouselProps = {
//   photos: string[]
//   speedSeconds?: number 
//   className?: string
// }

// export default function PhotoCarousel({
//   photos,
//   speedSeconds = 18,
//   className = "",
// }: PhotoCarouselProps) {
//   const trackPhotos = useMemo(() => {
//     if (!photos?.length) return []
//     return [...photos, ...photos]
//   }, [photos])

//   if (!photos?.length) return null

//   return (
//     <section className={`w-full ${className}`}>
//       {/* Viewport */}
//       <div className="relative overflow-hidden">
//         {/* Track */}
//         <div
//           className="carousel-track group"
//           style={
//             {
//               "--marquee-duration": `${speedSeconds}s`,
//             } as React.CSSProperties
//           }
//         >
//           {trackPhotos.map((src, idx) => {
//             const patternIndex = idx % photos.length 
//             const isSmall = patternIndex === 0 || patternIndex === 2

//             return (
//               <div
//                 key={`${src}-${idx}`}
//                 className={[
//                   "carousel-card",
//                   isSmall ? "carousel-card--small" : "carousel-card--big",
//                 ].join(" ")}
//               >
//                 <Image
//                   src={src}
//                   alt={`Gallery photo ${patternIndex + 1}`}
//                   fill
//                   sizes={
//                     isSmall
//                       ? "(max-width: 768px) 70vw, 220px"
//                       : "(max-width: 768px) 80vw, 280px"
//                   }
//                   className="object-cover"
//                   priority={idx < 4}
//                 />
//               </div>
//             )
//           })}
//         </div>

//         <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .carousel-track {
//           display: flex;
//           align-items: center;
//           gap: 24px;
//           width: max-content;
//           animation: marquee var(--marquee-duration) linear infinite;
//         }

//         /* Pause when hovering ANY card */
//         .carousel-track:hover {
//           animation-play-state: paused;
//         }

//         .carousel-card {
//           position: relative;
//           flex: 0 0 auto;
//           border-radius: 18px;
//           overflow: hidden;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
//           transform-origin: center;
//           transition: transform 500ms ease, box-shadow 500ms ease;
//         }

//         /* subtle professional hover */
//         .carousel-card:hover {
//           transform: translateY(-6px) scale(1.02);
//           box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
//         }

//         /* Desktop sizes to match figma: small/big/small/big */
//         .carousel-card--small {
//           width: 224px;
//           height: 192px;
//         }
//         .carousel-card--big {
//           width: 288px;
//           height: 320px;
//         }

//         /* Mobile: one-by-one smaller + smoother */
//         @media (max-width: 768px) {
//           .carousel-track {
//             gap: 16px;
//             animation-duration: calc(var(--marquee-duration) * 1.15);
//           }
//           .carousel-card--small,
//           .carousel-card--big {
//             width: 75vw;
//             height: 52vw; /* responsive ratio */
//             max-width: 320px;
//             max-height: 240px;
//           }
//         }

//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import React, { useMemo } from "react"

type PhotoCarouselProps = {
  photos: string[]
  speedSeconds?: number 
  className?: string
}

export default function PhotoCarousel({
  photos,
  speedSeconds = 18,
  className = "",
}: PhotoCarouselProps) {
  const trackPhotos = useMemo(() => {
    if (!photos?.length) return []
    return [...photos, ...photos]
  }, [photos])

  if (!photos?.length) return null

  return (
    <section className={`w-full ${className}`}>
      {/* Viewport */}
      <div className="relative overflow-hidden">
        {/* Track */}
        <div
          className="carousel-track group"
          style={
            {
              "--marquee-duration": `${speedSeconds}s`,
            } as React.CSSProperties
          }
        >
          {trackPhotos.map((src, idx) => {
            const patternIndex = idx % photos.length 
            const isSmall = patternIndex === 0 || patternIndex === 2

            return (
              <div
                key={`${src}-${idx}`}
                className={[
                  "carousel-card",
                  isSmall ? "carousel-card--small" : "carousel-card--big",
                ].join(" ")}
              >
                <Image
                  src={src}
                  alt={`Gallery photo ${patternIndex + 1}`}
                  fill
                  sizes={
                    isSmall
                      ? "(max-width: 768px) 70vw, 220px"
                      : "(max-width: 768px) 80vw, 280px"
                  }
                  className="object-cover"
                  priority={idx < 4}
                />
              </div>
            )
          })}
        </div>

        {/* Gradient overlays updated to #5E936C */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#5E936C] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#5E936C] to-transparent" />
      </div>

      {/* Styles */}
      <style jsx>{`
        .carousel-track {
          display: flex;
          align-items: center;
          gap: 24px;
          width: max-content;
          animation: marquee var(--marquee-duration) linear infinite;
        }

        /* Pause when hovering ANY card */
        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-card {
          position: relative;
          flex: 0 0 auto;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          transform-origin: center;
          transition: transform 500ms ease, box-shadow 500ms ease;
        }

        /* subtle professional hover */
        .carousel-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }

        /* Desktop sizes to match figma: small/big/small/big */
        .carousel-card--small {
          width: 224px;
          height: 192px;
        }
        .carousel-card--big {
          width: 288px;
          height: 320px;
        }

        /* Mobile: one-by-one smaller + smoother */
        @media (max-width: 768px) {
          .carousel-track {
            gap: 16px;
            animation-duration: calc(var(--marquee-duration) * 1.15);
          }
          .carousel-card--small,
          .carousel-card--big {
            width: 75vw;
            height: 52vw; /* responsive ratio */
            max-width: 320px;
            max-height: 240px;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
