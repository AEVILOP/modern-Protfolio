"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Parallax + fade for Section 1 (0%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Parallax + fade for Section 2 (30%)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [100, -100]);

  // Parallax + fade for Section 3 (60%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section 1: Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-x-0 flex flex-col items-center justify-center text-center top-[55%] -translate-y-1/2 px-6"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Anirban Banerjee
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-medium text-white/80 drop-shadow-lg">
            Developer.
          </p>
        </motion.div>

        {/* Section 2: Left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-6 md:left-12 flex flex-col items-start w-[calc(100%-3rem)] md:w-auto md:max-w-lg"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            Building robust APIs & AI integrations.
          </h2>
        </motion.div>

        {/* Section 3: Right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-6 md:right-12 flex flex-col items-end w-[calc(100%-3rem)] md:w-auto md:max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            Improving through consistent execution.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
