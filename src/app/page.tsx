import { Suspense } from "react";
import dynamic from "next/dynamic";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import LiveBackground from "@/components/LiveBackground";
import ScrollUpButton from "@/components/ScrollUpButton";

// Heavy sections — lazy loaded so initial JS bundle stays small
const Capabilities = dynamic(() => import("@/components/Capabilities"), {
  loading: () => <div className="h-screen" />,
  ssr: false,
});
const SkillsMarquee = dynamic(() => import("@/components/SkillsMarquee"), {
  loading: () => <div className="h-64" />,
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="h-screen" />,
  ssr: false,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-screen" />,
  ssr: false,
});
const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <div className="h-64" />,
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-screen" />,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white selection:text-black">
      <Preloader />
      <CustomCursor />
      <LiveBackground />
      
      {/* Noise Grain Overlay for Awwwards Premium Feel */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04]" 
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }} 
      />
      
      <Header />

      {/* 500vh container for the scrolling canvas and overlays */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Core Capabilities Section */}
      <Suspense fallback={<div className="h-screen" />}>
        <Capabilities />
      </Suspense>

      {/* Infinite Looping Skills Marquee */}
      <Suspense fallback={<div className="h-64" />}>
        <SkillsMarquee />
      </Suspense>

      {/* Projects grid placed after the scrolling animation finishes */}
      <Suspense fallback={<div className="h-screen" />}>
        <Projects />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<div className="h-screen" />}>
        <About />
      </Suspense>

      {/* Education Timeline Data */}
      <Suspense fallback={<div className="h-64" />}>
        <Education />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div className="h-screen" />}>
        <Contact />
      </Suspense>

      {/* Footer & Contact */}
      <Suspense fallback={<div className="h-32" />}>
        <Footer />
      </Suspense>

      {/* Floating Action Button */}
      <ScrollUpButton />
    </main>
  );
}
