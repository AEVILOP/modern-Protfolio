import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Capabilities from "@/components/Capabilities";
import ScrollUpButton from "@/components/ScrollUpButton";
import CustomCursor from "@/components/CustomCursor";
import SkillsMarquee from "@/components/SkillsMarquee";
import Education from "@/components/Education";
import Preloader from "@/components/Preloader";
import LiveBackground from "@/components/LiveBackground";

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
      <Capabilities />

      {/* Infinite Looping Skills Marquee */}
      <SkillsMarquee />

      {/* Projects grid placed after the scrolling animation finishes */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Education Timeline Data */}
      <Education />

      {/* Footer & Contact */}
      <Footer />

      {/* Floating Action Button */}
      <ScrollUpButton />
    </main>
  );
}
