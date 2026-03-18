"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 192;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.041s.png`;

export default function ScrollyCanvas({ children }: { children?: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Transform scroll progress (0 to 1) to frame index (0 to 191)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  // Fade out canvas at the end of the 500vh scroll
  const canvasOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  useEffect(() => {
    // Preload images
    const preloadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      preloadedImages.push(img);
    }
    setImages(preloadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    
    const context = canvasRef.current.getContext("2d");
    if (!context) return;
    
    let animationFrameId: number;
    let renderFrame = 0;
    
    const render = () => {
      const img = images[renderFrame];
      if (img && img.complete) {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    let lastRenderedFrame = -1;

    const unsubscribe = frameIndex.on("change", (latest) => {
      const targetFrame = Math.round(latest);
      
      // On mobile, update less frequently to significantly reduce frame lag while still animating
      if (isMobile && Math.abs(targetFrame - lastRenderedFrame) < 2 && targetFrame !== 0) {
        return;
      }
      
      renderFrame = targetFrame;
      lastRenderedFrame = targetFrame;
      
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    });

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render(); // Force initial render or resize render
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Setup an interval to check if first image is loaded if it wasn't on initial handleResize
    const checkLoad = setInterval(() => {
      if (images[0]?.complete) {
        render();
        clearInterval(checkLoad);
      }
    }, 100);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(checkLoad);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]">
        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="w-full h-full object-cover filter contrast-[1.2] brightness-[0.95] saturate-[1.05]"
        />
        {/* Deep cinematic vignette overlay */}
        <motion.div 
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.9)_100%)] pointer-events-none" 
        />
        
        {/* Smooth Blend Gradient mapped to the next section's color */}
        <div className="absolute bottom-0 inset-x-0 h-32 md:h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />
      </div>
      {children}
    </div>
  );
}
