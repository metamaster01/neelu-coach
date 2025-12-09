// "use client";

// import { Button } from "@/components/ui/button";
// import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useRef, useState } from "react";
// import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Clarity Call - Rebuild Love & Feel Understood",
//   description: "Start your healing journey with a safe, one-on-one clarity call.",
// };

// export default function Rebuild() {
//   const ref = useRef(null);
//   const router = useRouter();

//   const isInView = useInView(ref, { once: true, amount: 0.25 });

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);
//   const opacitySmooth = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

//   const [isExiting, setIsExiting] = useState(false);

//   const handleClick = () => {
//     setIsExiting(true);
//     setTimeout(() => {
//       router.push("/contact"); // <-- updated route
//     }, 700);
//   };

//   return (
//     <AnimatePresence>
//       {!isExiting && (
//         <motion.div
//           exit={{ opacity: 0, y: 80, scale: 0.98 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         >
//           <div
//             className="min-h-screen flex items-center justify-center p-4"
//             style={{ backgroundColor: "#F5F5F0" }}
//           >
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, y: 60, scale: 0.96 }}
//               animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0px 25px 70px rgba(94,147,108,0.25)",
//               }}
//               className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-6xl h-[480px] md:h-[560px]"
//               style={{
//                 backgroundImage: "url(/heart-pattern.png)",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundColor: "#5E936C",
//               }}
//             >
//               {/* Gradient Overlay */}
//               <motion.div
//                 style={{
//                   opacity: opacitySmooth,
//                   y: parallaxY,
//                 }}
//                 className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-green-500/10 to-green-400/20"
//               />

//               {/* Content */}
//               <motion.div
//                 style={{ y: parallaxY }}
//                 className="relative z-10 text-center px-8 py-14 md:px-16 md:py-20 flex flex-col justify-center items-center h-full"
//               >
//                 <motion.h1
//                   initial={{ opacity: 0, y: 35 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                   className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight text-balance"
//                 >
//                   Ready to rebuild love and feel truly understood?
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.35, duration: 0.6 }}
//                   className="text-sm md:text-lg text-white/95 mb-8 text-balance max-w-2xl"
//                 >
//                   Start your healing journey with a safe, one-on-one clarity call.
//                 </motion.p>

//                 {/* Fixed Button */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.5, duration: 0.7 }}
//                   whileTap={{ scale: 0.92 }}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 10 }}
//                   onClick={handleClick}
//                 >
//                   <Button
//                     size="lg"
//                     className="rounded-full px-10 py-4 text-base md:text-lg font-semibold hover:shadow-xl transition-all"
//                     style={{
//                       backgroundColor: "#FFFEF5",
//                       color: "#1a1a1a",
//                     }}
//                   >
//                     Book A 1:1 Clarity Call
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Clarity Call - Rebuild Love & Feel Understood",
  description: "Start your healing journey with a safe, one-on-one clarity call.",
};

export default function Rebuild() {
  const ref = useRef(null);
  const router = useRouter();

  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacitySmooth = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/contact"); // <-- updated route
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, y: 80, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{ backgroundColor: "#F5F5F0" }}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 25px 70px rgba(94,147,108,0.25)",
              }}
              className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-6xl h-[480px] md:h-[560px]"
              style={{
                backgroundImage: "url(/heart-pattern.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#5E936C",
              }}
            >
              {/* Gradient Overlay */}
              <motion.div
                style={{
                  opacity: opacitySmooth,
                  y: parallaxY,
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-green-500/10 to-green-400/20"
              />

              {/* Content */}
              <motion.div
                style={{ y: parallaxY }}
                className="relative z-10 text-center px-8 py-14 md:px-16 md:py-20 flex flex-col justify-center items-center h-full"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight text-balance"
                >
                  Ready to rebuild love and feel truly understood?
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-sm md:text-lg text-white/95 mb-8 text-balance max-w-2xl"
                >
                  Start your healing journey with a safe, one-on-one clarity call.
                </motion.p>

                {/* Fixed Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  whileTap={{
                    scale: 0.92,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    },
                  }}
                  onClick={handleClick}
                >
                  <Button
                    className="rounded-full px-10 py-4 text-base md:text-lg font-semibold hover:shadow-xl transition-all"
                    style={{
                      backgroundColor: "#FFFEF5",
                      color: "#1a1a1a",
                    }}
                  >
                    Book A 1:1 Clarity Call
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
