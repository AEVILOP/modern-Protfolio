"use client";

import { motion, useScroll } from "framer-motion";
import { FileText, Github, Linkedin } from "lucide-react";

export default function Header() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-auto text-white">
        
        {/* Left Side: Logo */}
        <div className="font-bold text-xl md:text-2xl tracking-tighter uppercase whitespace-nowrap w-1/3">
          ANIRBAN.
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex justify-center gap-10 items-center text-sm font-medium tracking-wide text-white/70 w-1/3">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right Side: Resume Button & Socials */}
        <div className="flex gap-5 items-center justify-end w-1/3">
          <a 
            href="https://drive.google.com/file/d/1RiRih9lLfNDpzjB0pL9EOfSpy--F9YBD/view?usp=drive_link" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-sm font-medium backdrop-blur-md"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
          <a href="https://github.com/AEVILOP" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors hidden sm:block">
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/anirban-banerjee-7a131224a/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors hidden sm:block">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="mailto:anirbanbanerjee481@gmail.com" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Contact
          </a>
        </div>

      </header>
    </>
  );
}
