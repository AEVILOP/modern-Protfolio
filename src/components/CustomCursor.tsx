"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device supports hover (ignores touch devices)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" || 
        target.closest("a") || 
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Set initial position
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          body { cursor: none; }
          a, button { cursor: none; }
        }
      `}} />

      {/* Outer Glow Ring (Delayed) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[9998] mix-blend-screen hidden md:flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0)",
          borderColor: isHovering ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0.5)"
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />

      {/* Inner Dot (Instant) */}
      <motion.div 
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-fuchsia-400 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(232,121,249,0.8)]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0 }}
      />
    </>
  );
}
