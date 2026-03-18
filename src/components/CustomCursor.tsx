"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  // Store position in a ref — no re-render on every mousemove
  const posRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  // Framer Motion animated values driven by spring, updated via animate()


  // DOM refs so we can update them directly without React re-renders
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports hover (ignores touch devices)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      // Throttle to one update per animation frame
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const { x, y } = posRef.current;
        if (outerRef.current) {
          outerRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px) scale(${isHoveringRef.current ? 1.6 : 1})`;
        }
        if (innerRef.current) {
          innerRef.current.style.transform = `translate(${x - 5}px, ${y - 5}px) scale(${isHoveringRef.current ? 0 : 1})`;
        }
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        !!target.closest("a") ||
        !!target.closest("button");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId !== null) cancelAnimationFrame(rafId);
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

      {/* Outer Glow Ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-purple-500/50 pointer-events-none z-[9998] mix-blend-screen hidden md:flex items-center justify-center will-change-transform shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        style={{ transform: "translate(-100px,-100px)" }}
      />

      {/* Inner Dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-fuchsia-400 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block will-change-transform shadow-[0_0_10px_rgba(232,121,249,0.8)]"
        style={{ transform: "translate(-100px,-100px)" }}
      />
    </>
  );
}
