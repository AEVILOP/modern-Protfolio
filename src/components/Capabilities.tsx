"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Code2, DatabaseZap, Sparkles } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Frontend Architecture",
      description: "Designing scalable, maintainable, and high-performance frontend systems for enterprise applications using React, Next.js, and TypeScript.",
      icon: <LayoutTemplate size={24} className="text-indigo-400" />,
    },
    {
      title: "Full-Stack Development",
      description: "Building seamless end-to-end applications with robust Node.js backend services and modern interactive user interfaces.",
      icon: <Code2 size={24} className="text-emerald-400" />,
    },
    {
      title: "API & Authentication",
      description: "Developing secure, highly-optimized RESTful APIs and implementing complex authentication and authorization flows.",
      icon: <DatabaseZap size={24} className="text-amber-400" />,
    },
    {
      title: "AI Integrations",
      description: "Integrating advanced LLMs and AI capabilities seamlessly into web applications to deliver next-generation user experiences.",
      icon: <Sparkles size={24} className="text-rose-400" />,
    },
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-end mb-16 md:mb-24"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#ededed]/50 uppercase mb-2">
              Core Capabilities
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white/90">
              What I <span className="font-bold text-white">Do</span>
            </h2>
          </div>
        </motion.div>

        {/* Bento Grid — alternating small + wide / wide + small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {capabilities.map((item, idx) => {
            // Row 1: idx 0 = small (1 col), idx 1 = wide (2 cols)
            // Row 2: idx 2 = wide (2 cols), idx 3 = small (1 col)
            const isWide = idx === 1 || idx === 2;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className={`group flex flex-col relative overflow-hidden rounded-[2rem] p-6 md:p-8 transition-all duration-500 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.1)] ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Glassmorphism gradient sheen */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className={`relative w-full ${isWide ? 'h-[180px] md:h-[200px]' : 'h-[160px] md:h-[200px]'} rounded-[1.5rem] overflow-hidden bg-black/30 backdrop-blur-sm border border-white/[0.06] mb-6 flex items-center justify-center`}>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                    <span className="scale-[1.8] md:scale-[2.2]">{item.icon}</span>
                  </div>
                </div>

                {/* Detail Section */}
                <div className="relative flex flex-col px-2 mt-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#ededed]/50 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
