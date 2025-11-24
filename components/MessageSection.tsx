"use client";

import { motion } from "framer-motion";

export default function LoveMessageSection() {
  return (
    <section
      className="w-full flex justify-center overflow-hidden"
      style={{ background: "#EC407A" }}
    >
      {/* MAIN CONTAINER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeOut",
              staggerChildren: 0.22,
            },
          },
        }}
        className="text-white w-full"
        style={{
          maxWidth: "1440px",
          padding: "80px 98px",
          display: "flex",
          flexDirection: "column",
          gap: "38px",
          minHeight: "420px", // 🔥 tighter height
        }}
      >
        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          style={{
            fontSize: "42px",          // 🔥 closer to reference size
            fontWeight: 700,
            lineHeight: "1.25",
          }}
        >
          If love feels heavy lately, it’s not because you’re broken.
        </motion.h2>

        {/* PARAGRAPHS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "1100px",
          }}
        >
          {/* PARA 1 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{
              fontSize: "18px", // 🔥 slightly larger text for premium look
              lineHeight: "1.55",
              opacity: 0.95,
            }}
          >
            You’ve spent so long trying to make sense of someone else’s actions
            that you forgot your own heart still matters. Healing isn’t about
            fixing him or proving your worth — it’s about remembering that you
            were whole long before anyone made you question it. This space exists
            to help you untangle the pain, rebuild trust within yourself, and
            finally feel safe in your own skin again.
          </motion.p>

          {/* PARA 2 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{
              fontSize: "18px",
              lineHeight: "1.55",
              opacity: 0.95,
            }}
          >
            You don’t have to keep replaying the same story in your head,
            wondering what you could’ve done differently. You don’t have to carry
            the weight of his silence or his choices. Here, you learn to release
            what was never yours to hold — and start writing a new chapter that’s
            honest, grounded, and entirely yours.
          </motion.p>
        </div>
      </motion.div>

      {/* RESPONSIVE FIXES */}
      <style>{`
        @media (max-width: 1024px) {
          section div[style] {
            padding: 70px 60px !important;
          }
        }
        @media (max-width: 768px) {
          section div[style] {
            padding: 60px 40px !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 640px) {
          section div[style] {
            padding: 50px 25px !important;
          }
          h2 {
            font-size: 30px !important;
            line-height: 1.3 !important;
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
