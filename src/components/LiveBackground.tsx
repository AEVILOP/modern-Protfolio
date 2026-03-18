"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LiveBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden mix-blend-screen opacity-40">
      
      {/* Top Left Orb */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/30 blur-[120px]"
      />

      {/* Bottom Right Orb */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[150px]"
      />
      
      {/* Center Ambient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-violet-900/20 blur-[100px]"
      />
      
    </div>
  );
}
