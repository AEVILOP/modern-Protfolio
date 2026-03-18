import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function Education() {
  return (
    <section className="relative z-20 bg-[#0c0812] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <p className="text-xs font-bold tracking-[0.2em] text-[#ededed]/50 uppercase mb-2">
          MY ACADEMIC PATH
        </p>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white/90 mb-16">
          Education <span className="font-bold text-white">Journey</span>
        </h2>

        {/* Timeline Event Card */}
        <div className="w-full relative pl-8 md:pl-0">
          
          {/* Vertical subtle line for timeline effect (Desktop only for visual balance) */}
          <div className="hidden md:block absolute left-[-40px] top-0 bottom-0 w-px bg-white/10" />
          {/* Dot */}
          <div className="hidden md:block absolute left-[-45px] top-12 w-2.5 h-2.5 rounded-full bg-fuchsia-500 ring-4 ring-fuchsia-500/20" />

          <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#18181b] to-[#121212] border border-white/5 hover:from-[#1a1a2e] hover:to-[#2d1b3d] hover:border-fuchsia-500/50 hover:shadow-[0_0_40px_rgba(217,70,239,0.15)] transition-all duration-500 w-full group">
            
            {/* Header / Title */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4">
                  B.Tech in Electronics & Communication
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium text-[#ededed]/60">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-white/40" />
                    <span>Narula Institute of Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-white/40" />
                    <span>India · On-site</span>
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest text-white/70 whitespace-nowrap self-start">
                <Calendar size={14} className="text-white/40" />
                2021 - 2025
              </div>
            </div>

            <div className="h-px w-full bg-white/5 mb-8" />

            {/* Bullet Points */}
            <ul className="space-y-4 text-[#ededed]/60 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">▸</span>
                <span>Pursuing comprehensive studies in electronics, establishing a strong foundation in hardware-software interfaces and computational logic.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">▸</span>
                <span>Self-taught and deeply specialized in Full-Stack Web Development, mastering React, Next.js, explicitly focusing on robust API architectures and databases.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">▸</span>
                <span>Developed complex real-world projects independently, bridging gaps in University curriculum with enterprise-level tools (Tailwind, Framer Motion, GSAP, AWS contexts).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">▸</span>
                <span>Continuously expanding knowledge regarding generative AI integrations utilizing cutting-edge LLMs and creating premium frontend architectures.</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
