"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Apna Dukan",
      category: "E-Commerce Website",
      image: "/projects/apna-dukan.png",
      github: "https://github.com/AEVILOP/apna-dukan-reactApp",
      live: "https://apna-dukan-react-app.vercel.app/"
    },
    {
      title: "Netflix Clone",
      category: "Landing Page Clone",
      image: "/projects/netflix.png",
      github: "https://github.com/AEVILOP/my-netflix-clone",
      live: "https://my-netflix-clone.netlify.app/"
    },
    {
      title: "Fossil Tune",
      category: "Web Music Player",
      image: "/projects/fossil-tune.png",
      github: "https://github.com/AEVILOP/Fossil-Tune",
      live: "https://fossil-tune.vercel.app/"
    },
    {
      title: "Start Your Day",
      category: "Task Management App",
      image: "/projects/task-app.png",
      github: "https://github.com/AEVILOP/task-app",
      live: "https://abstodoapp.netlify.app/"
    },
    {
      title: "DevBlog.AI",
      category: "AI Blog Generator", 
      image: "/projects/devblog-ai.png",
      github: "https://github.com/AEVILOP/Dev-AI-Blog",
      live: "https://dev-ai-blog.vercel.app/"
    }
  ];

  return (
    <section id="work" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-end mb-16 md:mb-24"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#ededed]/50 uppercase mb-2">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white/90">
              Featured <span className="font-bold text-white">Projects</span>
            </h2>
          </div>
        </motion.div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((project, idx) => {
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="group flex flex-col relative overflow-hidden rounded-[2rem] p-4 md:p-6 transition-all duration-500 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.1)]"
              >
                {/* Glassmorphism gradient sheen */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative w-full h-[250px] md:h-[350px] rounded-[1.5rem] overflow-hidden bg-black/30 border border-white/[0.06] mb-6 flex items-center justify-center p-0">
                  {/* Blurred Background Image */}
                  <Image 
                    src={project.image}
                    alt={`${project.title} background`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover blur-xl opacity-40 transform scale-110 group-hover:scale-125 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  />
                  
                  {/* Main Image */}
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transform scale-95 group-hover:-translate-y-2 group-hover:scale-100 group-hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.05)] transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  />
                  
                  {/* Floating Meta Details / Buttons revealed on hover */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md text-black rounded-full font-bold text-xs hover:scale-105 transition-transform shadow-lg" title="View Source on GitHub">
                      <Github size={16} /> GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.08] backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-xs hover:scale-105 transition-transform hover:bg-white/[0.15] shadow-lg" title="View Live Site">
                      Live <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                {/* Detail Section Below Image */}
                <div className="relative flex justify-between items-start px-2 mt-auto">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#ededed]/50 tracking-wide uppercase">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
