import { Layers, Link2, Database, Bot } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Frontend Architecture",
      description: "Designing scalable, maintainable, and high-performance frontend systems for enterprise applications using React, Next.js, and TypeScript.",
      icon: <Layers size={24} className="text-indigo-400" />,
    },
    {
      title: "Full-Stack Development",
      description: "Building seamless end-to-end applications with robust Node.js backend services and modern interactive user interfaces.",
      icon: <Link2 size={24} className="text-emerald-400" />,
    },
    {
      title: "API & Authentication",
      description: "Developing secure, highly-optimized RESTful APIs and implementing complex authentication and authorization flows.",
      icon: <Database size={24} className="text-amber-400" />,
    },
    {
      title: "AI Integrations",
      description: "Integrating advanced LLMs and AI capabilities seamlessly into web applications to deliver next-generation user experiences.",
      icon: <Bot size={24} className="text-rose-400" />,
    },
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header content */}
        <h2 className="text-4xl md:text-5xl font-medium text-white/70 tracking-tight mb-4 text-center">
          What I <span className="font-bold text-white">Do</span>
        </h2>
        
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#ededed]/50 uppercase mb-16">
          Core Capabilities
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {capabilities.map((item, idx) => (
            <div 
              key={idx}
              className="group p-8 md:p-10 rounded-3xl bg-[#171717] border border-white/5 hover:border-white/10 transition-all duration-500 ease-out transform hover:-translate-y-4 hover:rotate-x-[10deg] hover:rotate-y-[5deg] hover:shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.8),-20px_-20px_60px_rgba(255,255,255,0.02)] [transform-style:preserve-3d]"
              style={{ perspective: "1000px" }}
            >
              <div className="transform transition-all duration-500 group-hover:translate-z-[40px]">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[#ededed]/60 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
