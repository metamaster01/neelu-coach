"use client";

import Image from "next/image";

export default function MeetCoach() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20">
      
      {/* TWO COLUMN: LEFT = Heading, RIGHT = Subtitle + Description */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start mb-16">

        {/* LEFT – Heading only */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold whitespace-nowrap">
            Meet Coach Neelu Taneja
          </h2>
        </div>

        {/* RIGHT – Green subtitle + paragraphs */}
        <div>
          <p className="text-[#5E936CCC] text-lg font-medium mb-6">
            Your Guide to Healing, Awareness & Conscious Relationships
          </p>

          <div className="max-w-3xl text-gray-800 leading-relaxed space-y-4">
            <p>
              In today’s fast-moving world, relationships often struggle not
              because of a lack of love, but because of a lack of understanding.
            </p>

            <p>
              This is where Coach Neelu Taneja steps in — with warmth, wisdom,
              and years of experience in emotional healing.
            </p>

            <p>
              She is an NLP Coach, Relationship Coach, and Author, known for
              transforming how people understand their emotions, patterns, and
              relationships.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT Image – Large */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about/about1.png"
            alt="Coach Neelu Taneja with client"
            fill
            className="object-cover"
          />
        </div>

        {/* MIDDLE Image – Slightly Smaller */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about/about2.png"
            alt="Coach Neelu Taneja portrait"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT Image – Large */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about/about3.png"
            alt="Coach Neelu Taneja with guest"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
