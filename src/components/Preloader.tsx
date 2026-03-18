"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2800;
    const interval = 28;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min(100, Math.floor((currentStep / steps) * 100)));

      if (currentStep >= steps) {
        clearInterval(timer);
        // Wait for the progress bar to visually hit 100, then fade out
        setTimeout(() => setDone(true), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // When done, drive opacity to 0 and kill pointer events — never unmount
  useEffect(() => {
    if (!done || !overlayRef.current) return;
    const el = overlayRef.current;
    el.style.transition = "opacity 0.6s cubic-bezier(0.4,0,0.2,1)";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
  }, [done]);

  return (
    // Always in the DOM — page content renders beneath from the very first paint
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a]"
      style={{ willChange: "opacity" }}
    >
      {/* Logo / Name */}
      <div className="text-4xl md:text-6xl font-black text-white tracking-tighter overflow-hidden mb-16">
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="block"
        >
          IGNITION SEQUENCE.
        </motion.span>
      </div>

      {/* F1 Progress Track */}
      <div className="relative w-[80%] max-w-3xl h-1 bg-white/10 rounded-full mt-10">
        {/* Track fill */}
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-transparent via-red-500 to-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-[width] duration-[28ms] ease-linear"
          style={{ width: `${progress}%` }}
        />

        {/* F1 Car — moves with progress */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -mt-[5px] transition-[left] duration-[28ms] ease-linear"
          style={{ left: `calc(${progress}% - 80px)` }}
        >
          <svg
            viewBox="0 0 500 150"
            width="120"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            <path d="M -80 110 L 10 110" stroke="rgba(239,68,68,0.8)" strokeWidth="6" strokeDasharray="15 10" />
            <path d="M 60 120 L 400 120 L 450 140 L 480 140 L 480 130 L 430 110 L 380 90 L 330 90 Q 280 60 250 80 L 150 90 L 90 70 L 60 70 Z" fill="#06122e" />
            <path d="M 380 90 L 430 110 L 450 140" stroke="#cc0000" strokeWidth="4" fill="none" />
            <path d="M 150 90 L 250 80 Q 280 60 330 90" stroke="#ffcc00" strokeWidth="4" fill="none" />
            <path d="M 40 60 L 90 60 L 90 90 L 40 90 Z" fill="#06122e" />
            <path d="M 40 60 L 90 60" stroke="#cc0000" strokeWidth="4" />
            <path d="M 460 130 L 490 130 L 490 145 L 450 145 Z" fill="#06122e" />
            <path d="M 460 130 L 490 130" stroke="#ffcc00" strokeWidth="4" />
            <circle cx="120" cy="120" r="30" fill="#111111" stroke="#333333" strokeWidth="6" />
            <circle cx="390" cy="120" r="30" fill="#111111" stroke="#333333" strokeWidth="6" />
            <circle cx="120" cy="120" r="10" fill="#cc0000" />
            <circle cx="390" cy="120" r="10" fill="#ffcc00" />
          </svg>
        </div>
      </div>

      {/* Speedometer percentage */}
      <div className="mt-16 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-black text-red-500/80 tracking-widest tabular-nums font-mono"
        >
          {progress} %
        </motion.div>
      </div>
    </div>
  );
}
