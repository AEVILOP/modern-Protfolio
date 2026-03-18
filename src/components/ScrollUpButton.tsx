"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const threshold = typeof window !== "undefined" ? window.innerHeight * 4 : 4000;
      setIsVisible(latest > threshold);
    });
  }, [scrollY]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-[100] p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full backdrop-blur-xl text-white shadow-2xl transition-all"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}
